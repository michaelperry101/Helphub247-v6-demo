import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [textResult, setTextResult] = useState("");
  const [imageResult, setImageResult] = useState("");

  const generateText = async () => {
    const res = await fetch("/api/text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setTextResult(data.result);
  };

  const generateImage = async () => {
    const res = await fetch("/api/image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setImageResult(data.imageUrl);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>GPT-5 Demo</h1>

      <textarea
        rows={4}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your prompt here"
        style={{ width: "100%" }}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={generateText}>Generate Text</button>
        <button onClick={generateImage} style={{ marginLeft: "10px" }}>
          Generate Image
        </button>
      </div>

      {textResult && (
        <div>
          <h3>Text Result:</h3>
          <p>{textResult}</p>
        </div>
      )}

      {imageResult && (
        <div>
          <h3>Image Result:</h3>
          <img src={imageResult} alt="Generated" style={{ maxWidth: "400px" }} />
        </div>
      )}
    </div>
  );
}
