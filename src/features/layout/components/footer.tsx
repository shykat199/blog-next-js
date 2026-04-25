import Link from 'next/link'
import Container from '@/components/ui/container'

export default function Footer() {
  return (
    <footer
      className="bg-stone-100 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 font-serif text-sm full-width mt-20 opacity-80 hover:opacity-100 transition-opacity">
      <div
        className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 max-w-7xl mx-auto gap-8 md:gap-0">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-xl font-serif font-bold text-emerald-900 dark:text-emerald-100">
            The Insight
          </div>
          <p className="text-stone-500 dark:text-stone-400">
            © 2024 The Insight Editorial. Built for deep reading.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 underline decoration-stone-300 transition-colors"
            href="#">Archives</a>
          <a className="text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 underline decoration-stone-300 transition-colors"
            href="#">Authors</a>
          <a className="text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 underline decoration-stone-300 transition-colors"
            href="#">Newsletter</a>
          <a className="text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 underline decoration-stone-300 transition-colors"
            href="#">Privacy</a>
          <a className="text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 underline decoration-stone-300 transition-colors"
            href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}