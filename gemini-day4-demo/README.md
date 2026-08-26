# Gemini API Integration - Day 4

Focus: **Multimodal (Vision & Image Analysis)** using the Google Gen AI SDK (`@google/genai`).

## Features
- **Image-to-Text Processing:** Loaded local image files programmatically using Node.js `fs` module and converted them to inline buffers.
- **Visual Analysis:** Sent images alongside text prompts to `gemini-3.6-flash` to extract detailed descriptions, layouts, and contextual breakdowns.