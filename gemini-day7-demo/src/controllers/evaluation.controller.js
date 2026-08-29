import { evaluateAnswerService } from "../services/gemini.service.js";

export const evaluateController = async (req, res) => {
  try {
    const { studentAnswer, question } = req.body;

    if (!studentAnswer || !question) {
      return res.status(400).json({ error: "Question and studentAnswer are required!" });
    }

    console.log("Controller calling Gemini service...");
    
    // Calling Service function 
    const evaluationResult = await evaluateAnswerService(question, studentAnswer);

    res.status(200).json({
      success: true,
      evaluation: evaluationResult,
    });

  } catch (error) {
    console.error("Error in evaluation controller:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};