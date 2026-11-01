// Build-time render entry used by scripts/prerender.mjs (never shipped to the browser).
/* eslint-disable react-refresh/only-export-components -- not a hot-reloaded module */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.tsx'
import { blogPostSeo, type RouteSeo } from './seo/routes'
import { blogInitialData, setBlogList, setBlogPost } from './data/blogStore'
import type { BlogListResponse, BlogPost, BlogPostSummary } from './types/blog'

export { ROUTES, NOT_FOUND_SEO, SITE_URL, ROBOTS_DISALLOW, REDIRECTS, renderHeadTags } from './seo/routes'

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}

/**
 * Published blog posts, fetched from the API so each one is prerendered and
 * listed in the sitemap. Posts published after a build still work (rendered
 * in the browser) but should be followed by a rebuild — see CLAUDE.md.
 */
export async function loadDynamicRoutes(): Promise<RouteSeo[]> {
  const api = import.meta.env.VITE_API_URL
  if (!api) {
    console.warn('⚠ VITE_API_URL is not set — blog posts are not prerendered.')
    return []
  }
  try {
    const res = await fetch(`${api}/api/blog/posts?full=1&limit=500`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data: Omit<BlogListResponse, 'posts'> & { posts: BlogPost[] } = await res.json()
    const summary = ({ content, ...rest }: BlogPost): BlogPostSummary => rest // eslint-disable-line @typescript-eslint/no-unused-vars
    setBlogList({ ...data, posts: data.posts.slice(0, 12).map(summary), page: 1, pages: Math.max(1, Math.ceil(data.total / 12)) })
    for (const post of data.posts) {
      const sameTopic = data.posts.filter((p) => p._id !== post._id && (p.tags.some((t) => post.tags.includes(t)) || (post.category && p.category === post.category)))
      const related = [...sameTopic, ...data.posts.filter((p) => p._id !== post._id && !sameTopic.includes(p))].slice(0, 3).map(summary)
      setBlogPost(post.slug, { post, related })
    }
    return data.posts.map(blogPostSeo)
  } catch (err) {
    console.warn(`⚠ Could not load blog posts from ${api} (${(err as Error).message}) — blog posts are not prerendered.`)
    return []
  }
}

/** Data embedded into a prerendered page as <script id="initial-data">. */
export const getInitialData = blogInitialData
