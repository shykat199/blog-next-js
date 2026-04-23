import Link from 'next/link'
import Container from '@/components/ui/container'
import SectionHeading from '@/components/ui/section-heading'
import PostCard from '@/features/posts/components/post-card'
import { getHomePageData } from '@/features/home/queries'

export default async function LatestPosts() {
  const { latestPosts } = await getHomePageData()

  return (
    <section className="py-16 bg-slate-50">
      <Container>
        <SectionHeading
          title="Latest articles"
          description="Fresh writing from across engineering, product, and design."
          action={
            <Link href="/blog" className="text-sm font-semibold text-slate-700 hover:text-slate-900">
              View all
            </Link>
          }
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {latestPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  )
}