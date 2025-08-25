import Link from 'next/link'

export default function Home(){
  return (
    <div className="space-y-6">
      <section className="card">
        <h1 className="text-3xl md:text-4xl font-bold">Welcome to HelpHub247</h1>
        <p className="mt-2 text-gray-700 dark:text-gray-300">Always-on AI help. Meet <strong>CARYS</strong> — Conversational Assistant for Responsive Yielding Solutions.</p>
        <div className="mt-4 flex gap-3">
          <Link href="/chat" className="btn btn-primary">Open CARYS</Link>
          <Link href="/subscribe" className="btn btn-ghost">Subscribe £9.99/mo (Demo)</Link>
        </div>
      </section>
    </div>
  )
}
