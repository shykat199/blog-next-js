import Container from '@/components/ui/container'
import { getPostBySlug } from '@/features/posts/queries'
import PostContent from '@/features/posts/components/post-content'
import PostMeta from '@/features/posts/components/post-meta'

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  return (
    <main className="py-12">
      <Container>
        <PostMeta post={post} />
        <PostContent post={post} />
      </Container>
    </main>
  )
}