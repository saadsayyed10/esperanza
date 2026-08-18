from dotenv import load_dotenv
load_dotenv()

from langchain_openai import OpenAIEmbeddings

embeddingModel = OpenAIEmbeddings(
    model="gemini-embedding-001",
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
)