import Link from 'next/link'
import Container from '@/components/ui/container'
import SectionHeading from '@/components/ui/section-heading'
import { getHomePageData } from '@/features/home/queries'

export default async function FeaturedPosts() {
  const { featuredPost } = await getHomePageData()

  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          title="Featured story"
          description="Start with the main article we want readers to discover first."
        />

        <div className="grid gap-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
          <img
            src={featuredPost.coverImage}
            alt={featuredPost.title}
            className="h-full min-h-[320px] w-full object-cover"
          />

          <div className="flex flex-col justify-center p-8 sm:p-10">
            <p className="text-sm font-medium text-slate-500">
              {featuredPost.category.name} • {featuredPost.publishedAt}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {featuredPost.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {featuredPost.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <img
                src={featuredPost.author.avatar}
                alt={featuredPost.author.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-slate-900">{featuredPost.author.name}</p>
                <p className="text-sm text-slate-500">{featuredPost.readingTime}</p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Read Article
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}