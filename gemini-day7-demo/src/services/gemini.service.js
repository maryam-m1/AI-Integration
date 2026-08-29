import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// this function will call gemini and evaluate the student's answer
export const evaluateAnswerService = async (question, studentAnswer) => {
  const prompt = `You are a strict examiner. Evaluate the following student answer based on the question. 
  Question: ${question}
  Student Answer: ${studentAnswer}
  
  Provide a score out of 10 and short remarks.`;

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
  });

  return response.text;
};