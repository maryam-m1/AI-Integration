import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

// Start Server 
app.listen(PORT, () => {
  console.log(`Server is running live on http://localhost:${PORT}`);
});