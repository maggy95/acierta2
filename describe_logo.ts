import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function describeLogo() {
  const logoUrl = 'https://www.acierta.org/wp-content/uploads/2026/01/ACIERTA-Logo-con-Fondo-transparente-1024x846.webp';
  
  try {
    const imageResponse = await fetch(logoUrl);
    const imageBuffer = await imageResponse.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString('base64');
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          parts: [
            { text: "What are the primary and secondary colors (hex codes) of this logo? Describe the brand's visual identity based on this image." },
            { inlineData: { data: base64Image, mimeType: "image/webp" } }
          ]
        }
      ]
    });
    
    console.log(response.text);
  } catch (error) {
    console.error('Error describing logo:', error);
  }
}

describeLogo();
