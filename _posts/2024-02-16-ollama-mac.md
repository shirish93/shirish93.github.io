---
layout: post
title:  "Introduction to Large Language Models (LLMs) and Running Them Locally on Your Mac Using OLLAMA"
author: shirish
categories: [ ai, llm, tutorial]
featured: false
hidden: false
image: "assets/images/ollama.png"
---

This essay will provide an introduction to Large Language Models (LLMs) and explore the process of running them locally on a Mac using OLLAMA.

It essay was originally designed as a walk-through Lunch & Learn event at Liberty Mutual with my coworkers. I have orgnanised my thoughts and the steps involved in the process as this tutorial. Some steps may be missing, I'll add them to be more comprehensive.


1. What are LLMs and how do they work?

LLMs are a type of deep neural networks, a machine learning technique, capable of understanding and generating text, translating languages, writing different kinds of creative content, and answering your questions in an informative way. They are trained on massive datasets of text and code, allowing them to recognize patterns and generate similar outputs.

Here's a simplified breakdown of their operation:

**Training**: LLMs are trained on massive datasets of text and code. This process involves feeding the model with examples and adjusting its internal parameters to improve its ability to recognize patterns and generate similar outputs.
**Understanding**: When provided with a prompt or question, the LLM analyzes it based on the patterns learned during training.
**Generation**: Based on the analysis, the LLM generates a response that is relevant to the prompt or question. This response can be text, code, or even a creative format like poems or scripts.

2. Why Run LLMs Locally?

There are several advantages to running LLMs locally:

**Cost**: Running LLMs locally can be cheaper than using cloud-based services, especially for frequent use cases.
**Data privacy**: By running the LLM locally, you maintain control over your data and avoid potential privacy concerns associated with cloud storage.
**Latency**: Local execution can be significantly faster than using cloud-based services, especially if you have a powerful machine.
**Offline usage**: Local LLMs can be used even without an internet connection.

However, there are also drawbacks to consider:

**Hardware requirements**: Running larger LLMs locally requires powerful hardware, particularly a strong GPU, which can be expensive.
**Maintenance**: Maintaining and updating the LLM and its hardware can be time-consuming and require technical expertise.
**Limited scalability**: Local LLMs typically have lower processing power and memory compared to cloud-based options, limiting their ability to handle very large tasks.

3. Setting Up Your Mac for Local LLMs (Disclaimer & Requirements)

Disclaimer: This guide is intended for informational purposes only and should not be taken as professional advice. Please be aware that running local LLMs may require technical knowledge and involve potential risks.

Minimum System Requirements:

    Mac M1 Pro or higher with at least 16GB of RAM. Newer M-series models can run LLMs on Macbook Air models.

4. Local LLM Deployment Options:

There are various tools available for running LLMs locally. Two notable options are:

**Llama.cpp**: This is a C/C++ library designed for efficient LLM inference on various hardware platforms, including locally and in the cloud. It prioritizes minimal setup and state-of-the-art performance.
**Ollama**: This is a user-friendly tool built on top of Llama.cpp, offering a streamlined interface for running open-source LLMs locally. It simplifies setup and management through features like:
* Bundled model weights, configurations, and datasets.
* Support for various LLMs like Llama-2 and uncensored Llama.
* Modelfile management for system prompts and other parameters.

5. Running Prompts with Ollama:
Here's a detailed tutorial on running prompts with Ollama:

Installation:

    Download the Ollama application from the official website: https://ollama.com/
    Double-click the downloaded file and follow the on-screen instructions to install Ollama.

Running a Model:

    Open the Ollama application.
    In the terminal window within Ollama, use the command ollama run <model_name>, replacing <model_name> with the desired model (e.g., ollama run llama2). This will download and run the selected model.

Customizing Prompts:

    Ollama allows you to customize prompts using Modelfiles. These files define various parameters for the model, including system prompts and temperature.
    Create a text file named Modelfile in your desired location.
    Add the following line to the Modelfile, replacing <model_name> with the desired model:

FROM <model_name>

    Optionally, add additional lines to the Modelfile to customize parameters. Here are some examples:
        Temperature: Controls the creativity vs. coherence of the response. Higher values lead to

more creative but potentially less coherent outputs. You can adjust the temperature using the following syntax:

```
PARAMETER temperature 1.0
```

Replace `1.0` with your desired temperature value (typically between 0.0 and 1.0).

* **Top_k:** Controls the number of possible completions considered during generation. Higher values can lead to more diverse but potentially less relevant outputs. You can adjust the top_k value using the following syntax:

```
PARAMETER top_k 10
```

Replace `10` with your desired top_k value.

    Save the Modelfile.

Interaction:

    Once the model is running and you have your Modelfile (if desired), you can interact with the LLM by providing prompts through the terminal window within Ollama.
    Type your prompt and press Enter. The LLM will analyze the prompt and generate a response based on its training data and the settings in your Modelfile (if applicable).

6. Beyond Prompts: LLAMA UI and Other Tools:

    Ollama UI: This is a browser-based user interface built on top of Ollama, allowing for a chat-like interaction with the LLM.
    Ollama APIs: Ollama offers openAI-compatible APIs for programmatic interaction with the LLM from various programming languages like Python and JavaScript.

7. Processing Images with LLAMA (VLMs) and Google's GEMMA:

    VLMs (Visual Language Models): Ollama supports processing images with specific VLMs like LLaVA

Beyond the Basics: Exploring Advanced Features and Future Prospects

This section delves into the broader capabilities of Ollama and explores the potential of local LLMs in the future.

8. Programmatic Access with Ollama's API:

Ollama offers APIs that allow programmatic interaction with the LLM, enabling integration with various applications and workflows. Here's a breakdown of the key features:

Chat API: This API facilitates communication with the LLM in a conversational manner, similar to a chat interface. You can send prompts and receive responses programmatically.
Regular API: This API offers more flexibility for advanced tasks beyond simple conversations. It allows you to define specific parameters like the model, prompt, and desired output format.

Here are some examples of programmatic interaction with Ollama:

Python: You can use the ollama library to send prompts and retrieve responses through Python code.
JavaScript: The ollama library for JavaScript allows similar functionalities within web applications.

9. Exploring Further: OpenAI, Microsoft, and Beyond:

Ollama demonstrates the potential for running open-source LLMs locally. However, the landscape is constantly evolving, with other advancements worth mentioning:

**OpenAI Compatibility**: Ollama offers built-in compatibility with the OpenAI Chat Completions API. This allows you to utilize various tools and applications designed for OpenAI's models with Ollama locally.
**Microsoft**: While currently not directly integrated with Ollama, Microsoft also offers its own LLM called Bing Chat. Exploring potential future compatibility or utilizing separate tools for Microsoft's models could be interesting avenues.

10. Future Prospects of Local LLMs:

The future of local LLMs holds exciting possibilities, pushing the boundaries of what these models can achieve. Here are some potential areas of exploration:

**Function Calling**: Researchers are working on enabling LLMs to understand and execute specific functions on your computer based on your instruction. This could revolutionize how you interact with your system and automate tasks.
**Embeddings**: LLMs could potentially return the vector representation of words, phrases, or documents within them. This opens up possibilities for advanced applications like information retrieval and text classification.
**Live Inference**: This concept involves the LLM processing real-time sensor data from your microphone or camera and providing immediate responses. This could lead to novel applications in areas like virtual assistants and real-time language translation.


__Ollama illustration from their website.__