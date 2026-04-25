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

      <nav className="docked full-width top-0 sticky z-50 bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md shadow-sm dark:shadow-none border-b border-stone-200 dark:border-stone-800 font-serif antialiased duration-300 ease-in-out">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <a className="text-2xl font-serif font-bold tracking-tight text-emerald-900 dark:text-emerald-100"
            href="#">
            The Insight
          </a>
          <div className="hidden md:flex items-center space-x-2">


            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 text-emerald-900 dark:text-emerald-400 border-b-2 border-emerald-900 dark:border-emerald-400 pb-1 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md transition-all duration-300 ease-in-out">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button aria-label="Search"
              className="text-stone-600 dark:text-stone-400 hover:text-emerald-900 transition-colors p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800">
              <span className="material-symbols-outlined" data-icon="search">search</span>
            </button>
            <a className="hidden sm:inline-flex items-center justify-center bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-sm text-label-sm tracking-wide hover:bg-on-primary-fixed transition-colors duration-300"
              href="#">
              Subscribe
            </a>
          </div>
          <button className="md:hidden p-2 text-stone-600">
            <span className="material-symbols-outlined" data-icon="menu">menu</span>
          </button>
        </div>
      </nav>

    </header>
  )
}