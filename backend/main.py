from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from transformers import pipeline

app = FastAPI()

# Configuración CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # para probar, permite cualquier origen
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

classifier = pipeline("sentiment-analysis")

@app.get("/")
def root():
    return {"status": "Mini IA online"}

@app.post("/analizar")
def analizar_texto(data: dict):
    texto = data.get("texto", "")
    resultado = classifier(texto)
    return {"resultado": resultado}
