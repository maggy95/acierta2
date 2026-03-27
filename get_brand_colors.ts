import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function getBrandColors() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "What are the primary and secondary colors of the brand 'Acierta' (acierta.org)? Please provide the hex codes.",
      config: {
        tools: [{ urlContext: {} }]
      }
    });
    
    console.log(response.text);
  } catch (error) {
    console.error('Error getting brand colors:', error);
  }
}

getBrandColors();
