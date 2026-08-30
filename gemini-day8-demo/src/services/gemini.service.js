import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const evaluateStructuredService = async (question, studentAnswer) => {
  const prompt = `Evaluate the following student answer based on the question as a strict examiner.
  Question: ${question}
  Student Answer: ${studentAnswer}`;

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
    config: {
      // This will ensure the output is only JSON
      responseMimeType: "application/json",
      // will tell > what will be the json structure of the response
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          score: {
            type: Type.NUMBER,
            description: "Score out of 10 given to the student answer.",
          },
          examinerRemarks: {
            type: Type.STRING,
            description: "Detailed feedback on what was correct.",
          },
          areasForImprovement: {
            type: Type.STRING,
            description: "What was missing or needs improvement.",
          },
        },
        required: ["score", "examinerRemarks", "areasForImprovement"],
      },
    },
  });

  // response.text will be a json string, we'll make it object after parsing
  return JSON.parse(response.text);
};