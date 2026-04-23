import Container from '@/components/ui/container'
import SectionHeading from '@/components/ui/section-heading'
import PostList from '@/features/posts/components/post-list'
import { getPublishedPosts } from '@/features/posts/queries'

export default async function BlogPage() {
  const posts = await getPublishedPosts()

  return (
    <main className="py-12">
      <Container>
        <SectionHeading
          title="Blog"
          description="Explore all articles, ideas, and insights from our platform."
        />

        <PostList posts={posts} />
        
      </Container>
    </main>
  )
}