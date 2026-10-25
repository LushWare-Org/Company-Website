import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getRouteSeo, renderHeadTags } from './routes.js'

// Keeps <head> metadata in sync with the current route during client-side
// navigation. The first page load already has these tags from the prerender.
export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove())
    document.querySelectorAll('head > title').forEach((el) => el.remove())
    document.head.insertAdjacentHTML('beforeend', renderHeadTags(getRouteSeo(pathname)))
  }, [pathname])

  return null
}
