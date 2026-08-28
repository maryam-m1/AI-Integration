# Gemini API Integration - Day 6

Focus: **Express.js Backend Integration with Modular Architecture (`server.js` + `app.js`)** using the Google Gen AI SDK (`@google/genai`).

## Features
- **Modular Server Structure:** Separated server startup (`server.js`) from application logic and routing (`app.js`).
- **RESTful API Endpoint:** Created a `POST /api/evaluate` endpoint to accept student answers and questions dynamically.
- **AI-Powered Evaluation:** Processed inputs through `gemini-3.6-flash` to return structured scores and examiner remarks in JSON format.
- **ADAES Core Backend:** Implements the fundamental backend architecture required for automated exam and assignment evaluation.