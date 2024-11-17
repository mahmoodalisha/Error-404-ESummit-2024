# Error-404-ESummit-2024
# ConstituteAI GPT: Simplified Access to Legal Information

Overview
ConstituteAI GPT is an AI-powered chatbot designed to provide accurate, simplified, and context-specific legal information from the Indian Constitution, related amendments, and case law. It is tailored for diverse user groups, including citizens, legal professionals, and law enforcement officers, offering intuitive and real-time access to legal knowledge.

Features
1. Constitutional Data Retrieval
Efficient querying of articles, amendments, and case laws.
Simplified explanations of complex legal texts.
2. Custom Responses
Personalized responses using advanced AI models like Google Generative AI (Gemini).
Context-aware explanations tailored to user needs.
3. Advanced Search Engine
HuggingFace models for embedding legal texts into vectors.
FAISS for fast and scalable vector storage and retrieval.
4. Natural Language Processing
Understands user intent and context for better query handling.
Simplifies legal concepts for non-legal audiences.
5. Multifaceted Use Cases
Supports citizens in understanding their rights.
Assists law enforcement with quick legal references.
Enables in-depth research for legal professionals.
Tech Stack
Technology	Purpose
LangChain	Manages prompt handling and interaction flows.
Google Generative AI	Generates context-aware and simplified responses.
HuggingFace	Embeds constitutional text into vectors.
FAISS	Enables efficient vector storage and retrieval.
pypdf	Extracts content from legal PDF documents.
re	Performs text pattern matching during preprocessing.
FastAPI	Serves machine learning models through APIs.
React.js	Provides a user-friendly and dynamic frontend.
MongoDB	Stores user interactions and feedback data.
Repository Structure
main branch: Contains the frontend code built with the MERN stack.
ml-model branch: Contains the machine learning model code, including AI-powered search and NLP functionalities.
Installation
Prerequisites
Python 3.8+
Node.js 16+
MongoDB
Virtual environment tool (optional but recommended)
Backend Setup (ml-model branch)

Clone the repository:
git clone https://github.com/mahmoodalisha/Error-404-ESummit-2024.git

Switch to the ml-model branch:
git checkout ml-model

Create and activate a virtual environment:
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

Install dependencies:
pip install -r requirements.txt
Run the FastAPI server:
uvicorn main:app --reload

Frontend Setup (main branch)

Switch to the main branch:
git checkout main
cd frontend2

Install dependencies:
npm install
Start the development server:
npm start

How It Works
Data Collection
Extracts legal text from PDFs and organizes it into structured formats.
Embedding and Storage
Converts text into vector embeddings using HuggingFace models.
Stores embeddings in FAISS for fast querying.
User Interaction
Handles user queries via the React.js frontend app.
Queries the FastAPI backend for relevant legal information.
Response Generation
Retrieves relevant legal articles and explanations.
Simplifies responses using Google Generative AI.

API Endpoints
POST /ask 
Accepts user queries and returns insights.

Usage Scenarios

Citizens:
Ask about rights and legal remedies.

Lawyers:
Query specific constitutional clauses and case laws.
Law Enforcement:

Quickly reference legal provisions during operations.
Contributing
Fork the repository.

Create a new branch:
git checkout -b feature-name
Commit your changes:

git commit -m "Description of changes"
Push to the branch:

git push origin feature-name
Open a pull request.
Feedback and Support
For issues or feature requests, open a GitHub issue in the repository or contact us at mahmoodalisha35@gmail.com

License
This project is licensed under the MIT License.

ConstituteAI GPT – Empowering Legal Awareness with AI.