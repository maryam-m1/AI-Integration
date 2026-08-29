# Gemini API Integration - Day 7

Focus: **Professional MVC / Service Architecture (Separation of Concerns)** using Express.js and the Google Gen AI SDK (`@google/genai`).

## Project Structure & Architecture
In this milestone, the project structure was refactored from a single-file script into an industry-standard modular pattern:
- **`server.js` (Root):** Responsible solely for booting up the application and listening on the designated port.
- **`src/app.js`:** Configures the Express application, global middlewares (like `express.json()`), and mounts route prefixes.
- **`src/routes/`:** Defines the API endpoints (e.g., `evaluation.route.js`) and maps them to their respective controllers.
- **`src/controllers/`:** Handles incoming HTTP requests, input validation, and sends back HTTP responses (`evaluation.controller.js`).
- **`src/services/`:** Contains pure business logic and API communication with the Gemini model (`gemini.service.js`).

## Features
- **Modular MVC Design:** Clear decoupling of server startup, routing, control logic, and third-party AI services.
- **RESTful API Endpoint:** `POST /api/evaluate` which accepts student answers and questions.
- **AI-Powered Evaluation:** Leverages `gemini-3.6-flash` to process evaluations and return structured feedback with scores and remarks.

## How to Run
1. Install dependencies:
   ```bash
   npm install