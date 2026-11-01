import { useEffect, useMemo, useRef, useSyncExternalStore } from 'react'
import { useLocation } from 'react-router-dom'
import { getRouteSeo, renderHeadTags } from './routes'
import { trackPageView } from '../lib/analytics'
import { getBlogState, subscribeBlog } from '../data/blogStore'

// Keeps <head> metadata in sync with the current route during client-side
// navigation. The first page load already has these tags from the prerender.
// Blog posts get their tags once the post data has loaded (blogStore).
export default function Seo() {
  const { pathname } = useLocation()
  const blog = useSyncExternalStore(subscribeBlog, getBlogState, getBlogState)
  const route = useMemo(() => getRouteSeo(pathname), [pathname, blog]) // eslint-disable-line react-hooks/exhaustive-deps
  const head = useMemo(() => renderHeadTags(route), [route])
  const trackedPath = useRef<string | null>(null)

  useEffect(() => {
    document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove())
    document.querySelectorAll('head > title').forEach((el) => el.remove())
    document.head.insertAdjacentHTML('beforeend', head)
  }, [head])

  useEffect(() => {
    // One page view per path, sent once the real title is in place.
    if (route.pending || trackedPath.current === pathname) return
    trackedPath.current = pathname
    trackPageView()
  }, [pathname, route.pending, head])

  return null
}
