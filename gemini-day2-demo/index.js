import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Initialize Gemini client
const ai = new GoogleGenAI({});

async function runDay2Task() {
  try {
    console.log("🤖 Sending request to Gemini AI...");

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash", 
      contents: "Hello Gemini! I am a software engineering student learning AI integration in Node.js. Give me a short, professional encouragement message for my developer journey.",
    });

    console.log("\n✨ AI Response:\n");
    console.log(response.text);

  } catch (error) {
    console.error("❌ An error occurred:", error);
  }
}

runDay2Task();