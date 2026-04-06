const fs = require('fs');
const path = require('path');

function esc(text) {
  return String(text).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

function wrapText(text, maxChars) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = '';
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w;
    if (next.length > maxChars) {
      if (cur) lines.push(cur);
      if (w.length > maxChars) {
        let chunk = w;
        while (chunk.length > maxChars) {
          lines.push(chunk.slice(0, maxChars - 1) + '-');
          chunk = chunk.slice(maxChars - 1);
        }
        cur = chunk;
      } else {
        cur = w;
      }
    } else {
      cur = next;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

class Page {
  constructor(w = 595, h = 842) {
    this.w = w;
    this.h = h;
    this.cmd = [];
  }

  rect(x, y, w, h, opts = {}) {
    const { fill = null, stroke = [0.25, 0.3, 0.36], line = 1, radius = 0 } = opts;
    this.cmd.push('q');
    this.cmd.push(`${line} w`);
    if (fill) this.cmd.push(`${fill[0]} ${fill[1]} ${fill[2]} rg`);
    if (stroke) this.cmd.push(`${stroke[0]} ${stroke[1]} ${stroke[2]} RG`);

    if (radius > 0) {
      const r = Math.min(radius, w / 2, h / 2);
      const c = 0.552284749831 * r;
      const x0 = x, y0 = y, x1 = x + w, y1 = y + h;
      this.cmd.push(`${x0 + r} ${y0} m`);
      this.cmd.push(`${x1 - r} ${y0} l`);
      this.cmd.push(`${x1 - r + c} ${y0} ${x1} ${y0 + r - c} ${x1} ${y0 + r} c`);
      this.cmd.push(`${x1} ${y1 - r} l`);
      this.cmd.push(`${x1} ${y1 - r + c} ${x1 - r + c} ${y1} ${x1 - r} ${y1} c`);
      this.cmd.push(`${x0 + r} ${y1} l`);
      this.cmd.push(`${x0 + r - c} ${y1} ${x0} ${y1 - r + c} ${x0} ${y1 - r} c`);
      this.cmd.push(`${x0} ${y0 + r} l`);
      this.cmd.push(`${x0} ${y0 + r - c} ${x0 + r - c} ${y0} ${x0 + r} ${y0} c`);
      this.cmd.push('h');
    } else {
      this.cmd.push(`${x} ${y} ${w} ${h} re`);
    }

    if (fill && stroke) this.cmd.push('B');
    else if (fill) this.cmd.push('f');
    else this.cmd.push('S');
    this.cmd.push('Q');
  }

  line(x1, y1, x2, y2, opts = {}) {
    const { color = [0.3, 0.34, 0.4], line = 1 } = opts;
    this.cmd.push('q');
    this.cmd.push(`${line} w`);
    this.cmd.push(`${color[0]} ${color[1]} ${color[2]} RG`);
    this.cmd.push(`${x1} ${y1} m ${x2} ${y2} l S`);
    this.cmd.push('Q');
  }

  arrow(x1, y1, x2, y2, opts = {}) {
    const { color = [0.2, 0.24, 0.3], line = 1.2, size = 6 } = opts;
    this.line(x1, y1, x2, y2, { color, line });
    const a = Math.atan2(y2 - y1, x2 - x1);
    const x3 = x2 - size * Math.cos(a - Math.PI / 6);
    const y3 = y2 - size * Math.sin(a - Math.PI / 6);
    const x4 = x2 - size * Math.cos(a + Math.PI / 6);
    const y4 = y2 - size * Math.sin(a + Math.PI / 6);
    this.cmd.push('q');
    this.cmd.push(`${color[0]} ${color[1]} ${color[2]} rg`);
    this.cmd.push(`${x2} ${y2} m ${x3} ${y3} l ${x4} ${y4} l h f`);
    this.cmd.push('Q');
  }

  text(x, y, text, opts = {}) {
    const { size = 10, font = 'F1', color = [0.1, 0.13, 0.17] } = opts;
    this.cmd.push('BT');
    this.cmd.push(`/${font} ${size} Tf`);
    this.cmd.push(`${color[0]} ${color[1]} ${color[2]} rg`);
    this.cmd.push(`${x} ${y} Td`);
    this.cmd.push(`(${esc(text)}) Tj`);
    this.cmd.push('ET');
  }

  textCenter(x, y, w, text, opts = {}) {
    const { size = 10, font = 'F1', color = [0.1, 0.13, 0.17] } = opts;
    const estimate = text.length * size * 0.48;
    const tx = x + (w - estimate) / 2;
    this.text(tx, y, text, { size, font, color });
  }

  textBlock(x, y, lines, opts = {}) {
    const { size = 10, leading = 14, font = 'F1', color = [0.1, 0.13, 0.17] } = opts;
    this.cmd.push('BT');
    this.cmd.push(`/${font} ${size} Tf`);
    this.cmd.push(`${leading} TL`);
    this.cmd.push(`${color[0]} ${color[1]} ${color[2]} rg`);
    this.cmd.push(`${x} ${y} Td`);
    lines.forEach((ln, i) => {
      if (i === 0) this.cmd.push(`(${esc(ln)}) Tj`);
      else this.cmd.push(`T* (${esc(ln)}) Tj`);
    });
    this.cmd.push('ET');
  }

  paragraph(x, y, w, text, opts = {}) {
    const size = opts.size || 10;
    const maxChars = Math.max(18, Math.floor(w / (size * 0.52)));
    const lines = wrapText(text, maxChars);
    this.textBlock(x, y, lines, opts);
    return lines.length;
  }

  table(x, yTop, colWidths, headers, rows, opts = {}) {
    const minRowH = opts.rowH || 22;
    const fontSize = opts.fontSize || 8.5;
    const lineH = opts.lineH || 11;
    const padX = opts.padX || 6;
    const padY = opts.padY || 7;
    const headerFill = opts.headerFill || [0.9, 0.94, 0.98];
    const rowFillA = opts.rowFillA || [1, 1, 1];
    const rowFillB = opts.rowFillB || [0.98, 0.99, 1];

    const totalW = colWidths.reduce((a, b) => a + b, 0);
    this.rect(x, yTop - minRowH, totalW, minRowH, { fill: headerFill, stroke: [0.58, 0.66, 0.74], line: 0.9 });

    let cx = x;
    for (let i = 0; i < headers.length; i += 1) {
      if (i > 0) this.line(cx, yTop - minRowH, cx, yTop - minRowH * (rows.length + 1), { color: [0.68, 0.72, 0.78], line: 0.8 });
      this.text(cx + 6, yTop - 14, headers[i], { size: 9, font: 'F2' });
      cx += colWidths[i];
    }

    let currentY = yTop - minRowH;
    for (let r = 0; r < rows.length; r += 1) {
      const wrappedCells = rows[r].map((cell, c) => {
        const maxChars = Math.max(8, Math.floor((colWidths[c] - padX * 2) / (fontSize * 0.53)));
        return wrapText(String(cell ?? ''), maxChars);
      });
      const maxLines = Math.max(...wrappedCells.map((x) => x.length), 1);
      const rowH = Math.max(minRowH, padY * 2 + maxLines * lineH);
      const y = currentY - rowH;
      this.rect(x, y, totalW, rowH, { fill: r % 2 === 0 ? rowFillA : rowFillB, stroke: [0.8, 0.84, 0.9], line: 0.6 });
      let cxx = x;
      for (let c = 0; c < colWidths.length; c += 1) {
        if (c > 0) this.line(cxx, y, cxx, y + rowH, { color: [0.82, 0.86, 0.91], line: 0.5 });
        this.textBlock(cxx + padX, y + rowH - (padY + lineH), wrappedCells[c], { size: fontSize, leading: lineH });
        cxx += colWidths[c];
      }
      currentY = y;
    }
  }

  stream() {
    return this.cmd.join('\n');
  }
}

function buildPdf(pages, outPath) {
  const objects = [];
  objects.push('<< /Type /Catalog /Pages 2 0 R >>');

  let nextId = 3;
  const fRegular = nextId++;
  const fBold = nextId++;
  const pageIds = [];
  const contentIds = [];
  for (let i = 0; i < pages.length; i += 1) {
    pageIds.push(nextId++);
    contentIds.push(nextId++);
  }

  const kids = pageIds.map((id) => `${id} 0 R`).join(' ');
  objects.push(`<< /Type /Pages /Kids [ ${kids} ] /Count ${pages.length} >>`);
  objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
  objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');

  for (let i = 0; i < pages.length; i += 1) {
    objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pages[i].w} ${pages[i].h}] /Resources << /Font << /F1 ${fRegular} 0 R /F2 ${fBold} 0 R >> >> /Contents ${contentIds[i]} 0 R >>`);
    const s = pages[i].stream();
    objects.push(`<< /Length ${Buffer.byteLength(s, 'utf8')} >>\nstream\n${s}\nendstream`);
  }

  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  for (let i = 0; i < objects.length; i += 1) {
    offsets.push(Buffer.byteLength(pdf, 'utf8'));
    pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
  }

  const xrefStart = Buffer.byteLength(pdf, 'utf8');
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, pdf, 'binary');
}

const C = {
  bg: [0.965, 0.975, 0.99],
  title: [0.1, 0.2, 0.34],
  band: [0.13, 0.34, 0.58],
  card: [1, 1, 1],
  border: [0.78, 0.84, 0.9]
};

const pages = [];

function addHeader(p, title, subtitle) {
  p.rect(20, 20, 555, 802, { fill: C.bg, stroke: null });
  p.rect(30, 760, 535, 58, { fill: C.band, stroke: C.band, radius: 8 });
  p.text(44, 794, title, { font: 'F2', size: 19, color: [1, 1, 1] });
  if (subtitle) p.text(44, 774, subtitle, { font: 'F1', size: 11, color: [0.9, 0.96, 1] });
}

// Page 1 Cover + objective
{
  const p = new Page();
  addHeader(p, 'Smart Local Services Finder', 'System Design, Diagrams, Database, and Normalization');

  p.rect(40, 575, 515, 165, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 715, 'Project Overview', { font: 'F2', size: 13, color: C.title });
  p.paragraph(56, 695, 490, 'SmartLocal is a full-stack web system that helps users quickly find trusted local services and trigger SOS alerts with current location. The architecture is built as an Angular frontend, Express API backend, and MongoDB data layer with fallback handling when DB is unavailable.', { size: 10, leading: 15 });

  p.rect(40, 360, 245, 190, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 525, 'Tech Stack', { font: 'F2', size: 12, color: C.title });
  p.textBlock(56, 505, [
    'Frontend: Angular 18 + SCSS',
    'Backend: Node.js + Express',
    'Database: MongoDB + Mongoose',
    'API style: REST + JSON',
    'Auth: placeholder token flow'
  ], { size: 10, leading: 16 });

  p.rect(310, 360, 245, 190, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(326, 525, 'Document Scope', { font: 'F2', size: 12, color: C.title });
  p.textBlock(326, 505, [
    '1) High-level system design',
    '2) Flow and sequence diagrams',
    '3) Use-case and class diagrams',
    '4) Database schema and ER model',
    '5) Normalization tables and level'
  ], { size: 10, leading: 16 });

  p.rect(40, 250, 515, 85, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 310, 'Generated Date: 2026-03-22', { size: 11, font: 'F2' });
  p.text(56, 290, 'Prepared from source code in frontend/ and backend/ modules.', { size: 10 });
  p.text(56, 272, 'Version: Presentation Edition v2 (alignment-fixed).', { size: 10 });

  pages.push(p);
}

// Page 2 architecture
{
  const p = new Page();
  addHeader(p, '1. High-Level Architecture Diagram', '3-tier architecture with clear component boundaries');

  const nodes = [
    { x: 55, y: 580, w: 130, h: 90, t: 'End User', s: 'Browser/Mobile Web', f: [0.92, 0.97, 1], b: [0.48, 0.67, 0.86] },
    { x: 230, y: 560, w: 150, h: 130, t: 'Angular Frontend', s: 'Auth, Dashboard, API', f: [0.92, 1, 0.93], b: [0.5, 0.74, 0.52] },
    { x: 230, y: 365, w: 150, h: 155, t: 'Express Backend', s: '/health /services /sos', f: [1, 0.96, 0.9], b: [0.85, 0.68, 0.35] },
    { x: 430, y: 435, w: 120, h: 115, t: 'MongoDB', s: 'services\nsosalerts', f: [1, 0.93, 0.93], b: [0.82, 0.5, 0.5] }
  ];
  nodes.forEach((n) => {
    p.rect(n.x, n.y, n.w, n.h, { fill: n.f, stroke: n.b, radius: 7 });
    p.textCenter(n.x, n.y + n.h - 24, n.w, n.t, { font: 'F2', size: 11 });
    const sub = n.s.split('\n');
    sub.forEach((ln, i) => p.textCenter(n.x, n.y + n.h - 45 - i * 14, n.w, ln, { size: 9 }));
  });

  p.arrow(185, 625, 230, 625);
  p.text(192, 636, 'HTTPS/JSON', { size: 8.5 });
  p.arrow(305, 560, 305, 520);
  p.text(312, 540, 'REST', { size: 8.5 });
  p.arrow(380, 445, 430, 480);
  p.arrow(430, 455, 380, 420);
  p.text(383, 470, 'Mongoose ODM', { size: 8.5 });

  p.rect(40, 145, 515, 185, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 305, 'Architecture Decisions', { font: 'F2', size: 12, color: C.title });
  const notes = [
    'Feature-based Angular modules keep UI concerns separated.',
    'Backend controllers encapsulate business logic from routes.',
    'Fallback mode enables API availability even if MongoDB is down.',
    'Service list supports category/city filtering with verified-first sorting.',
    'SOS endpoint returns HTTP 202 to indicate queued processing.'
  ];
  notes.forEach((n, i) => p.text(56, 285 - i * 24, `${i + 1}. ${n}`, { size: 10 }));

  pages.push(p);
}

// Page 3 flow diagrams
{
  const p = new Page();
  addHeader(p, '2. Flow Diagrams', 'Service Search and SOS with success/error branches');

  p.rect(40, 460, 515, 270, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 705, '2.1 Service Search Flow', { font: 'F2', size: 12, color: C.title });

  const y = 610;
  const bw = 110;
  const bh = 54;
  const gap = 16;
  const topLabels = ['User', 'Dashboard', 'LocalServices\nService', 'ApiService'];
  for (let i = 0; i < topLabels.length; i += 1) {
    const x = 56 + i * (bw + gap);
    p.rect(x, y, bw, bh, { fill: [0.95, 0.98, 1], stroke: [0.5, 0.65, 0.82], radius: 5 });
    const parts = topLabels[i].split('\n');
    p.textCenter(x, y + 34, bw, parts[0], { font: 'F2', size: 9 });
    if (parts[1]) p.textCenter(x, y + 19, bw, parts[1], { size: 8.3 });
    if (i < topLabels.length - 1) p.arrow(x + bw, y + 27, x + bw + gap, y + 27, { size: 4.5, line: 1 });
  }

  const lowerY = 525;
  const lowerX = [180, 306, 432];
  const lowerLabels = ['Express\nRoute', 'Controller', 'MongoDB /\nFallback'];
  for (let i = 0; i < lowerLabels.length; i += 1) {
    const x = lowerX[i];
    p.rect(x, lowerY, bw, bh, { fill: [0.95, 0.98, 1], stroke: [0.5, 0.65, 0.82], radius: 5 });
    const parts = lowerLabels[i].split('\n');
    p.textCenter(x, lowerY + 34, bw, parts[0], { font: 'F2', size: 9 });
    if (parts[1]) p.textCenter(x, lowerY + 19, bw, parts[1], { size: 8.3 });
    if (i < lowerLabels.length - 1) p.arrow(x + bw, lowerY + 27, lowerX[i + 1], lowerY + 27, { size: 4.5, line: 1 });
  }
  p.arrow(441, y, 487, lowerY + bh, { size: 5, line: 1 });

  p.text(56, 492, 'Request path: User -> Dashboard -> LocalServicesService -> ApiService -> Express -> Controller -> DB/Fallback', { size: 8.7 });
  p.text(56, 476, 'Response path: DB/Fallback -> Controller -> API -> Frontend -> service list rendered', { size: 8.7 });

  p.rect(40, 145, 515, 295, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 415, '2.2 SOS Flow Diagram', { font: 'F2', size: 12, color: C.title });

  p.rect(56, 180, 230, 220, { fill: [0.94, 1, 0.94], stroke: [0.52, 0.74, 0.5], radius: 6 });
  p.text(70, 378, 'Main Flow', { font: 'F2', size: 10 });
  const main = [
    '1. User taps SOS button',
    '2. Browser requests location',
    '3. Frontend POST /api/emergency/sos',
    '4. Backend validates payload',
    '5. Alert queued in DB/fallback',
    '6. 202 response displayed'
  ];
  main.forEach((m, i) => p.text(70, 358 - i * 26, m, { size: 9.3 }));

  p.rect(309, 180, 230, 220, { fill: [1, 0.96, 0.92], stroke: [0.85, 0.66, 0.43], radius: 6 });
  p.text(323, 378, 'Alternate Paths', { font: 'F2', size: 10 });
  const alt = [
    'A1: Geolocation unavailable',
    'A2: User denies location',
    'A3: DB unavailable => fallback mode',
    'A4: API/network error'
  ];
  alt.forEach((a, i) => p.text(323, 358 - i * 30, a, { size: 9.3 }));
  p.arrow(286, 290, 309, 290);

  pages.push(p);
}

// Page 4 Use case + class
{
  const p = new Page();
  addHeader(p, '3. Use Case and Class Diagrams', 'User interactions and module/class responsibility map');

  p.rect(40, 435, 515, 295, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 705, '3.1 Use Case Diagram (Textual UML Style)', { font: 'F2', size: 12, color: C.title });

  p.rect(70, 500, 105, 170, { fill: [0.95, 0.98, 1], stroke: [0.5, 0.65, 0.82], radius: 5 });
  p.textCenter(70, 645, 105, 'End User', { font: 'F2', size: 10 });

  const ucs = [
    { x: 215, y: 635, t: 'Login' },
    { x: 215, y: 595, t: 'Search Services' },
    { x: 215, y: 555, t: 'Trigger SOS' },
    { x: 215, y: 515, t: 'Check Health' }
  ];
  ucs.forEach((u) => {
    p.rect(u.x, u.y, 170, 28, { fill: [0.97, 1, 0.95], stroke: [0.56, 0.74, 0.56], radius: 14 });
    p.textCenter(u.x, u.y + 10, 170, u.t, { size: 9.2, font: 'F2' });
    p.line(175, 585, u.x, u.y + 14, { line: 0.9 });
  });

  p.rect(420, 500, 110, 170, { fill: [1, 0.96, 0.92], stroke: [0.85, 0.66, 0.43], radius: 5 });
  p.textCenter(420, 645, 110, 'MongoDB', { font: 'F2', size: 10 });
  p.textCenter(420, 625, 110, 'supports', { size: 8.5 });
  p.line(385, 609, 420, 628, { line: 0.8 });
  p.line(385, 569, 420, 603, { line: 0.8 });

  p.rect(40, 135, 515, 280, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 390, '3.2 Class Diagram (Key Runtime Classes)', { font: 'F2', size: 12, color: C.title });

  const cls = [
    { x: 56, y: 280, w: 145, h: 90, name: 'DashboardHomeComponent', m: ['+ngOnInit()', '+searchServices()', '+triggerSos()'] },
    { x: 223, y: 280, w: 145, h: 90, name: 'LocalServicesService', m: ['+getHealth()', '+getServices()', '+triggerSos()'] },
    { x: 390, y: 280, w: 145, h: 90, name: 'ApiService', m: ['+get()', '+post()'] },
    { x: 223, y: 170, w: 145, h: 90, name: 'SessionService', m: ['+token', '+setToken()', '+clearToken()'] }
  ];
  cls.forEach((c) => {
    p.rect(c.x, c.y, c.w, c.h, { fill: [0.95, 0.98, 1], stroke: [0.5, 0.65, 0.82], radius: 4 });
    p.rect(c.x, c.y + c.h - 22, c.w, 22, { fill: [0.88, 0.93, 0.99], stroke: [0.5, 0.65, 0.82], radius: 0 });
    p.textCenter(c.x, c.y + c.h - 15, c.w, c.name, { font: 'F2', size: 8.6 });
    c.m.forEach((m, i) => p.text(c.x + 7, c.y + c.h - 38 - i * 14, m, { size: 8.3 }));
  });

  p.arrow(201, 325, 223, 325, { size: 5 });
  p.arrow(368, 325, 390, 325, { size: 5 });
  p.arrow(295, 280, 295, 260, { size: 5 });

  pages.push(p);
}

// Page 5 DB tables + ER
{
  const p = new Page();
  addHeader(p, '4. Database Design and ER Diagram', 'Collections, fields, constraints, and entity structure');

  p.rect(40, 500, 515, 230, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 705, '4.1 ER Diagram', { font: 'F2', size: 12, color: C.title });

  p.rect(70, 545, 180, 145, { fill: [0.94, 0.98, 1], stroke: [0.5, 0.65, 0.82], radius: 6 });
  p.textCenter(70, 668, 180, 'Service', { font: 'F2', size: 11 });
  ['_id (PK)', 'category', 'name', 'phone', 'city', 'verified'].forEach((f, i) => p.text(84, 647 - i * 18, f, { size: 9 }));

  p.rect(345, 545, 180, 145, { fill: [1, 0.95, 0.95], stroke: [0.82, 0.5, 0.5], radius: 6 });
  p.textCenter(345, 668, 180, 'SosAlert', { font: 'F2', size: 11 });
  ['_id (PK)', 'userName', 'phone', 'latitude', 'longitude', 'status'].forEach((f, i) => p.text(359, 647 - i * 18, f, { size: 9 }));

  p.arrow(250, 620, 345, 620);
  p.text(255, 632, 'operational emergency context', { size: 8.2 });

  p.rect(40, 130, 515, 345, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 448, '4.2 Database Tables / Collections', { font: 'F2', size: 12, color: C.title });

  p.table(
    56,
    425,
    [120, 75, 70, 230],
    ['Field', 'Type', 'Required', 'Notes'],
    [
      ['_id', 'ObjectId', 'Yes', 'Primary key'],
      ['category', 'String', 'Yes', 'Lowercased, filterable'],
      ['name', 'String', 'Yes', 'Provider display name'],
      ['phone', 'String', 'Yes', 'Contact number'],
      ['city', 'String', 'Yes', 'City filter key'],
      ['verified', 'Boolean', 'No', 'Defaults false']
    ],
    { rowH: 21 }
  );
  p.text(56, 278, 'Collection: services', { size: 9, font: 'F2' });

  p.table(
    56,
    255,
    [120, 75, 70, 230],
    ['Field', 'Type', 'Required', 'Notes'],
    [
      ['_id', 'ObjectId', 'Yes', 'Primary key'],
      ['userName', 'String', 'No', 'Defaults Anonymous'],
      ['phone', 'String', 'No', 'Defaults N/A'],
      ['latitude', 'Number', 'Yes', 'User current latitude'],
      ['longitude', 'Number', 'Yes', 'User current longitude'],
      ['status', 'String', 'No', 'Defaults queued']
    ],
    { rowH: 21 }
  );
  p.text(56, 108, 'Collection: sosalerts', { size: 9, font: 'F2' });

  pages.push(p);
}

// Page 6 normalization and extra content
{
  const p = new Page();
  addHeader(p, '5. Normalization, API, and Deployment View', 'Normalization level, endpoint contracts, and runtime concerns');

  p.rect(40, 505, 515, 225, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 705, '5.1 Normalization Tables', { font: 'F2', size: 12, color: C.title });

  p.table(
    56,
    680,
    [90, 280, 125],
    ['Form', 'Rule Check', 'Status'],
    [
      ['1NF', 'All attributes atomic; no repeating groups', 'Satisfied'],
      ['2NF', 'Single-column PKs; no partial dependency', 'Satisfied'],
      ['3NF', 'No transitive non-key dependency in current schema', 'Satisfied'],
      ['BCNF', 'No dependency violations observed in current MVP model', 'Likely satisfied']
    ],
    { rowH: 28 }
  );

  p.text(56, 536, 'Final normalization level: 3NF (effective)', { font: 'F2', size: 10 });

  p.rect(40, 285, 515, 200, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 460, '5.2 API Contract Summary', { font: 'F2', size: 12, color: C.title });
  const apiLines = [
    'GET /api/health -> { status, service, dbConnected, mode, timestamp }',
    'GET /api/services?category=&city= -> { count, data[], source }',
    'POST /api/emergency/sos -> accepts { userName, phone, latitude, longitude }',
    'Response code 202 indicates alert queued for processing.'
  ];
  apiLines.forEach((ln, i) => p.text(56, 438 - i * 26, ln, { size: 9.8 }));

  p.rect(40, 130, 515, 140, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 245, '5.3 Deployment and Scalability Notes', { font: 'F2', size: 12, color: C.title });
  p.textBlock(56, 225, [
    '1. Add JWT auth and role model for production security.',
    '2. Add geospatial indexes for nearest-service search.',
    '3. Split SOS into queue + worker for reliable dispatch.',
    '4. Add metrics/logs/tracing for observability and SLA tracking.'
  ], { size: 9.8, leading: 16 });

  pages.push(p);
}

// Page 7 detailed use-case specs
{
  const p = new Page();
  addHeader(p, '6. Detailed Use Case Specifications', 'Preconditions, primary flow, alternatives, postconditions');

  p.rect(40, 140, 515, 590, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 705, 'Use Case Matrix', { font: 'F2', size: 12, color: C.title });

  p.table(
    56,
    680,
    [55, 95, 120, 225],
    ['ID', 'Name', 'Precondition', 'Outcome'],
    [
      ['UC-01', 'Login', 'Login page loaded', 'Session token set and redirect to dashboard'],
      ['UC-02', 'Search Service', 'User on dashboard', 'Filtered providers shown by category/city'],
      ['UC-03', 'Trigger SOS', 'Location permission available', 'Alert queued with 202 acknowledgement'],
      ['UC-04', 'Health Check', 'Backend URL reachable', 'UI shows backend availability/mode'],
      ['UC-05', 'Fallback Ops', 'DB unavailable at startup', 'App still serves seeded/fallback responses'],
      ['UC-06', 'Session Guard', 'User hits protected route', 'Unauthenticated user redirected to /auth/login']
    ],
    { rowH: 30, fontSize: 8.3, lineH: 10 }
  );

  p.text(56, 335, 'Alternative flows covered:', { font: 'F2', size: 10 });
  p.text(56, 317, 'A1 Invalid SOS payload -> HTTP 400 (missing latitude/longitude)', { size: 9.6 });
  p.text(56, 300, 'A2 Frontend API failure -> dashboard shows user-friendly error message', { size: 9.6 });
  p.text(56, 283, 'A3 Geolocation denied -> SOS not sent and clear message displayed', { size: 9.6 });

  p.text(56, 252, 'Non-functional coverage:', { font: 'F2', size: 10 });
  p.text(56, 235, 'Availability: fallback mode reduces total outage risk', { size: 9.6 });
  p.text(56, 218, 'Performance: simple indexed filters and lightweight payloads', { size: 9.6 });
  p.text(56, 201, 'Usability: minimal steps for emergency action path', { size: 9.6 });

  pages.push(p);
}

// Page 8 activity diagram
{
  const p = new Page();
  addHeader(p, '7. Activity Diagram', 'Runtime process behavior for search and SOS operations');

  p.rect(40, 130, 515, 600, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 705, '7.1 Activity Diagram (Service Search + SOS)', { font: 'F2', size: 12, color: C.title });

  const bx = 70;
  const bw = 220;
  const bh = 34;
  p.rect(84, 664, 16, 16, { fill: [0.2, 0.24, 0.3], stroke: [0.2, 0.24, 0.3], radius: 8 });
  p.text(110, 668, 'Start', { size: 9, font: 'F2' });

  const activities = [
    { y: 620, t: 'User opens Dashboard' },
    { y: 575, t: 'Choose category/city and search' },
    { y: 530, t: 'Frontend calls GET /api/services' },
    { y: 485, t: 'Backend queries DB or fallback data' },
    { y: 440, t: 'Services displayed to user' },
    { y: 395, t: 'User taps SOS button' },
    { y: 350, t: 'Frontend requests geolocation' }
  ];
  activities.forEach((a, i) => {
    p.rect(bx, a.y, bw, bh, { fill: [0.95, 0.98, 1], stroke: [0.5, 0.65, 0.82], radius: 5 });
    p.textCenter(bx, a.y + 12, bw, a.t, { size: 9.2, font: 'F2' });
    if (i === 0) p.arrow(92, 664, 92, a.y + bh, { size: 4.5, line: 1 });
    if (i > 0) p.arrow(bx + bw / 2, activities[i - 1].y, bx + bw / 2, a.y + bh, { size: 4.5, line: 1 });
  });

  p.rect(350, 320, 180, 130, { fill: [1, 0.96, 0.92], stroke: [0.85, 0.66, 0.43], radius: 6 });
  p.text(362, 425, 'Decision: Location granted?', { size: 9.2, font: 'F2' });
  p.text(362, 406, 'Yes -> POST /emergency/sos', { size: 9 });
  p.text(362, 390, 'No  -> permission denied', { size: 9 });
  p.text(362, 374, 'Show clear user message', { size: 9 });
  p.arrow(290, 367, 350, 385, { size: 4.5, line: 1 });

  p.rect(84, 294, 16, 16, { fill: [0.2, 0.24, 0.3], stroke: [0.2, 0.24, 0.3], radius: 8 });
  p.text(110, 298, 'End', { size: 9, font: 'F2' });
  p.arrow(180, 350, 92, 310, { size: 4.5, line: 1 });

  p.text(56, 250, 'Activity outcome: user always receives clear feedback path for both success and error states.', { size: 9.4 });
  p.text(56, 233, 'This design reduces confusion for emergency workflows and keeps failure handling explicit.', { size: 9.4 });

  pages.push(p);
}

// Page 9 sequence diagram
{
  const p = new Page();
  addHeader(p, '7. Sequence Diagram', 'Detailed message exchange for SOS trigger flow');

  p.rect(40, 130, 515, 600, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 705, '7.2 Sequence Diagram (SOS Trigger Path)', { font: 'F2', size: 12, color: C.title });

  const lifelines = [
    { x: 90, t: 'User' },
    { x: 190, t: 'Frontend' },
    { x: 290, t: 'ApiService' },
    { x: 390, t: 'Backend' },
    { x: 490, t: 'MongoDB' }
  ];
  lifelines.forEach((l) => {
    p.rect(l.x - 35, 650, 70, 24, { fill: [0.95, 0.98, 1], stroke: [0.5, 0.65, 0.82], radius: 4 });
    p.textCenter(l.x - 35, 659, 70, l.t, { size: 8.8, font: 'F2' });
    p.line(l.x, 645, l.x, 220, { color: [0.7, 0.74, 0.8], line: 0.8 });
  });

  p.arrow(90, 610, 190, 610, { size: 4.5, line: 1 });
  p.text(103, 618, 'tap SOS', { size: 8.4 });
  p.arrow(190, 575, 290, 575, { size: 4.5, line: 1 });
  p.text(198, 583, 'triggerSos(payload)', { size: 8.4 });
  p.arrow(290, 540, 390, 540, { size: 4.5, line: 1 });
  p.text(299, 548, 'POST /api/emergency/sos', { size: 8.4 });
  p.arrow(390, 505, 490, 505, { size: 4.5, line: 1 });
  p.text(398, 513, 'create alert', { size: 8.4 });
  p.arrow(490, 470, 390, 470, { size: 4.5, line: 1 });
  p.text(402, 478, 'alert id + status', { size: 8.4 });
  p.arrow(390, 435, 190, 435, { size: 4.5, line: 1 });
  p.text(248, 443, '202 Accepted', { size: 8.4 });
  p.arrow(190, 400, 90, 400, { size: 4.5, line: 1 });
  p.text(102, 408, 'show result', { size: 8.4 });

  p.rect(60, 250, 475, 120, { fill: [0.97, 1, 0.95], stroke: [0.56, 0.74, 0.56], radius: 6 });
  p.text(76, 348, 'Alternative branch (fallback mode):', { font: 'F2', size: 10 });
  p.text(76, 329, 'If database is unavailable, backend returns fallback alert with status \"queued\" and HTTP 202.', { size: 9.2 });
  p.text(76, 312, 'Frontend behavior remains same: user receives acknowledgement without blocking emergency UX.', { size: 9.2 });
  p.text(76, 295, 'This keeps system operational during temporary DB outages.', { size: 9.2 });

  pages.push(p);
}

// Page 10 all possible tables (current + future, part 1)
{
  const p = new Page();
  addHeader(p, '8. All Possible Tables / Collections', 'Implemented entities and full-scale schema proposal (Part 1)');

  p.rect(40, 465, 515, 265, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 705, '8.1 Implemented Collections', { font: 'F2', size: 12, color: C.title });
  p.table(
    56,
    680,
    [110, 140, 90, 160],
    ['Collection', 'Primary Purpose', 'Primary Key', 'Important Fields'],
    [
      ['services', 'Store local provider listings', '_id', 'category, name, phone, city, verified'],
      ['sosalerts', 'Store emergency alert events', '_id', 'userName, phone, latitude, longitude, status']
    ],
    { rowH: 28, fontSize: 8.5, lineH: 10 }
  );

  p.text(56, 598, 'These two collections are in current codebase and active at runtime.', { size: 9.3 });

  p.rect(40, 130, 515, 320, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 425, '8.2 Recommended Full-Scale Tables (Part 1)', { font: 'F2', size: 12, color: C.title });
  p.table(
    56,
    400,
    [90, 110, 80, 205],
    ['Table', 'Purpose', 'PK', 'Key Relationships / Fields'],
    [
      ['users', 'End users + auth', 'user_id', 'email, password_hash, role, status'],
      ['providers', 'Service providers', 'provider_id', 'FK user_id, business_name, verification_status'],
      ['service_categories', 'Master categories', 'category_id', 'name, slug, icon'],
      ['services', 'Provider services', 'service_id', 'FK provider_id, FK category_id, city, verified'],
      ['provider_availability', 'Schedule windows', 'availability_id', 'FK provider_id, day_of_week, slot_start/end'],
      ['sos_alerts', 'Emergency requests', 'alert_id', 'FK user_id, lat, lng, status, priority']
    ],
    { rowH: 24, fontSize: 8.2, lineH: 9.8 }
  );

  pages.push(p);
}

// Page 10 all possible tables (part 2 + relationship summary)
{
  const p = new Page();
  addHeader(p, '8. All Possible Tables / Collections', 'Recommended full-scale schema proposal (Part 2)');

  p.rect(40, 410, 515, 320, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 705, '8.3 Recommended Full-Scale Tables (Part 2)', { font: 'F2', size: 12, color: C.title });
  p.table(
    56,
    680,
    [90, 110, 80, 205],
    ['Table', 'Purpose', 'PK', 'Key Relationships / Fields'],
    [
      ['emergency_dispatch_logs', 'Dispatch audit', 'dispatch_id', 'FK alert_id, channel, sent_at, result'],
      ['reviews', 'Ratings and comments', 'review_id', 'FK service_id, FK user_id, rating, comment'],
      ['bookings', 'Service booking records', 'booking_id', 'FK user_id, FK service_id, scheduled_at, status'],
      ['payments', 'Payment transactions', 'payment_id', 'FK booking_id, amount, currency, state'],
      ['notifications', 'User/provider notifications', 'notification_id', 'FK user_id/provider_id, type, read_flag'],
      ['audit_logs', 'Security and activity logs', 'log_id', 'actor_id, action, entity_type, created_at']
    ],
    { rowH: 24, fontSize: 8.2, lineH: 9.8 }
  );

  p.rect(40, 130, 515, 255, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 360, '8.4 Relationship Summary (Relational View)', { font: 'F2', size: 12, color: C.title });
  p.table(
    56,
    336,
    [150, 150, 205],
    ['Parent Table', 'Child Table', 'Relationship Type'],
    [
      ['users', 'providers', '1 : 1 (provider profile per provider user)'],
      ['providers', 'services', '1 : N (one provider offers many services)'],
      ['users', 'bookings', '1 : N (user books many services)'],
      ['services', 'reviews', '1 : N (service can receive many reviews)'],
      ['users', 'sos_alerts', '1 : N (user can trigger many alerts)'],
      ['sos_alerts', 'emergency_dispatch_logs', '1 : N (multiple dispatch attempts)'],
      ['bookings', 'payments', '1 : N (retry/partial payment history)']
    ],
    { rowH: 24, fontSize: 8.4, lineH: 10 }
  );

  pages.push(p);
}

// Page 11 enhancements and detailed engineering guidance
{
  const p = new Page();
  addHeader(p, '9. Engineering Enhancements and Detailed Notes', 'Security, performance, reliability, and delivery roadmap');

  p.rect(40, 520, 250, 210, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 705, '9.1 Security Design', { font: 'F2', size: 12, color: C.title });
  p.textBlock(56, 684, [
    '1. Use JWT access + refresh token strategy.',
    '2. Hash passwords using Argon2/bcrypt.',
    '3. Enforce RBAC for user/provider/admin roles.',
    '4. Add request validation (zod/joi).',
    '5. Add rate limiting for SOS and auth APIs.',
    '6. Encrypt sensitive PII at rest.'
  ], { size: 9.4, leading: 14 });

  p.rect(305, 520, 250, 210, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(321, 705, '9.2 Performance Design', { font: 'F2', size: 12, color: C.title });
  p.textBlock(321, 684, [
    '1. Add compound indexes for search fields.',
    '2. Use geospatial indexes for nearby search.',
    '3. Add response caching for static metadata.',
    '4. Move SOS dispatch to async queue workers.',
    '5. Paginate service lists for large cities.',
    '6. Profile slow API routes with tracing.'
  ], { size: 9.4, leading: 14 });

  p.rect(40, 285, 515, 215, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 475, '9.3 Testing Strategy and Quality Gates', { font: 'F2', size: 12, color: C.title });
  p.table(
    56,
    450,
    [120, 160, 215],
    ['Layer', 'Test Type', 'Coverage Focus'],
    [
      ['Frontend', 'Unit + Component tests', 'forms, guards, dashboard flows, error states'],
      ['Backend', 'Unit + Integration tests', 'controller validation, fallback mode, DB writes'],
      ['API', 'Contract tests', 'request/response shape and status codes'],
      ['E2E', 'Journey tests', 'login, search, SOS success and denial branches'],
      ['Security', 'Static + DAST', 'dependency risk, auth, rate limiting, input sanitization']
    ],
    { rowH: 26, fontSize: 8.4, lineH: 10 }
  );

  p.rect(40, 130, 515, 135, { fill: C.card, stroke: C.border, radius: 8 });
  p.text(56, 240, '9.4 Suggested Implementation Roadmap', { font: 'F2', size: 12, color: C.title });
  p.textBlock(56, 220, [
    'Phase 1: Authentication + user/provider/admin schema',
    'Phase 2: Booking + review + payment flows',
    'Phase 3: Real SOS dispatch integrations (SMS/call/WhatsApp)',
    'Phase 4: Observability, dashboards, alerting, and SLO tracking'
  ], { size: 9.6, leading: 15 });

  pages.push(p);
}

const out = path.resolve('/Users/renjusekhar/Desktop/smartlocalapp/smartlocal/docs/SmartLocal_System_Design_Documentation_Presentation.pdf');
buildPdf(pages, out);
console.log(`Generated: ${out}`);
