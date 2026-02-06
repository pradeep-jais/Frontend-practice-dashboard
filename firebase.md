# Learn Firebase

Firebase is a software that gives us tools to integrate ready to use backend services in our frontend application.

## Backend As A Service(BaaS)

Any application has two parts:

1. A Server/Backend which powers the application.
2. Client/Frontend that displays the application to users to interact with it.

BaaS is a term used for software that provides backend facilities as services for frontend developer without writing the code for backend/Server.

There are various paid or open source BaaS out there such as Firebase by google, Supabase etc.

### Need

As a frontend dev, if you want:

- login/signup
- database
- file upload
- hosting

You usually need:

- Backend language (Node / Java / Python)
- Server
- Database setup
- Auth logic
- Security
- Deployment

That’s a LOT.

### BaaS thinking

**BaaS = Backend already built for you**

Firebase gives you:

- Ready-made backend services
- You just **call them from frontend**
- No server setup
- No backend code (initially)

📌 **One-line definition:**

> BaaS lets frontend developers use backend features via APIs instead of building servers.

Firebase is Google’s BaaS.

## What exactly is Firebase?

Think of Firebase as a **toolbox** 🧰 provided by Google.

Inside the box:

- Authentication → login/signup
- Database → store data
- Hosting → deploy app
- Storage → upload files
- etc.

You **choose only what you need**.

---

## Firebase Services (High-Level Only)

### 🔐 Firebase Authentication

**Problem it solves:**

“How do I implement login/signup securely?”

Firebase Auth gives you:

- Email + password login
- Google login
- Phone OTP login
- Password reset
- User session handling

📌 Important mindset:

> You don’t store passwords. Firebase handles security.

Frontend → Firebase Auth → Done.

---

### 🗄️ Firestore (Database)

**Problem it solves:**

“Where do I store my app data?”

Firestore is:

- Cloud database
- No SQL
- JSON-like data
- Real-time updates

Example mental model:

```
users
 └── userId123
     ├── name: "Pradeep"
     ├── role: "frontend dev"
     └── skills: ["React", "Firebase"]

```

📌 Important:

- You don’t write backend APIs
- You directly read/write data from frontend
- Security is controlled by **rules**, not code

---

### 🌍 Firebase Hosting (Just awareness)

**Problem it solves:**

“How do I deploy my app?”

Firebase Hosting:

- Free for small projects
- Fast (Google CDN)
- One command deploy
- Great for React / static apps

📌 Think of it as:

> “Netlify / Vercel but inside Firebase”
