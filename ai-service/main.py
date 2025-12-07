from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import librosa
import numpy as np
import soundfile as sf
import io
from typing import Optional
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="AI Service for German Language Platform")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SpeechAnalysisResponse(BaseModel):
    accuracy: float
    pronunciation: float
    rhythm: float
    feedback: str
    suggestions: list[str]

class WaveformComparisonResponse(BaseModel):
    similarity: float
    rhythmMatch: float
    pitchMatch: float
    feedback: str

@app.get("/health")
async def health():
    return {"status": "ok"}

@app.post("/analyze-speech", response_model=SpeechAnalysisResponse)
async def analyze_speech(audio: UploadFile = File(...)):
    """
    Analyze speech for pronunciation accuracy, rhythm, and provide feedback.
    """
    try:
        # Read audio file
        audio_bytes = await audio.read()
        audio_io = io.BytesIO(audio_bytes)
        
        # Load audio with librosa
        y, sr = librosa.load(audio_io, sr=16000)
        
        # Extract features
        mfccs = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=13)
        tempo, beats = librosa.beat.beat_track(y=y, sr=sr)
        pitch = librosa.yin(y, fmin=80, fmax=400)
        
        # Calculate metrics (simplified - in production, compare with reference)
        accuracy = min(100, max(0, 70 + np.random.normal(0, 10)))
        pronunciation = min(100, max(0, 75 + np.random.normal(0, 10)))
        rhythm = min(100, max(0, 80 + np.random.normal(0, 10)))
        
        feedback = "Dobro izgovoreno! Pokušaj da produžiš samoglasnike."
        suggestions = [
            "Produži samoglasnik u 'heiße'",
            "Naglasak je dobar",
        ]
        
        return SpeechAnalysisResponse(
            accuracy=accuracy,
            pronunciation=pronunciation,
            rhythm=rhythm,
            feedback=feedback,
            suggestions=suggestions
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error analyzing speech: {str(e)}")

@app.post("/compare-waveform", response_model=WaveformComparisonResponse)
async def compare_waveform(
    audio: UploadFile = File(...),
    reference_url: Optional[str] = None
):
    """
    Compare user's audio waveform with reference audio.
    """
    try:
        # Read user audio
        audio_bytes = await audio.read()
        audio_io = io.BytesIO(audio_bytes)
        y_user, sr_user = librosa.load(audio_io, sr=16000)
        
        # In production, load reference audio from URL
        # For now, generate mock comparison
        similarity = 0.75
        rhythmMatch = 0.80
        pitchMatch = 0.70
        
        feedback = "Ritam je dobar, ali pokušaj da uskladiš visinu tona."
        
        return WaveformComparisonResponse(
            similarity=similarity,
            rhythmMatch=rhythmMatch,
            pitchMatch=pitchMatch,
            feedback=feedback
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error comparing waveform: {str(e)}")

@app.post("/detect-face")
async def detect_face(image: UploadFile = File(...)):
    """
    Detect face and mouth position for articulation feedback.
    """
    try:
        # In production, use MediaPipe for face detection
        # For now, return mock detection
        return {
            "detected": True,
            "mouthPosition": {
                "x": 0.5,
                "y": 0.6,
                "width": 0.15,
                "height": 0.1
            },
            "lipShape": "rounded",
            "feedback": "Usta su u dobrom položaju za izgovor Ü"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error detecting face: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

