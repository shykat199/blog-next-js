import Link from 'next/link'
import Container from '@/components/ui/container'
import SectionHeading from '@/components/ui/section-heading'
import { getHomePageData } from '@/features/home/queries'

export default async function CategoryStrip() {
  const { categories } = await getHomePageData()

  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          title="Explore by category"
          description="Jump straight into the topics your readers care about most."
        />

        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="inline-flex rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}