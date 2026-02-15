from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from profiles import profiles

app = FastAPI()

# Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root route
@app.get("/")
def home():
    return {"message": "Profile API is running"}

# Get all profiles
@app.get("/profiles")
def get_profiles():
    return profiles

# Get profile by ID
@app.get("/profiles/{profile_id}")
def get_profile(profile_id: int):
    for profile in profiles:
        if profile["id"] == profile_id:
            return profile
    raise HTTPException(status_code=404, detail="Profile not found")
