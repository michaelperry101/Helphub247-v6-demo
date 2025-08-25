'use client'
import ThemeToggle from './ThemeToggle'

export default function Header(){
  return (
    <header className="sticky top-0 z-30 border-b border-white/30 dark:border-gray-800/50 backdrop-blur-md bg-white/60 dark:bg-gray-950/60">
      <div className="container-responsive flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="HelpHub247" className="h-8 w-8"/>
          <span className="font-semibold">HelpHub247</span>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <a href="/" className="header-link">Home</a>
          <a href="/chat" className="header-link">Chat</a>
          <a href="/subscribe" className="header-link">Subscribe</a>
          <a href="/reviews" className="header-link">Reviews</a>
          <a href="/about" className="header-link">About</a>
          <a href="/settings" className="header-link">Settings</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
    )
}
