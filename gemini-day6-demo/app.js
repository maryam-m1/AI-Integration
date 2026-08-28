import express from "express";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// initialize Gemini AI client 
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// POST API Endpoint: Evaluation route
app.post("/api/evaluate", async (req, res) => {
  try {
    const { studentAnswer, question } = req.body;

    if (!studentAnswer || !question) {
      return res.status(400).json({ error: "Question and studentAnswer are required!" });
    }

    console.log("Received evaluation request for Gemini...");

    const prompt = `You are an strict examiner. Evaluate the following student answer based on the question. 
    Question: ${question}
    Student Answer: ${studentAnswer}
    
    Provide a score out of 10 and short remarks.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    res.status(200).json({
      success: true,
      evaluation: response.text,
    });

  } catch (error) {
    console.error("Error in evaluation API:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});

// export app so that server.js will import it
export default app;