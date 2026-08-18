from dotenv import load_dotenv
load_dotenv()

from langchain_google_genai import GoogleGenerativeAIEmbeddings

embeddingModel = GoogleGenerativeAIEmbeddings(
    model="models/gemini-embedding-001"
)