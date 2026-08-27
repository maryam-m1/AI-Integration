import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function runDay5Task() {
  try {
    console.log("Initializing chat session with Gemini...");

    // Chat session create kar rahe hain jisme model memory rakhega
    const chat = ai.chats.create({
      model: "gemini-3.6-flash",
      history: [
        {
          role: "user",
          parts: [{ text: "Hello, I am developing an automated exam evaluation system." }],
        },
        {
          role: "model",
          parts: [{ text: "That sounds like a great project! I can help you evaluate student answers, check rubrics, and provide structured feedback. How can I assist you today?" }],
        },
      ],
    });

    console.log("\n--- Sending a follow-up message in the same chat ---");
    // Ab user pichli baat ko continue karte hue naya message bhej raha hai
    const response = await chat.sendMessage({
      message: "What was the project I mentioned I am building?",
    });

    console.log("\n--- AI Chat Response ---");
    console.log(response.text);

  } catch (error) {
    console.error("Error during Day 5 task:", error);
  }
}

runDay5Task();