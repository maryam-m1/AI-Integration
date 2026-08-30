import { evaluateStructuredService } from "../services/gemini.service.js";

export const evaluateStructuredController = async (req, res) => {
  try {
    const { studentAnswer, question } = req.body;

    if (!studentAnswer || !question) {
      return res.status(400).json({ error: "Question and studentAnswer are required!" });
    }

    const structuredResult = await evaluateStructuredService(question, studentAnswer);

    res.status(200).json({
      success: true,
      data: structuredResult, //now it will be a json object
    });

  } catch (error) {
    console.error("Error in structured evaluation:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};