import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// load Environment variables 
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function runDay3Task() {
  try {
    console.log("Sending request to Gemini for structured JSON output...");

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: "Evaluate this code snippet: 'let x = 10;' and give feedback in a strict JSON format with fields: score (number), status (string), and remarks (string).",
      config: {
        // This forces the model to return only JSON
        responseMimeType: "application/json",
      },
    });

    console.log("\n--- Raw AI Response ---");
    console.log(response.text);

    // JSON parsing check
    const parsedData = JSON.parse(response.text);
    console.log("\n--- Parsed JavaScript Object ---");
    console.log("Score:", parsedData.score);
    console.log("Status:", parsedData.status);
    console.log("Remarks:", parsedData.remarks);

  } catch (error) {
    console.error("Error during Day 3 task:", error);
  }
}

runDay3Task();