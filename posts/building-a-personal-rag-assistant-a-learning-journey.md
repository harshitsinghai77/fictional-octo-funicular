---
title: "Building a Personal RAG Assistant: A Learning Journey"
excerpt: "Building a custom document question-answering system. Learn how I leveraged LLMs, Langchain, and FastAPI to create a powerful tool that can answer questions based on your documents."
coverImage: "https://images.unsplash.com/photo-1503455637927-730bce8583c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
date: "2024-06-30T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

I’ve been fascinated by the advancements in LLM and GenAI over the last year. The idea of building a system that can understand and respond to human language in a meaningful way has been a long-standing goal to better understand the inner workings of LLM.

### The Challenge: Building a Document-Based Question Answering System

My goal was to create a Retrieval-Augmented Generation (RAG) system that could answer questions based on a collection of documents. A web app interface capable of providing summaries, extracting key information, or even generating creative text formats based on my document library.

### Technical Stack and Challenges

1. FastAPI: For building REST API to interact with the LLM backend.
2. Langchain: A powerful framework for developing LLM applications, providing essential components for document loading, splitting, and vectorization.
3. FAISS: A library for efficient similarity search, crucial for retrieving relevant documents based on user queries.
4. Llama3 (or a similar open-source LLM): The core language model for generating text.

### While building this system, I encountered several challenges:

1. Document Preprocessing: Effectively splitting documents into manageable chunks while preserving context was a complex task.
2. Vector Embedding Quality: The choice of embedding model significantly impacted the accuracy of document retrieval.
3. LLM Limitations: Fine-tuning the LLM to generate accurate and relevant answers required careful prompt engineering and experimentation.
4. Expanding Document Formats: Incorporating support for various document types beyond PDF, TXT, and CSV.
5. System Performance: Balancing the trade-off between response time and model complexity was essential.
6. User Interface Development: Creating a user-friendly interface to simplify interaction with the system.

This project is still very much a work in progress. I'm actively exploring the best approaches to scaling this system and ensuring optimal performance. The journey to building a robust and efficient RAG platform is ongoing, and I'm excited to share updates and lessons learned along the way.

### Github

[https://github.com/harshitsinghai77/doc-talk](https://github.com/harshitsinghai77/doc-talk/tree/master)

## Conclusion

That's it for this post.
