# Peer Notes Platform

An AI-powered peer-to-peer notes platform that transforms scattered, unstructured student notes into a structured, high-quality academic knowledge base. The platform uses intelligent agents to analyze, classify, score, and summarize uploaded notes, making study material easier to discover, trust, and improve collaboratively.

---

## Problem Statement

Students rely heavily on peer-generated notes, but these notes are often:
- Disorganized and difficult to search
- Varying widely in quality and accuracy
- Time-consuming to evaluate before exams

There is no reliable system to automatically organize notes, assess their quality, or help students quickly access the best study material.

---

## Solution Overview

Peer Notes Platform introduces an AI-driven workflow where students can upload notes and instantly receive:
- Topic classification
- Quality scoring
- Concise summaries
- Improvement suggestions

This converts raw peer notes into a structured, searchable, and continuously improving academic resource.

---

## Key Features

- Upload notes in PDF or text format
- Automatic topic detection using NLP
- AI-based quality scoring (clarity, coverage, structure)
- Smart summaries for quick revision
- Suggested improvements (missing topics, diagrams, examples)
- Centralized repository of peer-reviewed notes

---

## Example Workflow

1. Student uploads notes (PDF/Text)
2. AI agents extract and analyze content
3. Notes are classified by subject and topic
4. Quality score is generated
5. Summary and suggestions are produced
6. Notes are stored for future discovery and collaboration

---

## Example Input

Uploaded File: Data Structures Notes (PDF)  
Pages: 25  
Content Topics: Linked Lists, Trees, Graphs  

---

## Example Output

Topic: Data Structures – Linked Lists  
Quality Score: 8.6 / 10  
Summary: Clear explanation of linked lists with examples  
Suggested Improvements:
- Add time and space complexity
- Include diagrams for traversal

---

## Technology Stack

Frontend:
- React
- HTML, CSS, JavaScript

Backend:
- FastAPI (Python)

AI / ML:
- Large Language Models (LLMs)
- NLP-based text analysis

Database:
- PostgreSQL

Vector Database:
- FAISS (for semantic search and retrieval)

---

## Scope of Proof of Concept (PoC)

Included:
- Upload and analysis of PDF/Text notes
- AI-based classification, scoring, and summarization
- Backend APIs for processing notes

Excluded:
- Large-scale deployment
- Advanced authentication and authorization
- Mobile application

---

## Expected Outcomes

- Faster access to high-quality study notes
- Reduced exam preparation stress
- Improved collaboration among students
- Better learning outcomes through structured content

---

## Project Vision

The Peer Notes Platform demonstrates how agentic AI can improve educational collaboration by turning unverified, scattered notes into a trusted academic knowledge base. The long-term vision is to create a self-improving ecosystem where student knowledge is continuously refined, validated, and shared.

---

## How to Run (Basic)

1. Clone the repository
2. Install backend dependencies
3. Start the FastAPI server
4. Run the React frontend
5. Upload notes and view AI-generated insights

---

## License

This project is intended for educational and hackathon use.
