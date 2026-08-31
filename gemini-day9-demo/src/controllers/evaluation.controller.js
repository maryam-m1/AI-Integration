import { evaluateBatchService } from "../services/gemini.service.js";

export const evaluateBatchController = async (req, res) => {
  try {
    const { answersList } = req.body;

    if (!answersList || !Array.isArray(answersList) || answersList.length === 0) {
      return res.status(400).json({ error: "A valid 'answersList' array is required!" });
    }

    const batchResults = await evaluateBatchService(answersList);

    res.status(200).json({
      success: true,
      results: batchResults,
    });

  } catch (error) {
    console.error("Error in batch evaluation controller:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};