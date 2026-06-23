/**
 * Usage: node tools/extract_docx.js <folder-or-file.docx> [output.md]
 *
 * Extracts text from one .docx file or all .docx files in a folder.
 * Uses mammoth from existing node_modules — no new npm install needed.
 *
 * Output defaults to:
 *   - Single file:  <file>_extracted.md  (next to the source file)
 *   - Folder:       <folder>/../<FolderName>_extracted.md
 */

const fs = require('fs');
const path = require('path');

// Resolve mammoth from existing installs in the project
const mammothCandidates = [
    path.join(__dirname, '..', 'Contents', 'AFDM', 'Lecture_Contents', 'node_modules', 'mammoth'),
    path.join(__dirname, '..', 'Contents', 'FIM', 'node_modules', 'mammoth'),
];
const mammothPath = mammothCandidates.find(p => fs.existsSync(p));
if (!mammothPath) {
    console.error('mammoth not found. Run: npm install mammoth in Contents/AFDM/Lecture_Contents/');
    process.exit(1);
}
const mammoth = require(mammothPath);

const target = path.resolve(process.argv[2]);
if (!target || !fs.existsSync(target)) {
    console.error('Usage: node tools/extract_docx.js <folder-or-file.docx> [output.md]');
    process.exit(1);
}

async function extractFile(filePath) {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
}

async function main() {
    const stat = fs.statSync(target);
    const isDir = stat.isDirectory();

    const files = isDir
        ? fs.readdirSync(target).filter(f => f.endsWith('.docx')).map(f => path.join(target, f)).sort()
        : [target];

    if (files.length === 0) {
        console.error(`No .docx files found in: ${target}`);
        process.exit(1);
    }

    const folderName = isDir ? path.basename(target) : path.basename(target, '.docx');
    const defaultOut = isDir
        ? path.join(target, '..', folderName + '_extracted.md')
        : path.join(path.dirname(target), folderName + '_extracted.md');
    const outputFile = process.argv[3] ? path.resolve(process.argv[3]) : defaultOut;

    let markdown = `# ${folderName} — Extracted Content\n\n`;
    markdown += `*Extracted: ${new Date().toISOString().slice(0, 10)}*\n\n---\n\n`;

    for (const file of files) {
        console.log(`Extracting: ${path.basename(file)}`);
        const text = await extractFile(file);
        if (files.length > 1) markdown += `## ${path.basename(file, '.docx')}\n\n`;
        markdown += text.trim() + '\n\n---\n\n';
    }

    fs.writeFileSync(outputFile, markdown, 'utf8');
    console.log(`\nDone. Output: ${outputFile}`);
}

main().catch(err => { console.error(err); process.exit(1); });
