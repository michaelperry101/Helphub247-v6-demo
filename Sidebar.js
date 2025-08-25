'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Sidebar(){
  const [open, setOpen] = useState(false)
  return (
    <aside className="min-w-0">
      <button className="p-3 md:hidden fixed top-3 left-3 z-50 rounded-xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-white/30 dark:border-gray-800/50"
        onClick={()=>setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={22}/> : <Menu size={22}/>}
      </button>

      <div className={`fixed top-0 left-0 h-full w-72 card p-4 transform transition-transform duration-300 z-40 ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block`}>
        <div className="flex items-center gap-3 mb-4">
          <img src="/logo.svg" alt="HelpHub247" className="h-10 w-10"/>
          <div className="font-bold text-lg">HelpHub247</div>
        </div>

        <nav className="flex flex-col gap-2">
          <a className="btn btn-primary w-full" href="/chat">Open CARYS</a>
          <a className="btn btn-ghost w-full" href="/subscribe">Subscribe (Demo)</a>
          <a className="px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800" href="/about">About</a>
          <a className="px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800" href="/reviews">Reviews</a>
          <a className="px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800" href="/terms">Terms</a>
          <a className="px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800" href="/privacy">Privacy</a>
          <a className="px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800" href="/settings">Settings</a>
        </nav>
      </div>
      {open && <div className="fixed inset-0 bg-black/40 z-30 md:hidden" onClick={()=>setOpen(false)} />}
    </aside>
    )
}
