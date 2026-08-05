![High level architecture](https://res.cloudinary.com/dc7jigmeo/image/upload/v1785940166/Esperanza_mlz2fx.png)

# What is Esperanza?

**Esperanza** is a free web application where users can create a profile and upload their resume. Once uploaded, the resume is evaluated against a job description. The AI agent (**Esperanza**) suggests where and what to improve based on the provided job description and provides the current ATS score along with the expected ATS score after the suggested improvements.

# Why is it needed?

This application solves a problem for new graduates and anyone else who applies for jobs but does not receive any responses or faces constant rejections. Since most companies now use Applicant Tracking Systems (ATS) to evaluate resumes and determine how well a candidate aligns with a role, **Esperanza** helps guide users in making their resumes as closely aligned as possible with the job description and the company's requirements. Unlike alternative platforms that require subscriptions, **Esperanza** provides these features completely free of charge.

# Tech Stack

**Language:** TypeScript, Python

**Frontend:** Next.js

**Backend:** Express, FastAPI

**Database:** PostgreSQL

**Blob Storage:** Supabase Bucket

**Authentication and Encryption:** JWT, Bcrypt

**State Management:** Zustand

**Orchestration:** LangGraph

**LLM:** Gemini 2.0 Flash

**Embeddings:** Gemini Text 001