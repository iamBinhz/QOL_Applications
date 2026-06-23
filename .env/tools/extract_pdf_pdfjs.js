/**
 * Usage: node tools/extract_pdf_pdfjs.js <file.pdf> [output.md]
 *
 * Higher-fidelity PDF text extraction using Mozilla's pdfjs-dist (legacy build).
 * Unlike tools/extract_pdf.js (zlib + raw operator parsing), pdfjs maps glyphs
 * to Unicode via embedded font data / ToUnicode, so it recovers text from
 * subset/CID-font slide PDFs that the zlib approach turns into binary noise.
 *
 * Output defaults to <file>_extracted.md next to the source file.
 * Requires: npm install pdfjs-dist  (run from project root).
 */

const fs = require('fs');
const path = require('path');

const pdfPath = path.resolve(process.argv[2] || '');
const defaultOut = path.join(path.dirname(pdfPath), path.basename(pdfPath, '.pdf') + '_extracted.md');
const outputFile = process.argv[3] ? path.resolve(process.argv[3]) : defaultOut;

if (!process.argv[2] || !fs.existsSync(pdfPath)) {
    console.error('Usage: node tools/extract_pdf_pdfjs.js <file.pdf> [output.md]');
    process.exit(1);
}

(async () => {
    // pdfjs-dist v3 legacy build runs in headless Node (no canvas/DOMMatrix
    // needed for text extraction). Dynamic import of the CJS build exposes the
    // API on .default.
    const mod = await import('pdfjs-dist/legacy/build/pdf.js');
    const pdfjs = (mod.default && mod.default.getDocument) ? mod.default : mod;

    const data = new Uint8Array(fs.readFileSync(pdfPath));
    const doc = await pdfjs.getDocument({
        data,
        useSystemFonts: true,
        isEvalSupported: false,
        verbosity: 0,
    }).promise;

    const title = path.basename(pdfPath, '.pdf');
    let md = `# ${title} — Extracted Content (pdfjs)\n\n`;
    md += `*Extracted: ${new Date().toISOString().slice(0, 10)} · ${doc.numPages} pages*\n\n---\n\n`;

    let totalChars = 0;
    for (let p = 1; p <= doc.numPages; p++) {
        const page = await doc.getPage(p);
        const content = await page.getTextContent();

        let pageText = '';
        for (const item of content.items) {
            pageText += item.str;
            if (item.hasEOL) pageText += '\n';
            else pageText += ' ';
        }
        pageText = pageText.replace(/[ \t]{2,}/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
        totalChars += pageText.length;

        md += `## Page ${p}\n\n${pageText || '*(no text on this page)*'}\n\n---\n\n`;
    }

    fs.writeFileSync(outputFile, md, 'utf8');
    console.log(`Done. ${doc.numPages} pages, ${totalChars} text chars.`);
    console.log(`Output: ${outputFile}`);
})().catch(err => {
    console.error('pdfjs extraction failed:', err.message);
    process.exit(1);
});
