import express from "express";
import { evaluateBatchController } from "../controllers/evaluation.controller.js";

const router = express.Router();
router.post("/evaluate-batch", evaluateBatchController);
export default router;