import express from "express";
import multer from "multer";
import { evaluateImageController, getEvaluationHistory } from "../controllers/evaluation.controller.js";

const router = express.Router();

// Multer memory storage configuration
const upload = multer({ storage: multer.memoryStorage() });

// POST route for image evaluation & saving to DB
router.post("/evaluate-image", upload.single("image"), evaluateImageController);

// GET route to fetch all past evaluations history from DB
router.get("/history", getEvaluationHistory);

export default router;