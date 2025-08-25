'use client'
import Accessibility from '../../components/Accessibility'
import ThemeToggle from '../../components/ThemeToggle'

export default function Settings(){
  return (
    <div className="space-y-4">
      <div className="card">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Personalize your experience</p>
      </div>
      <Accessibility />
      <div className="card">
        <h2 className="text-xl font-semibold">Theme</h2>
        <div className="mt-2"><ThemeToggle /></div>
      </div>
    </div>
  )
}
