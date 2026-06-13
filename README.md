# AI Chatbot using Express + TypeScript + Gemini + Docker

# use the repo

clone the repo 

# Environment Variables

Create a `.env` file in the root folder:

```env
API=your_gemini_api_key
```

Get Gemini API key from:

https://aistudio.google.com/app/apikey

---

# Run Without Docker

## Install Dependencies

```bash
npm install
```

## Start Server

```bash
npm start
```

Server runs on:

```txt
http://localhost:3000
```

---

# Run Using Docker

## Build Docker Image

```bash
docker build -t chatbot .
```

## Run Docker Container

```bash
docker run -p 3000:3000 --env-file .env chatbot
```

Server runs on:

```txt
http://localhost:3000
```

---

# Test API

## Endpoint

```http
POST /chat
```

## Example Request

```json
{
  "message": "Hello"
}
```

## Example Response

```json
{
  "response": "Hello! How can I help you?"
}
```

---

# Tech Stack

* Node.js
* Express.js
* TypeScript
* Gemini API
* Docker
