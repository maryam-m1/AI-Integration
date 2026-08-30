# Gemini API Integration - Day 8

Focus: **Structured JSON Outputs & Schema Enforcement** using Express.js and the Google Gen AI SDK (`@google/genai`).

## Project Structure & Architecture
Continuing with the professional MVC architecture from Day 7, this milestone enforces strict output schemas so the AI model returns predictable, parseable JSON instead of plain text:
- **`server.js` (Root):** Application entry point and server listener.
- **`src/app.js`:** Express middleware configuration and API route mounting.
- **`src/routes/`:** Defines API routes (`evaluation.route.js`).
- **`src/controllers/`:** Handles HTTP request-response lifecycle and invokes business logic (`evaluation.controller.js`).
- **`src/services/`:** Manages Gemini API integration with `responseMimeType` and `responseSchema` configurations (`gemini.service.js`).

## Key Features
- **Structured AI Generation:** Uses `@google/genai`'s `Type` and `responseSchema` objects to force Gemini (`gemini-3.6-flash`) to return rigid JSON data.
- **Data Integrity:** Guarantees specific output fields (`score`, `examinerRemarks`, `areasForImprovement`) required for automated grading systems.
- **RESTful Endpoint:** `POST /api/evaluate-structured` which returns clean JSON objects ready for database storage or frontend rendering.

## How to Run
1. Install dependencies:
   ```bash
   npm install