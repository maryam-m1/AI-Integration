import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
//fs > file system module
import fs from "fs";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Local image file ko Gemini ke liye buffer/base64 format mein read karne ka function
function fileToGenerativePart(filePath, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(filePath)).toString("base64"),
      mimeType,
    },
  };
}

async function runDay4Task() {
  try {
    console.log("Preparing image and sending request to Gemini...");

    // Apni image ka path yahan dein (ensure karein image ka naam wahi ho jo aapne folder mein rakhi hai)
    const imagePath = "./bat1.jpg"; 
    const imagePart = fileToGenerativePart(imagePath, "image/jpeg");

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [
        imagePart,
        "Analyze this image and explain what you see in bullet points.",
      ],
    });

    console.log("\n--- AI Image Analysis Response ---");
    console.log(response.text);

  } catch (error) {
    console.error("Error during Day 4 task:", error);
  }
}

runDay4Task();