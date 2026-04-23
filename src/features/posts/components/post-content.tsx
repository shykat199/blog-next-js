import { Post } from '@/features/posts/types'

export default function PostContent({ post }: { post: Post }) {
  return (
    <article className="prose prose-slate max-w-3xl">
      <img
        src={post.coverImage}
        alt={post.title}
        className="mb-6 rounded-xl"
      />

      <p>{post.excerpt}</p>

      <p>
        This is where your full blog content will go. Right now we are using
        mock data, but later you will render real content from Supabase.
      </p>

      <p>
        You can support markdown, rich text, or HTML here depending on your backend.
      </p>
    </article>
  )
}