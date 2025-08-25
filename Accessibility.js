'use client'
import { useEffect, useState } from 'react'

export default function Accessibility(){
  const [size, setSize] = useState('base')

  useEffect(()=>{
    document.documentElement.style.fontSize = size === 'base' ? '16px' : size === 'lg' ? '18px' : '20px'
  },[size])

  return (
    <div className="card">
      <h2 className="text-xl font-semibold">Accessibility</h2>
      <div className="mt-3 flex gap-2 items-center">
        <label className="text-sm">Text size</label>
        <select value={size} onChange={e=>setSize(e.target.value)} className="px-3 py-2 rounded-xl border">
          <option value="base">Normal</option>
          <option value="lg">Large</option>
          <option value="xl">Extra large</option>
        </select>
      </div>
    </div>
  )
}
