// Shapes returned by the blog API (server/controllers/blogController.js).

export interface BlogCover {
  url: string
  alt: string
}

export interface BlogAuthor {
  name: string
  role: string
}

export interface BlogSeo {
  metaTitle: string
  metaDescription: string
  focusKeyword: string
  keywords: string[]
  noindex: boolean
}

export interface BlogPostSummary {
  _id: string
  title: string
  slug: string
  excerpt: string
  coverImage: BlogCover
  category: string
  tags: string[]
  author: BlogAuthor
  status: 'draft' | 'published'
  publishedAt: string | null
  featured: boolean
  readingTime: number
  wordCount: number
  seo?: Partial<BlogSeo>
  createdAt: string
  updatedAt: string
}

export interface BlogPost extends BlogPostSummary {
  content: string
  seo: BlogSeo
}

/** What the admin editor sends; the server derives slug fallback, word count and reading time. */
export type BlogPostInput = Pick<
  BlogPost,
  'title' | 'slug' | 'excerpt' | 'content' | 'coverImage' | 'category' | 'tags' | 'author' | 'status' | 'publishedAt' | 'featured' | 'seo'
>

export interface BlogFacet {
  name: string
  count: number
}

export interface BlogListResponse {
  posts: BlogPostSummary[]
  total: number
  page: number
  pages: number
  tags: BlogFacet[]
  categories: BlogFacet[]
}

export interface BlogPostResponse {
  post: BlogPost
  related: BlogPostSummary[]
}

export interface BlogImage {
  _id: string
  contentType: string
  size: number
  width: number | null
  height: number | null
  name: string
  createdAt: string
}
