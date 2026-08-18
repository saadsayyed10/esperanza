from fastapi import FastAPI
from models.llm import llmModel 

app = FastAPI()

@app.get("/api/health")
async def checkHealth():
    return {"status": 200}

@app.get("/api/health/model")
async def checkModelHealth():
    response = llmModel.invoke("Hello, your API is healthy and working well? Reply in one sentence only.")
    return {"status": response.content}
