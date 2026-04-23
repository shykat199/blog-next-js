import { Post } from '@/features/posts/types'

export default function PostMeta({ post }: { post: Post }) {
  return (
    <div className="mb-10 space-y-4">
      <p className="text-sm text-slate-500">
        {post.category.name} • {post.publishedAt} • {post.readingTime}
      </p>

      <h1 className="text-4xl font-bold text-slate-900">
        {post.title}
      </h1>

      <p className="text-lg text-slate-600">
        {post.excerpt}
      </p>

      <div className="flex items-center gap-3 pt-4">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="h-12 w-12 rounded-full"
        />
        <div>
          <p className="font-medium text-slate-900">
            {post.author.name}
          </p>
          <p className="text-sm text-slate-500">
            @{post.author.username}
          </p>
        </div>
      </div>
    </div>
  )
}