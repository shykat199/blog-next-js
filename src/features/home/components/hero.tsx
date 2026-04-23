import Link from 'next/link'
import Container from '@/components/ui/container'
import Badge from '@/components/ui/badge'

export default function Hero() {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Modern publishing platform</Badge>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Stories, ideas, and engineering notes that deserve a clean home.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            A modern blog built with Next.js, designed for readability, performance,
            and growth.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/blog"
              className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Explore Articles
            </Link>
            <Link
              href="/categories"
              className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}