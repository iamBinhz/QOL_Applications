/**
 * Usage: node tools/extract_pptx_full.js <pptx-folder> <text-out-folder> <image-out-folder>
 *
 * For every .pptx in <pptx-folder> (natural-sorted), in a SINGLE expand pass:
 *   1. Writes per-deck text  -> <text-out-folder>/<base>.md   (one "## Slide N" block each)
 *   2. Copies every slide-referenced media file -> <image-out-folder>/W<week>/
 *      named  W<week>_P<firstSlide>_<slug-of-alt-or-title>[_<n>].<ext>
 *      (slug taken from the picture's alt-text/descr, else the slide title)
 *   3. Writes a per-week image index + global 00_INDEX.md in each output folder.
 *
 * No npm deps — Node built-ins + PowerShell Expand-Archive (PPTX = ZIP; copied
 * to a .zip temp name first because Expand-Archive only accepts .zip).
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os = require('os');

const srcDir = path.resolve(process.argv[2] || 'Contents/EBF/Lecture_Contents');
const textOut = path.resolve(process.argv[3] || 'Contents/EBF/Extracted_Lecture_Contents');
const imgOut = path.resolve(process.argv[4] || 'Contents/EBF/Extracted_Images');
const TODAY = new Date().toISOString().slice(0, 10);

fs.mkdirSync(textOut, { recursive: true });
fs.mkdirSync(imgOut, { recursive: true });

// ---- helpers -------------------------------------------------------------
const GENERIC = /^(picture|image|images|content placeholder|object|objet|graphic|graphique|placeholder|title|subtitle|rectangle|oval|ellipse|freeform|group|groupe|text ?box|google shape|chart|diagram|slide|line|connector|straight|arrow|table|zone de texte|espace réservé)\b/i;

function decodeEnt(s) {
    return s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
        .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
        .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)));
}
function goodAlt(a) {
    a = decodeEnt((a || '').trim());
    if (a.length < 3 || GENERIC.test(a)) return '';
    return a;
}
function slug(s) {
    const out = decodeEnt(s || '').normalize('NFKD').replace(/[̀-ͯ]/g, '')
        .replace(/&/g, ' and ')
        .replace(/[^A-Za-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
        .slice(0, 48).replace(/-+$/, '');
    return out || 'image';
}
function expand(filePath) {
    const tmp = path.join(os.tmpdir(), 'pptx_' + Date.now() + '_' + Math.random().toString(36).slice(2));
    fs.mkdirSync(tmp, { recursive: true });
    const zip = filePath + '.zip';
    fs.copyFileSync(filePath, zip);
    try {
        execSync(`powershell -Command "Expand-Archive -Path '${zip}' -DestinationPath '${tmp}' -Force"`, { stdio: 'pipe' });
    } finally { if (fs.existsSync(zip)) fs.unlinkSync(zip); }
    return tmp;
}
function slideTexts(xml) {
    const out = [];
    const re = /<a:t[^>]*>([^<]*)<\/a:t>/g;
    let m;
    while ((m = re.exec(xml)) !== null) {
        const t = decodeEnt(m[1]).trim();
        if (t) out.push(t);
    }
    return out;
}

// ---- per-file processing -------------------------------------------------
const files = fs.readdirSync(srcDir).filter(f => f.toLowerCase().endsWith('.pptx'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const globalText = [];   // {week, base, slides, textSlides, imgCount}
const globalImg = [];    // {week, count}

for (const file of files) {
    const base = file.replace(/\.pptx$/i, '');
    const week = (base.match(/W([0-9_]+)/i) || [, base])[1]; // "14_1", "1", ...
    const tmp = expand(path.join(srcDir, file));
    const slidesDir = path.join(tmp, 'ppt', 'slides');
    if (!fs.existsSync(slidesDir)) { fs.rmSync(tmp, { recursive: true, force: true }); continue; }

    const slideFiles = fs.readdirSync(slidesDir).filter(f => /^slide\d+\.xml$/.test(f))
        .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));

    const weekImgDir = path.join(imgOut, 'W' + week);
    // media -> {firstSlide, alt, title, ext}
    const mediaInfo = new Map();
    const usedNames = new Set();
    let mdSlides = [];
    let textSlideCount = 0;

    for (const sf of slideFiles) {
        const slideNum = parseInt(sf.match(/\d+/)[0]);
        const xml = fs.readFileSync(path.join(slidesDir, sf), 'utf8');

        // text
        const texts = slideTexts(xml);
        const title = texts.find(t => t.length > 2) || '';
        if (texts.length) textSlideCount++;

        // rels: rId -> media basename (image type only)
        const relsPath = path.join(slidesDir, '_rels', sf + '.rels');
        const ridToMedia = {};
        if (fs.existsSync(relsPath)) {
            const rels = fs.readFileSync(relsPath, 'utf8');
            const rr = /<Relationship\b[^>]*\bId="([^"]+)"[^>]*\bTarget="([^"]+)"[^>]*>/g;
            let r;
            while ((r = rr.exec(rels)) !== null) {
                const block = r[0];
                if (/Type="[^"]*\/image"/.test(block) && /\/media\//.test(r[2])) {
                    ridToMedia[r[1]] = path.basename(r[2]);
                }
            }
        }

        // alt-text per embedded picture (match <p:pic> blocks)
        const ridAlt = {};
        const picRe = /<p:pic>([\s\S]*?)<\/p:pic>/g;
        let p;
        while ((p = picRe.exec(xml)) !== null) {
            const blk = p[1];
            const embed = (blk.match(/<a:blip[^>]*r:(?:embed|link)="([^"]+)"/) || [])[1];
            if (!embed) continue;
            const descr = (blk.match(/<p:cNvPr\b[^>]*\bdescr="([^"]*)"/) || [])[1];
            const ttl = (blk.match(/<p:cNvPr\b[^>]*\btitle="([^"]*)"/) || [])[1];
            const nm = (blk.match(/<p:cNvPr\b[^>]*\bname="([^"]*)"/) || [])[1];
            ridAlt[embed] = goodAlt(descr) || goodAlt(ttl) || goodAlt(nm) || '';
        }

        // record every image rId actually placed on this slide
        const imgsThisSlide = [];
        for (const rid of Object.keys(ridToMedia)) {
            if (!(xml.includes(`r:embed="${rid}"`) || xml.includes(`r:link="${rid}"`))) continue;
            const media = ridToMedia[rid];
            const alt = ridAlt[rid] || '';
            if (!mediaInfo.has(media)) {
                mediaInfo.set(media, { firstSlide: slideNum, alt, title, ext: path.extname(media) });
            } else if (alt && !mediaInfo.get(media).alt) {
                mediaInfo.get(media).alt = alt; // backfill a better name
            }
            imgsThisSlide.push({ media, alt });
        }

        // build md block
        let block = `## Slide ${slideNum}\n\n`;
        block += texts.length ? texts.join('\n') + '\n' : '*(no text on this slide)*\n';
        if (imgsThisSlide.length) {
            block += `\n*Images: ${imgsThisSlide.length}*\n`;
        }
        mdSlides.push(block);
    }

    // copy media + name it
    let imgCount = 0;
    const indexRows = [];
    if (mediaInfo.size) fs.mkdirSync(weekImgDir, { recursive: true });
    // order by slide then media name for stable output
    const ordered = [...mediaInfo.entries()].sort((a, b) =>
        a[1].firstSlide - b[1].firstSlide || a[0].localeCompare(b[0], undefined, { numeric: true }));
    for (const [media, info] of ordered) {
        const srcMedia = path.join(tmp, 'ppt', 'media', media);
        if (!fs.existsSync(srcMedia)) continue;
        const namePart = slug(info.alt || info.title || 'image');
        let fname = `W${week}_P${info.firstSlide}_${namePart}${info.ext.toLowerCase()}`;
        let n = 2;
        while (usedNames.has(fname.toLowerCase())) {
            fname = `W${week}_P${info.firstSlide}_${namePart}_${n}${info.ext.toLowerCase()}`;
            n++;
        }
        usedNames.add(fname.toLowerCase());
        fs.copyFileSync(srcMedia, path.join(weekImgDir, fname));
        imgCount++;
        indexRows.push(`| ${info.firstSlide} | \`${fname}\` | ${info.alt || info.title || '—'} |`);
    }

    // write text md
    let md = `# ${base} — Extracted Lecture Content\n\n`;
    md += `*Source: ${file} · ${slideFiles.length} slides · ${imgCount} images · Extracted ${TODAY}*\n\n---\n\n`;
    md += mdSlides.join('\n---\n\n');
    fs.writeFileSync(path.join(textOut, base + '.md'), md, 'utf8');

    // write per-week image index
    if (imgCount) {
        let idx = `# ${base} — Image Index (${imgCount} images)\n\n`;
        idx += `Folder: \`Extracted_Images/W${week}/\`\n\n`;
        idx += `| Slide | File | Name / Alt-text |\n|---|---|---|\n` + indexRows.join('\n') + '\n';
        fs.writeFileSync(path.join(weekImgDir, '_INDEX.md'), idx, 'utf8');
    }

    globalText.push({ week, base, slides: slideFiles.length, textSlides: textSlideCount, imgCount });
    globalImg.push({ week, count: imgCount });
    console.log(`${file.padEnd(16)} -> ${base}.md (${slideFiles.length} slides) | ${imgCount} images -> W${week}/`);
    fs.rmSync(tmp, { recursive: true, force: true });
}

// ---- global indexes ------------------------------------------------------
let ti = `# EBF — Extracted Lecture Contents\n\n*Extracted ${TODAY} from ${files.length} PPTX decks (weeks 7 & 17 absent in source).*\n\n`;
ti += `| Week | File | Slides | Slides w/ text | Images |\n|---|---|---|---|---|\n`;
ti += globalText.map(g => `| ${g.week} | [${g.base}.md](${g.base}.md) | ${g.slides} | ${g.textSlides} | ${g.imgCount} |`).join('\n') + '\n';
fs.writeFileSync(path.join(textOut, '00_INDEX.md'), ti, 'utf8');

const totalImg = globalImg.reduce((s, g) => s + g.count, 0);
let ii = `# EBF — Extracted Images\n\n*Extracted ${TODAY}. ${totalImg} images across ${globalImg.filter(g => g.count).length} weeks.*\n\n`;
ii += `Naming: \`W<week>_P<slide>_<name>.<ext>\` — name from each picture's alt-text, else the slide title. See each \`W<week>/_INDEX.md\`.\n\n`;
ii += `| Week | Folder | Images |\n|---|---|---|\n`;
ii += globalImg.map(g => `| ${g.week} | \`W${g.week}/\` | ${g.count} |`).join('\n') + `\n\n**Total: ${totalImg}**\n`;
fs.writeFileSync(path.join(imgOut, '00_INDEX.md'), ii, 'utf8');

console.log(`\nDone. ${files.length} decks · ${totalImg} images.`);
console.log(`Text:   ${textOut}`);
console.log(`Images: ${imgOut}`);
