export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="card mb-6">
        <h1 className="text-3xl font-bold">Welcome to HelpHub247</h1>
        <p className="mt-2 text-lg">Always-on AI help. Meet <strong>CARYS</strong> — Conversational Assistant for Responsive Yielding Solutions.</p>
        <div className="mt-4 flex gap-3">
          <a href="/chat" className="btn">Open Chat</a>
          <a href="/subscribe" className="btn bg-purple-600 hover:bg-purple-700">Try Premium (Demo)</a>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <a className="card" href="/about"><h3 className="font-semibold">About</h3><p>What is HelpHub247 & CARYS?</p></a>
        <a className="card" href="/reviews"><h3 className="font-semibold">Reviews</h3><p>See what users say.</p></a>
        <a className="card" href="/settings"><h3 className="font-semibold">Settings</h3><p>Theme & accessibility.</p></a>
      </div>
    </div>
  );
}
