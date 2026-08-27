# Gemini API Integration - Day 5

Focus: **Multi-Turn Chat Sessions & Conversation Memory** using the Google Gen AI SDK (`@google/genai`).

## Features
- **Chat Initialization:** Configured continuous chat sessions using `ai.chats.create` with `gemini-3.6-flash`.
- **History Management:** Provided initial conversation context (`history` array with `user` and `model` roles) to maintain session state.
- **Follow-up Interactions:** Sent context-aware follow-up messages using `chat.sendMessage` where the model successfully recalls past details.
- **ADAES Application:** Demonstrates multi-turn context retention required for interactive student evaluation and feedback loops in our FYP.