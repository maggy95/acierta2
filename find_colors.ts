import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function findColors() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "What are the primary and secondary brand colors (hex codes) of the website acierta.org? It's a consulting/training company in Peru.",
    config: {
      tools: [{ googleSearch: {} }],
    },
  });

  console.log(response.text);
}

findColors();
