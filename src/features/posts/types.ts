export type Post = {
  id: string
  title: string
  slug: string
  description: string
  image: string
  created_at: string
  status: number

  categories: {
    id: string
    title: string
    slug: string
  }

  users: {
    id: string
    name: string
    image: string
  }
}


export type Category = {
  id: string
  title: string
  slug: string
}