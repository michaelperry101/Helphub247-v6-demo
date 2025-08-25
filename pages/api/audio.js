import { OpenAI } from "openai";
import fs from "fs";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  const { text } = req.body;

  const audio = await openai.audio.speech.create({
    model: "gpt-5o-mini-tts",
    voice: "alloy",
    input: text,
  });

  // Respond with base64 audio for simplicity
  res.status(200).json({ audio: audio.toString("base64") });
}
