import { ReactNode } from 'react'
import Header from '@/features/layout/components/header'
import Footer from '@/features/layout/components/footer'

export default function PublicLayout({children}: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}