import express from "express";
import { evaluateStructuredController } from "../controllers/evaluation.controller.js";

const router = express.Router();
router.post("/evaluate-structured", evaluateStructuredController);
export default router;