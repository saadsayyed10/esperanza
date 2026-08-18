from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma

from models.embedding import embeddingModel

def createRetriever(pdfPath: str):
    # Load document
    loader = PyPDFLoader(pdfPath)
    documents = loader.load()

    # Set dir location
    dbLocation = "./chroma_db"

    # Configure chunking of pdf document
    textSplitter = RecursiveCharacterTextSplitter(
        chunk_size=800,
        chunk_overlap=100
    )

    chunks = textSplitter.split_documents(documents)

    # Vector database to store vector
    vectorStore = Chroma(
        collection_name="resume_chunks",
        embedding_function=embeddingModel,
        persist_directory=dbLocation
    )

    vectorStore.add_documents(chunks)

    retriever = vectorStore.as_retriever(
        search_kwargs={"k": 5}
    )

    return retriever