// Blog data shared by the /blog pages and <Seo />.
//
// At build time entry-server.tsx seeds it from the API so posts prerender with
// their content and meta tags; prerender.mjs embeds the same data as
// <script id="initial-data"> so the browser starts with it (no loading flash).

import type { BlogListResponse, BlogPostResponse } from '../types/blog'

export interface BlogState {
  /** First page of /blog without filters. */
  list: BlogListResponse | null
  /** By slug; null = known not to exist. */
  posts: Record<string, BlogPostResponse | null>
}

function readInitialData(): BlogState {
  const empty: BlogState = { list: null, posts: {} }
  if (typeof document === 'undefined') return empty
  try {
    const el = document.getElementById('initial-data')
    const blog = el?.textContent ? JSON.parse(el.textContent).blog : null
    return blog ? { ...empty, ...blog } : empty
  } catch {
    return empty
  }
}

let state = readInitialData()
const listeners = new Set<() => void>()

const emit = () => listeners.forEach((l) => l())

export function subscribeBlog(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export const getBlogState = () => state

export function setBlogList(list: BlogListResponse) {
  state = { ...state, list }
  emit()
}

export function setBlogPost(slug: string, data: BlogPostResponse | null) {
  state = { ...state, posts: { ...state.posts, [slug]: data } }
  emit()
}

/** Build only: the data a prerendered URL needs, embedded into its HTML. */
export function blogInitialData(url: string): { blog: Partial<BlogState> } | null {
  if (url === '/blog') return state.list ? { blog: { list: state.list } } : null
  const slug = url.match(/^\/blog\/([^/]+)$/)?.[1]
  const post = slug ? state.posts[slug] : undefined
  return slug && post ? { blog: { posts: { [slug]: post } } } : null
}
