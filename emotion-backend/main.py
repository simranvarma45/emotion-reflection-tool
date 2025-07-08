
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()


# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data structure from frontend
class Reflection(BaseModel):
    text: str

@app.post("/analyze")
async def analyze_emotion(reflection: Reflection):
    # Mock response
    return {
        "emotion": "Anxious",
        "confidence": 0.85
    }
