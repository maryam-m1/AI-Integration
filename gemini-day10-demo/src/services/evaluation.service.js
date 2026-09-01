import { evaluateImageService } from "../services/gemini.service.js";

export const evaluateImageController = async (req, res) => {
  try {
    const { question } = req.body;
    const imageFile = req.file; // Multer file object

    if (!question || !imageFile) {
      return res.status(400).json({ error: "Both 'question' and an image file ('image') are required!" });
    }

    // Service call with image buffer and mimetype
    const result = await evaluateImageService(question, imageFile.buffer, imageFile.mimetype);

    res.status(200).json({
      success: true,
      data: result,
    });

  } catch (error) {
    console.error("Error in multimodal evaluation controller:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};