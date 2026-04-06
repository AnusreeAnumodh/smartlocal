import fs from 'fs';
import path from 'path';

function escapePdfText(text) {
  return text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

function wrapLine(line, maxChars) {
  if (line.length <= maxChars) return [line];
  const out = [];
  let remaining = line;
  while (remaining.length > maxChars) {
    let splitAt = remaining.lastIndexOf(' ', maxChars);
    if (splitAt <= 0) splitAt = maxChars;
    out.push(remaining.slice(0, splitAt));
    remaining = remaining.slice(splitAt).trimStart();
  }
  if (remaining.length > 0) out.push(remaining);
  return out;
}

function paginate(lines, linesPerPage) {
  const pages = [];
  for (let i = 0; i < lines.length; i += linesPerPage) {
    pages.push(lines.slice(i, i + linesPerPage));
  }
  return pages;
}

function buildContentStream(pageLines) {
  const content = [];
  content.push('BT');
  content.push('/F1 10 Tf');
  content.push('12 TL');
  content.push('50 792 Td');

  for (let i = 0; i < pageLines.length; i += 1) {
    const safe = escapePdfText(pageLines[i]);
    if (i === 0) {
      content.push(`(${safe}) Tj`);
    } else {
      content.push(`T* (${safe}) Tj`);
    }
  }

  content.push('ET');
  return content.join('\n');
}

function createPdfFromText(inputPath, outputPath) {
  const raw = fs.readFileSync(inputPath, 'utf8').replace(/\r\n/g, '\n');
  const sourceLines = raw.split('\n');

  const maxChars = 95;
  const wrappedLines = sourceLines.flatMap((line) => wrapLine(line, maxChars));
  const pages = paginate(wrappedLines, 60);

  const objects = [];

  // 1: Catalog, 2: Pages, 3: Font
  objects.push('<< /Type /Catalog /Pages 2 0 R >>');

  const pageObjectIds = [];
  const contentObjectIds = [];

  let nextId = 4;
  for (let i = 0; i < pages.length; i += 1) {
    pageObjectIds.push(nextId);
    nextId += 1;
    contentObjectIds.push(nextId);
    nextId += 1;
  }

  const kids = pageObjectIds.map((id) => `${id} 0 R`).join(' ');
  objects.push(`<< /Type /Pages /Kids [ ${kids} ] /Count ${pages.length} >>`);
  objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>');

  for (let i = 0; i < pages.length; i += 1) {
    const pageObj =
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R >> >> /Contents ${contentObjectIds[i]} 0 R >>`;
    objects.push(pageObj);

    const stream = buildContentStream(pages[i]);
    const length = Buffer.byteLength(stream, 'utf8');
    const contentObj = `<< /Length ${length} >>\nstream\n${stream}\nendstream`;
    objects.push(contentObj);
  }

  let pdf = '%PDF-1.4\n';
  const offsets = [0];

  for (let i = 0; i < objects.length; i += 1) {
    offsets.push(Buffer.byteLength(pdf, 'utf8'));
    const objNum = i + 1;
    pdf += `${objNum} 0 obj\n${objects[i]}\nendobj\n`;
  }

  const xrefStart = Buffer.byteLength(pdf, 'utf8');
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += '0000000000 65535 f \n';

  for (let i = 1; i <= objects.length; i += 1) {
    const off = String(offsets[i]).padStart(10, '0');
    pdf += `${off} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, pdf, 'binary');
}

const inputPath = process.argv[2];
const outputPath = process.argv[3];

if (!inputPath || !outputPath) {
  console.error('Usage: node scripts/txt-to-pdf.js <input.txt> <output.pdf>');
  process.exit(1);
}

createPdfFromText(path.resolve(inputPath), path.resolve(outputPath));
console.log(`PDF generated: ${path.resolve(outputPath)}`);
