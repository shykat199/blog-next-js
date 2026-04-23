import Hero from '@/features/home/components/hero'
import FeaturedPosts from '@/features/home/components/featured-posts'
import LatestPosts from '@/features/home/components/latest-posts'
import CategoryStrip from '@/features/home/components/category-strip'

export default function HomePage() {
  return (
    <main className="pb-16">
      <Hero />
      <FeaturedPosts />
      <LatestPosts />
      <CategoryStrip />
    </main>
  )
}
