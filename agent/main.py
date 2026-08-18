from fastapi import FastAPI
from langchain_core.prompts import ChatPromptTemplate

from models.llm import llmModel 
from templates.resume_template import template
from interfaces.resume_type import ReadResumeType
from vector import createRetriever

app = FastAPI()

prompt = ChatPromptTemplate.from_template(template)
chain = prompt | llmModel

@app.get("/api/health")
async def checkHealth():
    return {"status": 200}

@app.get("/api/health/model")
async def checkModelHealth():
    response = llmModel.invoke("Hello, your API is healthy and working well? Reply in one sentence only.")
    return {"status": response.content}

@app.post("/api/resume")
async def readResume(data: ReadResumeType):
    retriever = createRetriever(data.pdfPath)

    docs = retriever.invoke(data.jobDescription)

    resumeChunks = "\n\n".join([doc.page_content for doc in docs])

    result = chain.invoke({
        "resume_chunks": resumeChunks,
        "job_description": data.jobDescription
    })

    return {
        "response": result.content
    }