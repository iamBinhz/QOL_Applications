const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');

async function extractDocx(filePath) {
    try {
        const result = await mammoth.extractRawText({ path: filePath });
        return result.value;
    } catch (e) {
        return `[Error extracting ${filePath}: ${e.message}]`;
    }
}

async function findDocxFiles(dir, files = []) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && item !== 'node_modules') {
            findDocxFiles(fullPath, files);
        } else if (item.endsWith('.docx') && !item.startsWith('~$')) {
            files.push(fullPath);
        }
    }
    return files;
}

async function main() {
    const baseDir = process.cwd();
    const files = await findDocxFiles(baseDir);

    for (const file of files) {
        const relPath = path.relative(baseDir, file);
        console.log(`\n${'='.repeat(70)}`);
        console.log(`FILE: ${relPath}`);
        console.log('='.repeat(70));
        const content = await extractDocx(file);
        console.log(content);
    }
}

main();
