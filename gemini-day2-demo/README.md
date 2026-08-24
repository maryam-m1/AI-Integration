# 🚀 14-Day AI Integration Roadmap for Developers

Welcome to my 14-day hands-on journey of integrating Google's Gemini AI into various software engineering projects.

---

## 📅 Day 2: Gemini API Integration with Node.js

Today's goal was to set up a secure Node.js environment, install the official Google GenAI SDK, and successfully call the Gemini model.

### 🛠️ Step-by-Step Implementation Guide

1. **Prerequisites Installation:**
   - Downloaded and installed **Node.js (LTS version)** from the official website.
   - Verified installation via terminal:
     ```bash
     node -v
     npm -v
     ```

2. **Project Initialization:**
   - Created a project directory and initialized npm with ES6 modules enabled:
     ```bash
     npm init -y
     ```
   - Added `"type": "module"` inside `package.json` to support ES module `import` syntax.

3. **Installed Dependencies:**
   - Installed the official Google GenAI SDK and environment manager:
     ```bash
     npm install @google/genai dotenv
     ```

4. **Environment Configuration (`.env`):**
   - Obtained an API key from [Google AI Studio](https://aistudio.google.com/).
   - Created a `.env` file in the root directory to keep the key secure:
     ```env
     GEMINI_API_KEY=your_actual_api_key_here
     ```
   - Created a `.gitignore` file to prevent sensitive files from being pushed to GitHub:
     ```text
     node_modules/
     .env
     ```

5. **Writing the Code (`index.js`):**
   - Implemented the client initialization using `gemini-3.6-flash` (handling the model version migration update):
     ```javascript
     import { GoogleGenAI } from "@google/genai";
     import dotenv from "dotenv";

     dotenv.config();
     const ai = new GoogleGenAI({});

     async function runDay2Task() {
       try {
         const response = await ai.models.generateContent({
           model: "gemini-3.6-flash",
           contents: "Hello Gemini! Give a professional encouragement message for a software engineering student.",
         });
         console.log(response.text);
       } catch (error) {
         console.error("Error:", error);
       }
     }

     runDay2Task();
     ```

6. **Execution:**
   - Ran the script successfully:
     ```bash
     node index.js
     ```

---
*Created by Maryam Faryad as part of  software engineering skill development.*