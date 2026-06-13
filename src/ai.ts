import { GoogleGenAI } from "@google/genai";


// console.log("API:", process.env.API);
const ai = new GoogleGenAI({
  apiKey: process.env.API!
});

export async function main(prompt:string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
      config: {
    temperature: 0.2,
  }

  });
  
  console.log(response.text);
 return response.text;
}

// await main();



// GoogleGenAI → class provided by the SDK
// new GoogleGenAI(...) → creates a client
// ai → variable holding that client
// ai.models.generateContent(...) → uses the client to call Gemini