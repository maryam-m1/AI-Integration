# Gemini API Integration - Day 9

Focus: **Batch Processing & Array Structured Outputs** using Express.js and the Google Gen AI SDK (`@google/genai`).

## Project Structure & Architecture
In this milestone, the system expands on the structured outputs from Day 8 to handle batch evaluations of multiple student answers within a single API request:
- **`server.js` (Root):** Application entry point and server startup.
- **`src/app.js`:** Express application setup and global middleware mounting.
- **`src/routes/`:** Defines API routes (`evaluation.route.js`).
- **`src/controllers/`:** Manages incoming batch payloads, performs array validation, and constructs HTTP responses (`evaluation.controller.js`).
- **`src/services/`:** Communicates with Gemini API using `Type.ARRAY` schemas to evaluate multiple answers concurrently (`services/gemini.service.js`).

## Key Features
- **Batch Evaluation Support:** Accepts an array of question-answer pairs and processes them in a single AI model invocation.
- **Array Schema Enforcement:** Uses `@google/genai`'s `Type.ARRAY` and `Type.OBJECT` to guarantee an array of uniform JSON results.
- **Scalable Architecture:** Prepares the ADAES backend for handling entire exams, quizzes, or multiple submission evaluations efficiently.
- **RESTful Endpoint:** `POST /api/evaluate-batch` which returns an array of structured evaluations containing scores and examiner remarks.

## How to Run
1. Install dependencies:
   ```bash
   npm install