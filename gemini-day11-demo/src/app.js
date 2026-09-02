import express from "express";
import evaluationRoutes from "./routes/evaluation.route.js";

const app = express();

// Middleware
app.use(express.json());

// Routes mount karein
app.use("/api", evaluationRoutes);

export default app;