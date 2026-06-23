/**
 * Usage: node tools/extract_pdf.js <file.pdf> [output.md]
 *
 * Extracts text from a .pdf file using Node.js built-ins only (no npm).
 * Works by decompressing PDF content streams with zlib and parsing
 * text-drawing operators (Tj, TJ, '). Best-effort — works for most
 * standard text PDFs; may miss text in heavily embedded-font PDFs.
 *
 * Output defaults to <file>_extracted.md next to the source file.
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const pdfPath = path.resolve(process.argv[2]);
const defaultOut = path.join(path.dirname(pdfPath), path.basename(pdfPath, '.pdf') + '_extracted.md');
const outputFile = process.argv[3] ? path.resolve(process.argv[3]) : defaultOut;

if (!pdfPath || !fs.existsSync(pdfPath)) {
    console.error('Usage: node tools/extract_pdf.js <file.pdf> [output.md]');
    process.exit(1);
}

const buf = fs.readFileSync(pdfPath);

// Extract raw bytes between "stream" and "endstream" markers
function getRawStreams(buffer) {
    const streams = [];
    let pos = 0;
    while (pos < buffer.length) {
        const streamMarker = buffer.indexOf('stream', pos);
        if (streamMarker === -1) break;
        // Skip past "stream\r\n" or "stream\n"
        let start = streamMarker + 6;
        if (buffer[start] === 0x0d && buffer[start + 1] === 0x0a) start += 2;
        else if (buffer[start] === 0x0a) start += 1;

        const endMarker = buffer.indexOf('endstream', start);
        if (endMarker === -1) break;

        streams.push(buffer.slice(start, endMarker));
        pos = endMarker + 9;
    }
    return streams;
}

// Try to inflate a stream; return null if not compressed or fails
function tryInflate(streamBuf) {
    try {
        return zlib.inflateSync(streamBuf);
    } catch (_) {
        try {
            return zlib.inflateRawSync(streamBuf);
        } catch (_) {
            return null;
        }
    }
}

// Extract text from a decoded PDF content stream
function extractTextFromStream(content) {
    const text = content.toString('latin1');
    const lines = [];
    let inText = false;
    let i = 0;

    while (i < text.length) {
        // Begin/end text blocks
        if (text.slice(i, i + 2) === 'BT') { inText = true; i += 2; continue; }
        if (text.slice(i, i + 2) === 'ET') { inText = false; i += 2; continue; }

        if (!inText) { i++; continue; }

        // Td / TD / T* — newline hints
        if (text.slice(i, i + 2) === 'Td' || text.slice(i, i + 2) === 'TD' ||
            text.slice(i, i + 2) === 'T*') {
            lines.push('\n');
            i += 2;
            continue;
        }

        // Tj — single string: (text) Tj
        if (text[i] === '(') {
            let j = i + 1;
            let str = '';
            while (j < text.length && text[j] !== ')') {
                if (text[j] === '\\') { j++; str += text[j] || ''; }
                else str += text[j];
                j++;
            }
            // Look ahead for Tj or '
            const afterClose = text.slice(j + 1).trimStart();
            if (afterClose.startsWith('Tj') || afterClose.startsWith("'")) {
                lines.push(str);
            }
            i = j + 1;
            continue;
        }

        // TJ — array of strings: [(text) n (text)] TJ
        if (text[i] === '[') {
            let j = i + 1;
            let str = '';
            while (j < text.length && text[j] !== ']') {
                if (text[j] === '(') {
                    j++;
                    while (j < text.length && text[j] !== ')') {
                        if (text[j] === '\\') { j++; str += text[j] || ''; }
                        else str += text[j];
                        j++;
                    }
                    str += ' ';
                }
                j++;
            }
            const afterBracket = text.slice(j + 1).trimStart();
            if (afterBracket.startsWith('TJ')) {
                lines.push(str.trim());
            }
            i = j + 1;
            continue;
        }

        i++;
    }

    return lines.join(' ').replace(/ {2,}/g, ' ').trim();
}

// Build page-level text by processing all streams
const rawStreams = getRawStreams(buf);
const pageTexts = [];

for (const raw of rawStreams) {
    const decoded = tryInflate(raw) || raw;
    const text = extractTextFromStream(decoded);
    if (text && text.length > 20) {
        pageTexts.push(text);
    }
}

// Deduplicate adjacent identical blocks (some PDFs repeat streams)
const deduped = pageTexts.filter((t, i) => t !== pageTexts[i - 1]);

if (deduped.length === 0) {
    console.error('No text could be extracted. The PDF may use embedded fonts or encryption.');
    process.exit(1);
}

const title = path.basename(pdfPath, '.pdf');
let markdown = `# ${title} — Extracted Content\n\n`;
markdown += `*Extracted: ${new Date().toISOString().slice(0, 10)}*\n\n---\n\n`;
markdown += deduped.join('\n\n---\n\n');

fs.writeFileSync(outputFile, markdown, 'utf8');
console.log(`Done. ${deduped.length} content blocks extracted.`);
console.log(`Output: ${outputFile}`);
