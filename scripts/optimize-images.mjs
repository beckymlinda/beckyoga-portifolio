// Generates optimised WebP images (+ social share image) from images-src/ into public/images/.
// Run with: npm run images
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'

const SRC = 'images-src'
const OUT = 'public/images'
mkdirSync(OUT, { recursive: true })

const photos = {
  headstand: { file: 'headstand.jpg' },
  wheel: { file: 'wheel.jpg' },
  // Original has black letterbox bars top and bottom — crop them off
  'elbow-stand': { file: 'elbow-stand.jpg', extract: { left: 0, top: 200, width: 864, height: 1520 } },
  splits: { file: 'splits.jpg' },
  rabecca: { file: 'rabecca.jpg' },
  // Rendered from the certificate PDF; the larger size is for the full-screen view
  certificate: { file: 'certificate.png', widths: [480, 960, 1600], quality: 85 },
}

for (const [name, opts] of Object.entries(photos)) {
  for (const w of opts.widths ?? [480, 960]) {
    let img = sharp(`${SRC}/${opts.file}`).rotate()
    if (opts.extract) img = img.extract(opts.extract)
    await img.resize({ width: w, withoutEnlargement: true }).webp({ quality: opts.quality ?? 78 }).toFile(`${OUT}/${name}-${w}.webp`)
  }
  console.log('✓', name)
}

// 1200x630 Open Graph image (WhatsApp / Facebook link previews)
const overlay = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" x2="1">
      <stop offset="0" stop-color="#2b1820" stop-opacity="0.96"/>
      <stop offset="0.42" stop-color="#2b1820" stop-opacity="0.82"/>
      <stop offset="0.68" stop-color="#2b1820" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g font-family="Georgia, 'Times New Roman', serif" fill="#f8eeea">
    <text x="64" y="200" font-size="96" font-weight="700">Becky <tspan font-style="italic" font-weight="400" fill="#f2a7bf">Yoga</tspan></text>
  </g>
  <g font-family="Arial, Helvetica, sans-serif" fill="#f8eeea">
    <text x="68" y="262" font-size="34">Rabecca Mulinda · Yoga Instructor</text>
    <text x="68" y="312" font-size="28" opacity="0.8">Vinyasa · Yin · Hatha · Lilongwe, Malawi</text>
    <rect x="64" y="380" width="430" height="64" rx="32" fill="#b0174e"/>
    <text x="279" y="422" font-size="28" font-weight="700" text-anchor="middle">1st place · Yogasana 2023</text>
    <text x="68" y="548" font-size="28">WhatsApp +265 882 446 802</text>
  </g>
</svg>`)
await sharp(`${SRC}/splits.jpg`)
  .resize(1200, 630, { fit: 'cover', position: 'right' })
  .composite([{ input: overlay }])
  .jpeg({ quality: 82 })
  .toFile(`${OUT}/og-image.jpg`)
console.log('✓ og-image')
