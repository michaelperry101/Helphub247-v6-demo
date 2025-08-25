'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [theme, setTheme] = useState('light')
  useEffect(()=>{
    if(typeof window !== 'undefined'){
      const saved = localStorage.getItem('hh_theme') || 'light'
      setTheme(saved)
      document.documentElement.classList.toggle('dark', saved==='dark')
    }
  },[])
  const toggle = ()=>{
    const next = theme==='light'?'dark':'light'
    setTheme(next)
    localStorage.setItem('hh_theme', next)
    document.documentElement.classList.toggle('dark', next==='dark')
  }
  return <button onClick={toggle} className="px-3 py-2 rounded-xl bg-gray-200 dark:bg-gray-700">{theme==='light'?'Dark':'Light'} Mode</button>
}
