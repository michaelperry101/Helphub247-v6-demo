'use client'
import { useMemo, useState } from 'react'

function generate(n){
  const names = ['Alex','Sam','Jordan','Taylor','Casey','Morgan','Jamie','Avery','Riley','Quinn','Charlie','Drew','Rowan','Skye','Harper','Parker']
  const cities = ['London','Manchester','Leeds','Bristol','Cardiff','Glasgow','Edinburgh','Birmingham','Liverpool','Sheffield','Nottingham']
  const snippets = ['Fast and reliable.','Feels like a real assistant.','Saved me hours every week.','Brilliant on mobile.','The upload feature is a game changer.','Great value for money.','Super intuitive UI.','The dark mode is perfect.']
  const items = []
  for(let i=1;i<=1249;i++){ items.push({ id:i, name: names[i%names.length] + ' ' + String.fromCharCode(65+(i%26)) + '.', city: cities[i%cities.length], text: `HelpHub247 has been outstanding — ${snippets[i%snippets.length]}` }) }
  return items
}

export default function Reviews(){
  const [page, setPage] = useState(1)
  const per = 20
  const items = useMemo(()=>generate(1249), [])
  const total = Math.ceil(items.length / per)
  const view = items.slice((page-1)*per, page*per)
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Customer Reviews</h1>
      <p className="text-gray-600 dark:text-gray-300">⭐ {items.length} 5-star demo reviews</p>
      <div className="grid md:grid-cols-2 gap-4">
        {view.map(r=>(
          <div className="card" key={r.id}>
            <div className="font-semibold">{r.name} • <span className="text-sm opacity-70">{r.city}</span></div>
            <div className="text-yellow-500">★★★★★</div>
            <p className="mt-1">{r.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        <button className="btn" onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}>Prev</button>
        <span className="px-3 py-2 rounded-xl bg-gray-200 dark:bg-gray-800">Page {page} / {total}</span>
        <button className="btn" onClick={()=>setPage(p=>Math.min(total,p+1))} disabled={page===total}>Next</button>
      </div>
    </div>
  )
}
