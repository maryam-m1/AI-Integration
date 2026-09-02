import mongoose from "mongoose";

const evaluationSchema = new mongoose.Schema({
  question: { type: String, required: true },
  score: { type: Number, required: true },
  examinerRemarks: { type: String, required: true },
  areasForImprovement: { type: String, required: true },
  evaluationType: { type: String, enum: ["text", "image"], default: "text" },
  createdAt: { type: Date, default: Date.now }
});

export const Evaluation = mongoose.model("Evaluation", evaluationSchema);