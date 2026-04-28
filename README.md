## ⚙️ FairAI+ Backend

> **Detect bias. Ensure fairness. Enable explainable AI.**  
> 🚀 Built for Hackathon: Focused on fairness, transparency, and responsible AI.

FairAI+ Backend is a Node.js-based API that analyzes datasets to detect bias in decision-making systems (like hiring), calculates fairness metrics, and generates AI-powered explanations and suggestions using the Gemini API.

---

## ✨ Features

- 📤 CSV Upload API (via Multer)  
- 📊 Dataset Parsing (Gender, Selected columns)  
- ⚖️ Fairness Score Calculation (0–100 scale)  
- 🚨 Bias Detection  
  - ✅ Fair  
  - ⚠️ Moderate Bias  
  - ❌ High Bias  
- 📈 Selection Rate Analysis (Male vs Female)  
- 🤖 AI-Powered Insights (Gemini API)  
  - Bias Explanation  
  - Improvement Suggestions  
- 🌐 REST API Endpoints  
- 🔒 CORS Enabled for frontend integration  

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|--------|
| Node.js | Runtime environment |
| Express.js | Backend framework |
| Multer | File upload handling |
| csv-parser | CSV parsing |
| CORS | Cross-origin requests |
| Gemini API | AI explanations & suggestions |

---

## 🔗 API Endpoints

### 📊 Analyze Dataset
**POST** `/FairAI/analyze`

**Request:**  
- FormData (CSV file) OR JSON (demo data)

**Response:**
```json
{
  "maleRate": 0.8,
  "femaleRate": 0.4,
  "fairnessScore": 50,
  "biasLevel": "High Bias"
}
````

---

### 🤖 AI Explanation

**POST** `/FairAI/ai/explain`

**Request:**

```json
{
  "maleRate": 0.8,
  "femaleRate": 0.4
}
```

**Response:**

```json
{
  "explanation": "The hiring process favors male candidates significantly..."
}
```

---

### 💡 AI Suggestions

**POST** `/FairAI/ai/suggest`

**Request:**

```json
{
  "biasLevel": "High Bias"
}
```

**Response:**

```json
{
  "suggestions": [
    "Balance dataset representation",
    "Remove sensitive attributes",
    "Use fairness-aware algorithms"
  ]
}
```

---

## 📁 Project Structure

```
backend/
├── src/
│   ├── routes/
│   │   └── fairaiRoutes.js
│   ├── controllers/
│   │   └── fairaiController.js
│   ├── utils/
│   │   └── fairness.js
│   ├── services/
│   │   └── geminiService.js
│   └── server.js
├── package.json
└── README.md
```

---

## ⚡ Installation & Setup

### Prerequisites

* Node.js v16+
* npm

### Steps

```bash
git clone https://github.com/yourusername/fair-ai-backend.git
cd fair-ai-backend
npm install
```

### Run Server

```bash
node src/server.js
```

Server runs on:
👉 [http://localhost:5000](http://localhost:5000)

---

## 🔗 Environment Variables

Create a `.env` file:

```env
PORT=5000
GEMINI_API_KEY=your_gemini_api_key
FRONTEND_URL=http://localhost:5173
```

---

## 🔄 How It Works

1. User uploads CSV or sends data
2. Server parses dataset
3. Calculates:

   * Male selection rate
   * Female selection rate
4. Computes fairness score
5. Detects bias level
6. Calls Gemini API:

   * Generate explanation
   * Suggest improvements
7. Sends response to frontend

---

## 🚀 Deployment (Render)

* Hosted on **Render**
* Backend URL:
  👉 [https://fair-ai-backend.onrender.com](https://fair-ai-backend.onrender.com)

> ⚠️ Note: On free tier, first request may take **10–20 seconds** (cold start).

---

## ⚠️ Error Handling & Notes

* ❌ Invalid CSV → returns error message
* ❌ Missing columns → validation error
* ❌ Server error → 500 response
* 🔒 CORS enabled for frontend communication
* 📁 Only CSV format supported

---

## 🔮 Future Improvements

* 🔄 Real-time bias monitoring (streaming data)
* 📈 Bias trend analysis over time
* 🧪 Bias mitigation techniques (auto-fix)
* 🧠 Multi-attribute bias detection (age, caste, etc.)
* 🔐 Authentication & user dashboards
* 📊 Advanced analytics APIs
* 📦 Support for large datasets

---

## 📄 License

MIT License

---

<div align="center">

### 💡 Built for Fair AI

⭐ If you found this useful, consider giving it a star!

</div>


