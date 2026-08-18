from dotenv import load_dotenv

load_dotenv()

from langchain_openai import ChatOpenAI

llmModel = ChatOpenAI(
    model="gemini-2.5-flash-lite",
    temperature=0.7,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)