import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const evaluateBatchService = async (evaluationsList) => {
  // evaluationsList is expected to be an array of objects, each containing a question and the corresponding student answer.
  const prompt = `Evaluate the following list of student answers against their respective questions as a strict examiner. 
  Here is the data: ${JSON.stringify(evaluationsList)}`;

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      // Setting Type ARRAY in schema to indicate that we expect a list of evaluations in the response
      responseSchema: {
        type: Type.ARRAY,
        description: "List of evaluations for each question.",
        items: {
          type: Type.OBJECT,
          properties: {
            questionId: {
              type: Type.STRING,
              description: "Identifier or text of the question.",
            },
            score: {
              type: Type.NUMBER,
              description: "Score out of 10 given to the student answer.",
            },
            examinerRemarks: {
              type: Type.STRING,
              description: "Detailed feedback on the answer.",
            },
          },
          required: ["questionId", "score", "examinerRemarks"],
        },
      },
    },
  });

  return JSON.parse(response.text);
};