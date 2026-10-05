// Pre-renders the React app into dist/index.html so search engines and link
// previews see the full content, then adds structured data, robots.txt and sitemap.xml.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { loadEnv } from 'vite'

const SITE_URL = (process.env.VITE_SITE_URL || loadEnv('production', process.cwd()).VITE_SITE_URL).replace(/\/$/, '')

const server = await import('../dist-server/entry-server.js')
const { render, profile, classes, certificate, styles, PHONE_TEL, EMAIL } = server

const kwacha = (price) => price.replace(/\D/g, '')

const person = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#instructor`,
  name: profile.name,
  alternateName: [profile.shortName, profile.brand],
  jobTitle: profile.title,
  image: `${SITE_URL}/images/${profile.photo}-960.webp`,
  email: `mailto:${EMAIL}`,
  telephone: PHONE_TEL.replace('tel:', ''),
  knowsLanguage: profile.language,
  knowsAbout: styles.map((s) => `${s.name} yoga`),
  award: `${certificate.award}, ${certificate.event}`,
  homeLocation: { '@type': 'Place', name: profile.location },
  worksFor: { '@id': `${SITE_URL}/#business` },
}

const business = {
  '@type': 'HealthClub',
  '@id': `${SITE_URL}/#business`,
  name: profile.brand,
  description: `Private and group yoga classes (${styles.map((s) => s.name).join(', ')}) and flexibility training with ${profile.name}.`,
  url: `${SITE_URL}/`,
  image: [`${SITE_URL}/images/og-image.jpg`, `${SITE_URL}/images/wheel-960.webp`],
  telephone: PHONE_TEL.replace('tel:', ''),
  email: EMAIL,
  currenciesAccepted: 'MWK',
  address: { '@type': 'PostalAddress', addressLocality: 'Lilongwe', addressCountry: 'MW' },
  founder: { '@id': `${SITE_URL}/#instructor` },
  makesOffer: classes
    .filter((c) => c.price.startsWith('MWK'))
    .map((c) => ({
      '@type': 'Offer',
      name: c.name,
      description: c.text,
      price: kwacha(c.price),
      priceCurrency: 'MWK',
    })),
}

const jsonLd = JSON.stringify({ '@context': 'https://schema.org', '@graph': [person, business] })

const htmlPath = 'dist/index.html'
const html = readFileSync(htmlPath, 'utf8')
  .replace('<!--app-html-->', render())
  .replace('<!--structured-data-->', `<script type="application/ld+json">${jsonLd.replace(/</g, '\u003c')}</script>`)
writeFileSync(htmlPath, html)

writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
)

rmSync('dist-server', { recursive: true, force: true })
console.log(`✓ Pre-rendered dist/index.html, robots.txt, sitemap.xml for ${SITE_URL}`)
