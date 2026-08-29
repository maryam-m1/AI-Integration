import express from "express";
import evaluationRoutes from "./routes/evaluation.route.js"; 
const app = express();

app.use(express.json());

// Mounting Routes (Prefix: /api)
app.use("/api", evaluationRoutes);

export default app;