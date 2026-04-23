import Link from 'next/link'
import { Post } from '@/features/posts/types'

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/blog/${post.slug}`}>
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-52 w-full object-cover"
        />
      </Link>

      <div className="space-y-4 p-5">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <span>{post.category.name}</span>
          <span>•</span>
          <span>{post.publishedAt}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>

        <div>
          <h3 className="text-xl font-semibold leading-snug text-slate-900">
            <Link href={`/blog/${post.slug}`} className="hover:text-slate-700">
              {post.title}
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-slate-900">
              {post.author.name}
            </p>
            <p className="text-xs text-slate-500">@{post.author.username}</p>
          </div>
        </div>
      </div>
    </article>
  )
}