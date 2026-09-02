import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const evaluateImageService = async (question, imageBuffer, mimeType) => {
  const base64Image = imageBuffer.toString("base64");

  const prompt = `Evaluate the handwritten or captured student answer in the provided image based on the given question as a strict examiner.
  Question: ${question}`;

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: [
      prompt,
      {
        inlineData: {
          data: base64Image,
          mimeType: mimeType,
        },
      },
    ],
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          score: {
            type: Type.NUMBER,
            description: "Score out of 10 given to the answer in the image.",
          },
          examinerRemarks: {
            type: Type.STRING,
            description: "Detailed feedback on the handwritten answer.",
          },
          areasForImprovement: {
            type: Type.STRING,
            description: "What was missing in the image answer.",
          },
        },
        required: ["score", "examinerRemarks", "areasForImprovement"],
      },
    },
  });

  return JSON.parse(response.text);
};