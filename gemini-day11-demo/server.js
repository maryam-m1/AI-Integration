import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3000;

// Connect DB first, then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`ADAES Day 11 Server running on http://localhost:${PORT}`);
  });
});