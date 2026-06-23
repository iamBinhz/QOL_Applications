/**
 * Usage: node tools/extract_pptx.js <folder-with-pptx> [output.md]
 *
 * Extracts text from all .pptx files in the given folder and writes a
 * single markdown file. Output defaults to <folder>/../<FolderName>_extracted.md
 *
 * No npm dependencies — uses Node built-ins + PowerShell Expand-Archive.
 * Workaround: PPTX is a ZIP but Expand-Archive only accepts .zip extension,
 * so each file is temporarily copied with a .zip suffix before extraction.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os = require('os');

const targetDir = path.resolve(process.argv[2] || '.');
const folderName = path.basename(targetDir);
const defaultOut = path.join(targetDir, '..', folderName + '_extracted.md');
const outputFile = path.resolve(process.argv[3] || defaultOut);

function extractPptx(filePath) {
    const tmpDir = path.join(os.tmpdir(), 'pptx_' + Date.now() + '_' + Math.random().toString(36).slice(2));
    fs.mkdirSync(tmpDir, { recursive: true });

    const zipPath = filePath + '.zip';
    fs.copyFileSync(filePath, zipPath);
    try {
        execSync(
            `powershell -Command "Expand-Archive -Path '${zipPath}' -DestinationPath '${tmpDir}' -Force"`,
            { stdio: 'pipe' }
        );
    } finally {
        if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
    }

    const slidesDir = path.join(tmpDir, 'ppt', 'slides');
    if (!fs.existsSync(slidesDir)) {
        fs.rmSync(tmpDir, { recursive: true, force: true });
        return '';
    }

    const slideFiles = fs.readdirSync(slidesDir)
        .filter(f => /^slide\d+\.xml$/.test(f))
        .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));

    let content = '';
    for (const sf of slideFiles) {
        const xml = fs.readFileSync(path.join(slidesDir, sf), 'utf8');
        const texts = [];
        const regex = /<a:t[^>]*>([^<]*)<\/a:t>/g;
        let m;
        while ((m = regex.exec(xml)) !== null) {
            const t = m[1].trim();
            if (t) texts.push(t);
        }
        if (texts.length > 0) content += texts.join(' ') + '\n\n---\n\n';
    }

    fs.rmSync(tmpDir, { recursive: true, force: true });
    return content;
}

const pptxFiles = fs.readdirSync(targetDir)
    .filter(f => f.endsWith('.pptx'))
    .sort();

if (pptxFiles.length === 0) {
    console.error(`No .pptx files found in: ${targetDir}`);
    process.exit(1);
}

let markdown = `# ${folderName} — Extracted Lecture Content\n\n`;
markdown += `*Extracted: ${new Date().toISOString().slice(0, 10)}*\n\n---\n\n`;

for (const file of pptxFiles) {
    console.log(`Extracting: ${file}`);
    markdown += `## ${file.replace('.pptx', '')}\n\n`;
    markdown += extractPptx(path.join(targetDir, file)) || '*No text content extracted.*\n\n';
}

fs.writeFileSync(outputFile, markdown, 'utf8');
console.log(`\nDone. Output: ${outputFile}`);
