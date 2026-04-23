import { Post } from '@/features/posts/types'

const mockPosts: Post[] = [
  {
    id: '1',
    title: 'How to Build a Modern Blog with Next.js App Router',
    slug: 'modern-blog-nextjs-app-router',
    excerpt:
      'Learn how to structure a scalable blog using server components, feature-based folders, and clean UI composition.',
    coverImage:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'Apr 20, 2026',
    readingTime: '6 min read',
    category: {
      name: 'Next.js',
      slug: 'nextjs',
    },
    author: {
      name: 'Shykat Roy',
      username: 'shykat',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    },
    featured: true,
  },
  {
    id: '2',
    title: 'Designing a Better Content System with Supabase',
    slug: 'content-system-with-supabase',
    excerpt:
      'Use relational tables and a clean server-side data layer to make your content model easier to scale.',
    coverImage:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'Apr 18, 2026',
    readingTime: '5 min read',
    category: {
      name: 'Supabase',
      slug: 'supabase',
    },
    author: {
      name: 'Sarah Khan',
      username: 'sarah',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    },
  },
  {
    id: '3',
    title: 'Creating Reusable UI Sections for Blog Layouts',
    slug: 'reusable-ui-sections-for-blog-layouts',
    excerpt:
      'A practical guide to extracting the right shared components without making your codebase messy.',
    coverImage:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'Apr 16, 2026',
    readingTime: '4 min read',
    category: {
      name: 'UI Design',
      slug: 'ui-design',
    },
    author: {
      name: 'Anika Rahman',
      username: 'anika',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
    },
  },
  {
    id: '4',
    title: 'Building SEO-Friendly Article Pages in Next.js',
    slug: 'seo-friendly-article-pages-nextjs',
    excerpt:
      'Metadata, route structure, and content design patterns that help article pages perform better.',
    coverImage:
      'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'Apr 15, 2026',
    readingTime: '7 min read',
    category: {
      name: 'SEO',
      slug: 'seo',
    },
    author: {
      name: 'Morshed Alam',
      username: 'morshed',
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    },
  },
]

export async function getHomePageData() {
  const featuredPost = mockPosts.find((post) => post.featured) ?? mockPosts[0]
  const latestPosts = mockPosts.slice(1, 4)
  const categories = [
    { name: 'Next.js', slug: 'nextjs' },
    { name: 'Supabase', slug: 'supabase' },
    { name: 'UI Design', slug: 'ui-design' },
    { name: 'SEO', slug: 'seo' },
  ]

  return {
    featuredPost,
    latestPosts,
    categories,
  }
}