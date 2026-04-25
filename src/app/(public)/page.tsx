import Hero from '@/features/home/components/hero'
import FeaturedPosts from '@/features/home/components/featured-posts'
import LatestPosts from '@/features/home/components/latest-posts'
import CategoryStrip from '@/features/home/components/category-strip'
import { getHomePageData } from '@/features/home/queries'

export default async function HomePage() {
    const { featuredPost, latestPosts } = await getHomePageData()

  return (
    <main className="pb-16">
      <Hero post={featuredPost} />
      <FeaturedPosts  latestPosts={latestPosts}/>
      {/* <LatestPosts  /> */}
      {/* <CategoryStrip categories={categories} /> */}
    </main>
  )
}
