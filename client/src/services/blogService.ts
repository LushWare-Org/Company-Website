/**
 * Blog API Service
 * Public reads for /blog pages and authenticated calls for the admin editor.
 */
import type { BlogImage, BlogListResponse, BlogPost, BlogPostInput, BlogPostResponse, BlogPostSummary } from '../types/blog'
import { resizeImage, type ResizeOptions } from '../lib/imageResize'

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api/blog`

export const blogImageUrl = (id: string) => `${API_BASE_URL}/images/${id}`

/** Thrown on 401 so admin pages can send the user back to the login screen. */
export class UnauthorizedError extends Error {}

async function request<T>(url: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(url, init)
  if (response.status === 401) throw new UnauthorizedError('Your session has expired. Please log in again.')
  const data = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(data.message || `Request failed (${response.status})`)
  return data as T
}

const authHeaders = (token: string, json = false): HeadersInit => ({
  Authorization: `Bearer ${token}`,
  ...(json ? { 'Content-Type': 'application/json' } : {}),
})

const query = (params: Record<string, string | number | undefined>) => {
  const qs = new URLSearchParams()
  for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== '') qs.set(k, String(v))
  const s = qs.toString()
  return s ? `?${s}` : ''
}

/* ── Public ─────────────────────────────────────────────────────── */

export interface BlogQuery {
  q?: string
  tag?: string
  category?: string
  page?: number
  limit?: number
}

export const fetchBlogPosts = (params: BlogQuery = {}, signal?: AbortSignal) =>
  request<BlogListResponse>(`${API_BASE_URL}/posts${query({ ...params })}`, { signal })

/** null when the post doesn't exist (or isn't published yet). */
export async function fetchBlogPost(slug: string, signal?: AbortSignal): Promise<BlogPostResponse | null> {
  const response = await fetch(`${API_BASE_URL}/posts/${encodeURIComponent(slug)}`, { signal })
  if (response.status === 404) return null
  if (!response.ok) throw new Error('Failed to load the article')
  return response.json()
}

/* ── Admin ──────────────────────────────────────────────────────── */

export const adminListPosts = (token: string, params: { q?: string; status?: string } = {}) =>
  request<{ posts: BlogPostSummary[] }>(`${API_BASE_URL}/admin/posts${query(params)}`, { headers: authHeaders(token) })

export const adminGetPost = (id: string, token: string) =>
  request<{ post: BlogPost }>(`${API_BASE_URL}/admin/posts/${id}`, { headers: authHeaders(token) })

/** Creates the post when `id` is empty, otherwise updates it. */
export const adminSavePost = (input: BlogPostInput, token: string, id?: string) =>
  request<{ post: BlogPost }>(id ? `${API_BASE_URL}/admin/posts/${id}` : `${API_BASE_URL}/admin/posts`, {
    method: id ? 'PUT' : 'POST',
    headers: authHeaders(token, true),
    body: JSON.stringify(input),
  })

export const adminDeletePost = (id: string, token: string) =>
  request<{ message: string }>(`${API_BASE_URL}/admin/posts/${id}`, { method: 'DELETE', headers: authHeaders(token) })

export const adminListImages = (token: string) =>
  request<{ images: BlogImage[] }>(`${API_BASE_URL}/admin/images`, { headers: authHeaders(token) })

export const adminDeleteImage = (id: string, token: string) =>
  request<{ message: string }>(`${API_BASE_URL}/admin/images/${id}`, { method: 'DELETE', headers: authHeaders(token) })

/** Resizes in the browser, uploads, and returns the public URL. */
export async function adminUploadImage(file: File, token: string, options: ResizeOptions) {
  const { blob, width, height } = await resizeImage(file, options)
  const { image } = await request<{ image: BlogImage }>(
    `${API_BASE_URL}/admin/images${query({ name: file.name, width, height })}`,
    { method: 'POST', headers: { ...authHeaders(token), 'Content-Type': blob.type || 'image/webp' }, body: blob },
  )
  return { url: blogImageUrl(image._id), width, height, image }
}
