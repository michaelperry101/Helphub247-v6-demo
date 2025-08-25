'use client'
import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function Chat(){
  const [threads, setThreads] = useState([])
  const [activeId, setActiveId] = useState(null)
  const [input, setInput] = useState('')
  const fileRef = useRef()

  useEffect(()=>{
    const saved = localStorage.getItem('hh_threads_v6')
    if(saved){
      const data = JSON.parse(saved)
      setThreads(data)
      if(data[0]) setActiveId(data[0].id)
    } else {
      const first = { id: uuidv4(), title: 'New chat', messages: [] }
      setThreads([first]); setActiveId(first.id)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('hh_threads_v6', JSON.stringify(threads))
  },[threads])

  const active = threads.find(t=>t.id===activeId)

  const speak = (text)=>{
    try{
      const u = new SpeechSynthesisUtterance(text)
      u.lang = 'en-GB'; u.rate=1; u.pitch=1
      window.speechSynthesis.cancel(); window.speechSynthesis.speak(u)
    }catch(e){}
  }

  const send = async ()=>{
    if(!input.trim() && (!fileRef.current || !fileRef.current.files.length)) return
    const files = []
    if(fileRef.current && fileRef.current.files.length){
      for(const f of fileRef.current.files){ files.push({ name: f.name, size: f.size }); }
    }
    const userMsg = { id: uuidv4(), role:'user', content: input, files }
    setThreads(ts => ts.map(t => t.id===activeId ? ({...t, messages:[...t.messages, userMsg]}) : t))
    setInput(''); if(fileRef.current) fileRef.current.value=''

    // Demo API echo (pages/api/chat)
    try{
      const res = await fetch('/api/chat', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ message: userMsg.content })})
      const json = await res.json()
      const replyText = json.reply || 'CARYS (demo): I received your message.'
      const reply = { id: uuidv4(), role:'assistant', content: replyText }
      setThreads(ts => ts.map(t => t.id===activeId ? ({...t, messages:[...t.messages, reply]}) : t))
      speak(replyText)
    }catch(e){
      const replyText = 'CARYS (demo): I received your message.'
      const reply = { id: uuidv4(), role:'assistant', content: replyText }
      setThreads(ts => ts.map(t => t.id===activeId ? ({...t, messages:[...t.messages, reply]}) : t))
      speak(replyText)
    }
  }

  const newChat = ()=>{
    const n = { id: uuidv4(), title: 'New chat', messages: [] }
    setThreads([n, ...threads]); setActiveId(n.id)
  }

  return (
    <div className="flex gap-4 min-h-[calc(100vh-6rem)]">
      <aside className="w-64 hidden md:block">
        <div className="card sticky top-24">
          <button className="btn btn-primary w-full mb-3" onClick={newChat}>+ New Chat</button>
          <div className="space-y-2">
            {threads.map(t=>(
              <button key={t.id} onClick={()=>setActiveId(t.id)} className={"w-full text-left px-3 py-2 rounded-xl "+(t.id===activeId?"bg-indigo-600 text-white":"bg-gray-100 dark:bg-gray-800")}>
                {t.title}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <section className="flex-1 card flex flex-col min-w-0">
        <div className="flex-1 overflow-y-auto space-y-3 p-2">
          {(active?.messages||[]).length===0 && <div className="text-gray-500">Start chatting with CARYS…</div>}
          {(active?.messages||[]).map((m)=>(
            <div key={m.id} className={m.role==='user'?"bubble-user":"bubble-ai"}>
              <div className="text-sm opacity-80 mb-1">{m.role==='user'?'You':'CARYS'}</div>
              <div className="whitespace-pre-wrap break-words">{m.content}</div>
              {m.files?.length>0 && <ul className="mt-2 text-sm list-disc list-inside">{m.files.map((f,idx)=>(<li key={idx}>{f.name} ({Math.round(f.size/1024)} KB)</li>))}</ul>}
            </div>
          ))}
        </div>

        <div className="mt-3 border-t border-gray-200 dark:border-gray-800 pt-3 flex flex-col sm:flex-row gap-2">
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask CARYS anything…" className="flex-1 px-3 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"/>
          <input ref={fileRef} type="file" multiple className="hidden" id="uploader"/>
          <label htmlFor="uploader" className="btn btn-ghost">Upload</label>
          <button onClick={send} className="btn btn-primary">Send</button>
        </div>
      </section>
    </div>
  )
}
