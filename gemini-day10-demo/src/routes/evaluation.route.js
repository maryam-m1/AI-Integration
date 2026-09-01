import express from "express";
import multer from "multer";
import { evaluateImageController } from "../controllers/evaluation.controller.js";

const router = express.Router();

// Configure multer for memory storage
const upload = multer({ storage: multer.memoryStorage() });

// 'image' field name hoga Postman ya form mein
router.post("/evaluate-image", upload.single("image"), evaluateImageController);

export default router;