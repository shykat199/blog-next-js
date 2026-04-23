export type Post = {
  id: string
  title: string
  slug: string
  excerpt: string
  coverImage: string
  publishedAt: string
  readingTime: string
  category: {
    name: string
    slug: string
  }
  author: {
    name: string
    username: string
    avatar: string
  }
  featured?: boolean
}