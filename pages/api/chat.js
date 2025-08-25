export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { message } = req.body || {};
  // Placeholder: when you add OPENAI_API_KEY, replace this with a call to OpenAI
  return res.status(200).json({ reply: `CARYS (demo) echo: ${message || ''}` });
}
