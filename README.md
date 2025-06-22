# AI Ticket System 🎟️🤖
Full-stack AI-powered support ticket system with automatic ticket triage and assignment.

✨ Features
✅ AI-assisted ticket triage with Gemini API
✅ Automatic priority & skill detection
✅ Role-based user system (User, Moderator, Admin)
✅ Email notifications (via Mailtrap)
✅ Inngest for event-driven flows
✅ Beautiful UI with TailwindCSS + DaisyUI
✅ Secure JWT auth
✅ Built with:

Vite + React frontend

Node.js + Express + MongoDB backend

Inngest for background jobs

📦 Project Structure
```bash
Copy
Edit
FULL-STACK-AI-AGENT/
├── ai-ticket-assistant/   # Backend (Express, Inngest)
├── ai-ticket-frontend/    # Frontend (React, Vite, Tailwind)
├── .gitignore
└── README.md
```
🚀 How to Run Locally
1️⃣ Backend
```bash
cd ai-ticket-assistant
npm install
npm run dev
```
Inngest dev (optional):

```bash
npm run inngest-dev
Runs at: http://localhost:3000
```
2️⃣ Frontend
```bash
cd ai-ticket-frontend
npm install
npm run dev
```
Runs at: http://localhost:5173

3️⃣ .env files
Backend .env:

```env
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
MAILTRAP_SMTP_HOST=your_mailtrap_host
MAILTRAP_SMTP_PORT=your_mailtrap_port
MAILTRAP_SMTP_USER=your_mailtrap_user
MAILTRAP_SMTP_PASS=your_mailtrap_pass
GEMINI_API_KEY=your_gemini_api_key
APP_URL=http://localhost:3000
```
Frontend .env:

```env
VITE_SERVER_URL=http://localhost:3000/api
```
4️⃣ Roles
✅ Sign up as User → Admin can promote to Moderator or Admin
✅ /admin panel for role management

🛠️ Tech Stack
React 19

TailwindCSS + DaisyUI

Vite

Express 5

MongoDB + Mongoose

JWT Auth

Inngest 3.x

Nodemailer (Mailtrap)

Gemini API (Google AI)

🤝 Credits
Inspired by full-stack event-driven AI systems 🚀

Ready to deploy on:
✅ Vercel (frontend)
✅ Render / Railway / Fly.io (backend)
✅ MongoDB Atlas
✅ Inngest Cloud

