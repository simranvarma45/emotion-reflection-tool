# Emotion Reflection Tool

A simple, mobile-first web application that allows users to write a short reflection and receive a mock emotional analysis. The frontend is built with React and TypeScript, while the backend is powered by Python using FastAPI.

---

## Features

- Mobile-friendly and responsive layout
- Clean UI styled with Tailwind CSS
- Textarea input for reflections
- Submit button with loading state
- Emotion result displayed in a styled card
- Clears previous result automatically when user starts typing a new one


## Tech Stack

- Frontend : React (Vite) + TypeScript
- Styling: Tailwind CSS
- Backend: Python + FastAPI
- API Communication: REST (POST request)


## Setup Instructions


### Frontend Setup (React + Tailwind)

1. Open terminal and navigate to the frontend folder:

```bash
cd emotion-frontend

Install Dependencies - npm install

Start the development server - npm run dev

-----> The frontend will run at: http://localhost:5173

## Backend Setup

Create and activate a virtual environment:

bash : 
python -m venv venv

# On Windows:
venv\Scripts\activate

# On macOS/Linux:
source venv/bin/activate

Install dependencies :  pip install fastapi uvicorn

Run the FastAPI server :  uvicorn main:app --reload

-----> The backend will run at: http://localhost:8000

API Reference
POST /analyze
Request Body

{
  "text": "I feel nervous about my first job interview"
}

Sample Response:

{
  "emotion": "Anxious",
  "confidence": 0.85
}