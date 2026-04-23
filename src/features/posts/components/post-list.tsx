import { Post } from '@/features/posts/types'
import PostCard from './post-card'

export default function PostList({ posts }: { posts: Post[] }) {
  if (!posts.length) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-600">
        No posts found.
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}