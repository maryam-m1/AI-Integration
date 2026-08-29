import express from "express";
import { evaluateController } from "../controllers/evaluation.controller.js";

const router = express.Router();

// when request with POST method is received at /evaluate, evaluateController will be called
router.post("/evaluate", evaluateController);

export default router;