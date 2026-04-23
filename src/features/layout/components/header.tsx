import Link from 'next/link'
import Container from '@/components/ui/container'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Categories', href: '/categories' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
            MyBlog
          </Link>

          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  )
}