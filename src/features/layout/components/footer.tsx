import Link from 'next/link'
import Container from '@/components/ui/container'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container>
        <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">MyBlog</h3>
            <p className="mt-2 text-sm text-slate-600">
              A modern blog built with Next.js and Supabase.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <Link href="/blog" className="hover:text-slate-900">
              Blog
            </Link>
            <Link href="/categories" className="hover:text-slate-900">
              Categories
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}