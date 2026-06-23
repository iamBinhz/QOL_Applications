/**
 * Usage: node tools/read_xlsx.js <file.xlsx> [output.md]
 *
 * Reads all sheets from an .xlsx file and prints tab-separated cell values.
 * If output path is given, writes markdown to that file; otherwise prints to console.
 *
 * No npm dependencies — uses Node built-ins + PowerShell Expand-Archive.
 * Workaround: XLSX is a ZIP but Expand-Archive only accepts .zip extension.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os = require('os');

const xlsxPath = path.resolve(process.argv[2]);
const outputFile = process.argv[3] ? path.resolve(process.argv[3]) : null;

if (!xlsxPath || !fs.existsSync(xlsxPath)) {
    console.error('Usage: node tools/read_xlsx.js <file.xlsx> [output.md]');
    process.exit(1);
}

function extractXlsx(filePath) {
    const tmpDir = path.join(os.tmpdir(), 'xlsx_' + Date.now() + '_' + Math.random().toString(36).slice(2));
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

    // Shared strings
    let sharedStrings = [];
    const ssPath = path.join(tmpDir, 'xl', 'sharedStrings.xml');
    if (fs.existsSync(ssPath)) {
        const ssXml = fs.readFileSync(ssPath, 'utf8');
        const siRegex = /<si>([\s\S]*?)<\/si>/g;
        let m;
        while ((m = siRegex.exec(ssXml)) !== null) {
            sharedStrings.push([...m[1].matchAll(/<t[^>]*>([^<]*)<\/t>/g)].map(x => x[1]).join(''));
        }
    }

    // Sheet names via workbook + rels
    const wbXml = fs.readFileSync(path.join(tmpDir, 'xl', 'workbook.xml'), 'utf8');
    const relsXml = fs.readFileSync(path.join(tmpDir, 'xl', '_rels', 'workbook.xml.rels'), 'utf8');
    const rIdToFile = {};
    const sheetNames = {};
    let rm;
    const relRe = /<Relationship[^>]+Id="([^"]+)"[^>]+Target="([^"]+)"/g;
    while ((rm = relRe.exec(relsXml)) !== null) rIdToFile[rm[1]] = rm[2];
    const sheetRe = /<sheet[^>]+name="([^"]+)"[^>]+r:id="([^"]+)"/g;
    while ((rm = sheetRe.exec(wbXml)) !== null) sheetNames[rm[2]] = rm[1];

    const sheetsDir = path.join(tmpDir, 'xl', 'worksheets');
    const sheets = {};

    for (const sf of fs.readdirSync(sheetsDir).filter(f => /^sheet\d+\.xml$/.test(f)).sort()) {
        const rId = Object.keys(rIdToFile).find(k => rIdToFile[k].includes(sf));
        const name = (rId && sheetNames[rId]) ? sheetNames[rId] : sf.replace('.xml', '');
        const xml = fs.readFileSync(path.join(sheetsDir, sf), 'utf8');
        const rows = {};
        const rowRe = /<row[^>]+r="(\d+)"[^>]*>([\s\S]*?)<\/row>/g;
        let r;
        while ((r = rowRe.exec(xml)) !== null) {
            const cells = {};
            const cellRe = /<c r="([A-Z]+)\d+"([^>]*)>([\s\S]*?)<\/c>/g;
            let c;
            while ((c = cellRe.exec(r[2])) !== null) {
                const vM = c[3].match(/<v>([^<]*)<\/v>/);
                if (!vM) continue;
                cells[c[1]] = c[2].includes('t="s"') ? (sharedStrings[parseInt(vM[1])] || '') : vM[1];
            }
            rows[parseInt(r[1])] = cells;
        }
        sheets[name] = rows;
    }

    fs.rmSync(tmpDir, { recursive: true, force: true });
    return sheets;
}

function sheetsToMarkdown(sheets, fileName) {
    const title = path.basename(fileName, '.xlsx');
    let md = `# ${title}\n\n*Extracted: ${new Date().toISOString().slice(0, 10)}*\n\n`;

    for (const [name, rows] of Object.entries(sheets)) {
        md += `## Sheet: ${name}\n\n`;
        const rowNums = Object.keys(rows).map(Number).sort((a, b) => a - b);
        if (rowNums.length === 0) { md += '*(empty)*\n\n'; continue; }

        const allCols = new Set();
        rowNums.forEach(r => Object.keys(rows[r]).forEach(c => allCols.add(c)));
        const cols = [...allCols].sort();

        for (const r of rowNums) {
            const parts = cols.map(c => (rows[r][c] || '').toString().trim());
            const line = parts.filter(Boolean).join('\t');
            if (line.trim()) md += line + '\n';
        }
        md += '\n';
    }
    return md;
}

const sheets = extractXlsx(xlsxPath);

if (outputFile) {
    const md = sheetsToMarkdown(sheets, xlsxPath);
    fs.writeFileSync(outputFile, md, 'utf8');
    console.log(`Done. Output: ${outputFile}`);
} else {
    const fileName = path.basename(xlsxPath);
    console.log('='.repeat(70));
    console.log(`FILE: ${fileName}`);
    console.log('='.repeat(70));
    for (const [name, rows] of Object.entries(sheets)) {
        const rowNums = Object.keys(rows).map(Number).sort((a, b) => a - b);
        const allCols = new Set();
        rowNums.forEach(r => Object.keys(rows[r]).forEach(c => allCols.add(c)));
        const cols = [...allCols].sort();
        console.log(`\n--- ${name} ---`);
        for (const r of rowNums) {
            const parts = cols.map(c => (rows[r][c] || '').toString().trim());
            const line = parts.filter(Boolean).join('\t');
            if (line.trim()) console.log(line);
        }
    }
}
