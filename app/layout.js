import './globals.css'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export const metadata = {
  title: 'HelpHub247 — CARYS',
  description: '24/7 AI help powered by CARYS',
  viewport: 'width=device-width, initial-scale=1.0'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-950 dark:to-gray-900">
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0">
            <Header />
            <main className="container-responsive p-4 md:p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
