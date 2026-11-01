// Browser-side resize + compression for blog image uploads, so the API only
// ever stores web-sized files (max 4 MB request on the server).

export interface ResizeOptions {
  /** Longest side in px; 0 keeps the original size. */
  maxSize: number
  /** WebP quality, 0–1. */
  quality: number
}

export interface ResizedImage {
  blob: Blob
  width: number
  height: number
}

const MAX_UPLOAD_BYTES = 3.8 * 1024 * 1024

function loadImage(file: Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve(img)
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('This file is not a readable image'))
    }
    img.src = url
  })
}

const toBlob = (canvas: HTMLCanvasElement, quality: number) =>
  new Promise<Blob>((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Could not encode image'))), 'image/webp', quality),
  )

export async function resizeImage(file: File, { maxSize, quality }: ResizeOptions): Promise<ResizedImage> {
  const img = await loadImage(file)
  // Animated GIFs would lose their animation on a canvas: upload as-is when small enough.
  if (file.type === 'image/gif' && file.size <= MAX_UPLOAD_BYTES) {
    return { blob: file, width: img.naturalWidth, height: img.naturalHeight }
  }

  let scale = maxSize ? Math.min(1, maxSize / Math.max(img.naturalWidth, img.naturalHeight)) : 1
  let q = quality
  for (let attempt = 0; attempt < 6; attempt++) {
    const width = Math.round(img.naturalWidth * scale)
    const height = Math.round(img.naturalHeight * scale)
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('Canvas is not supported in this browser')
    ctx.imageSmoothingQuality = 'high'
    ctx.drawImage(img, 0, 0, width, height)
    const blob = await toBlob(canvas, q)
    if (blob.size <= MAX_UPLOAD_BYTES) return { blob, width, height }
    // Too large: lower quality first, then dimensions.
    if (q > 0.6) q -= 0.15
    else scale *= 0.75
  }
  throw new Error('Image is too large even after compression')
}

/** "my-team_photo.jpg" → "My team photo" (a starting point for alt text). */
export const altFromFileName = (name: string) => {
  const base = name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim()
  return base ? base[0].toUpperCase() + base.slice(1) : ''
}
