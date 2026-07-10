import sharp from 'sharp'
import { stat } from 'fs/promises'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const jobs = [
  { in: 'Assets/card-1-cropped.jpg', out: 'public/Assets/card-1-cropped.jpg', type: 'jpg' },
  { in: 'Assets/card-3-cropped.png', out: 'public/Assets/card-3-cropped.png', type: 'png' },
]

for (const j of jobs) {
  const src = resolve(root, j.in)
  const dst = resolve(root, j.out)
  const { size: before } = await stat(src)
  const img = sharp(src)
  const meta = await img.metadata()
  const maxW = 1800
  const resized = meta.width > maxW ? img.resize(maxW, null, { withoutEnlargement: true }) : img
  if (j.type === 'png') await resized.png({ quality: 80, compressionLevel: 9 }).toFile(dst)
  else await resized.jpeg({ quality: 78, mozjpeg: true }).toFile(dst)
  const { size: after } = await stat(dst)
  console.log(`${j.in}: ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB (-${Math.round((1-after/before)*100)}%)`)
}
console.log('Done.')
