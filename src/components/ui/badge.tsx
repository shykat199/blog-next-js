import { ReactNode } from 'react'

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  )
}