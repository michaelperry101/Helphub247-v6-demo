'use client'
import { useState } from 'react'
export default function Subscribe(){
  const [ok,setOk] = useState(false)
  return (
    <div className="card">
      <h1 className="text-2xl font-bold">Subscribe to HelpHub247</h1>
      <p className="mt-2">Premium unlocks unlimited history, faster responses, and priority support.</p>
      {!ok ? <button className="btn btn-primary mt-4" onClick={()=>setOk(true)}>Subscribe Now (Demo)</button> : <p className="mt-4 text-green-600">✅ Subscribed (demo)</p>}
      <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">Price: £9.99 / month (demo)</div>
    </div>
  )
}
