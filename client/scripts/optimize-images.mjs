// One-off/maintenance script: converts large PNG/JPG files in public/ that are
// referenced from src/ into resized WebP, rewrites the references, and removes
// the originals. Unreferenced files are left untouched.
//
//   node scripts/optimize-images.mjs            # dry run
//   node scripts/optimize-images.mjs --write    # apply

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = path.join(root, 'public')
const srcDir = path.join(root, 'src')
const write = process.argv.includes('--write')
const MIN_BYTES = 150 * 1024
const MAX_WIDTH = 1920

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name)
    return e.isDirectory() ? walk(p) : [p]
  })

const sources = walk(srcDir).filter((f) => /\.(tsx?|css)$/.test(f))
const sourceText = new Map(sources.map((f) => [f, fs.readFileSync(f, 'utf-8')]))

let before = 0
let after = 0
for (const file of walk(publicDir)) {
  if (!/\.(png|jpe?g)$/i.test(file) || fs.statSync(file).size < MIN_BYTES) continue
  const urlPath = '/' + path.relative(publicDir, file).split(path.sep).join('/')
  const referencing = sources.filter((f) => sourceText.get(f).includes(urlPath))
  if (!referencing.length) continue

  const webpPath = file.replace(/\.(png|jpe?g)$/i, '.webp')
  const webpUrl = urlPath.replace(/\.(png|jpe?g)$/i, '.webp')
  const buf = await sharp(file)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 80, alphaQuality: 90, effort: 5 })
    .toBuffer()
  const oldSize = fs.statSync(file).size
  before += oldSize
  after += buf.length
  console.log(`${(oldSize / 1024).toFixed(0).padStart(6)} KB → ${(buf.length / 1024).toFixed(0).padStart(5)} KB  ${urlPath}`)

  if (write) {
    fs.writeFileSync(webpPath, buf)
    for (const f of referencing) sourceText.set(f, sourceText.get(f).split(urlPath).join(webpUrl))
    fs.rmSync(file)
  }
}

if (write) for (const [f, text] of sourceText) if (text !== fs.readFileSync(f, 'utf-8')) fs.writeFileSync(f, text)
console.log(`\nTotal: ${(before / 1048576).toFixed(1)} MB → ${(after / 1048576).toFixed(1)} MB${write ? '' : ' (dry run, pass --write to apply)'}`)
