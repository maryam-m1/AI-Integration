import { evaluateImageService } from "../services/gemini.service.js";
import { Evaluation } from "../models/evaluation.model.js";

export const evaluateImageController = async (req, res) => {
  try {
    const { question } = req.body;
    const imageFile = req.file;

    if (!question || !imageFile) {
      return res.status(400).json({ error: "Both 'question' and an image file are required!" });
    }

    // 1. Get structured result from Gemini AI service
    const aiResult = await evaluateImageService(question, imageFile.buffer, imageFile.mimetype);

    // 2. Save the evaluation result to MongoDB
    const newEvaluation = new Evaluation({
      question,
      score: aiResult.score,
      examinerRemarks: aiResult.examinerRemarks,
      areasForImprovement: aiResult.areasForImprovement,
      evaluationType: "image"
    });

    const savedEvaluation = await newEvaluation.save();

    // 3. Send response back to client
    res.status(200).json({
      success: true,
      message: "Evaluation saved successfully to database!",
      data: savedEvaluation,
    });

  } catch (error) {
    console.error("Error in evaluation controller:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};

// Naya controller function: Saari history dekhne ke liye
export const getEvaluationHistory = async (req, res) => {
  try {
    const history = await Evaluation.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: history.length, data: history });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch history" });
  }
};