from pydantic import BaseModel

class ReadResumeType(BaseModel):
    pdfPath: str
    jobDescription: str