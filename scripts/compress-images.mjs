import sharp from 'sharp'
import { readdir, stat, writeFile, unlink } from 'fs/promises'
import { join, resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dir = resolve(__dirname, '../public/Assets')
const outDir = resolve(__dirname, '../public/Assets_compressed')
await import('fs').then(m => m.promises.mkdir(outDir, { recursive: true }))
const files = await readdir(dir)

for (const file of files) {
  const src = join(dir, file)
  const dst = join(outDir, file)
  const ext = file.split('.').pop().toLowerCase()
  if (!['jpg', 'jpeg', 'png', 'webp'].includes(ext)) continue

  const { size: before } = await stat(src)
  const img = sharp(src)
  const meta = await img.metadata()

  const maxW = 1800
  const resized = meta.width > maxW ? img.resize(maxW, null, { withoutEnlargement: true }) : img

  if (ext === 'png') {
    await resized.png({ quality: 80, compressionLevel: 9 }).toFile(dst)
  } else {
    await resized.jpeg({ quality: 78, mozjpeg: true }).toFile(dst)
  }

  const { size: after } = await stat(dst)
  console.log(`${file}: ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB  (-${Math.round((1-after/before)*100)}%)`)
}
console.log('\nCompressed files are in public/Assets_compressed/')
console.log('Copy them over with: Copy-Item public/Assets_compressed/* public/Assets/ -Force')
