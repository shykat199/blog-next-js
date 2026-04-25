import { createSupabase } from '@/lib/supabase/server'
import { Post, Category } from '@/features/posts/types'

export async function getHomePageData() {
  const supabase = createSupabase()

  const { data: blogs, error: blogsError } = await supabase
    .from('blogs')
    .select(`
      id,
      title,
      slug,
      description,
      image,
      created_at,
      status,
      categories (
        id,
        title,
        slug
      ),
      users (
        id,
        name,
        slug,
        image
      )
    `)
    .eq('status', 1)
    .order('created_at', { ascending: false })
    .limit(5)

  if (blogsError) {
    throw new Error(blogsError.message)
  }


  const { data: categories, error: categoriesError } = await supabase
    .from('categories')
    .select(`
      id,
      title,
      slug
    `)
    .order('title', { ascending: true })

  if (categoriesError) {
    throw new Error(categoriesError.message)
  }


  const posts = (blogs ?? []) as Post[]

  return {
    featuredPost: posts[0] ?? null,
    latestPosts: posts.slice(1),
    categories: (categories ?? []) as Category[],
  }
}