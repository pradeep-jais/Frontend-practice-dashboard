# Project Hub – Practice Projects App 🚀

A **React-based practice project hub** where I showcase multiple small frontend projects inside a single application.

This app helped me learn **component architecture, state-driven UI, CSS structuring, and real-world UI patterns**.

---

## 🌟 Live Preview

https://react-pj-hub.netlify.app/

---

## 📌 Purpose of This Project

As a frontend learner, I wanted:

- One place to **organize my practice projects**
- A real-world layout (Navbar + Sidebar + Main content)
- To experiment with **UI patterns, data fetching, and reusable components**

Instead of creating many small repos, I built a **single scalable app** that can grow as I learn.

---

## 🧩 Projects Included

- **Data Fetching**
  - API calls using `fetch`
  - Loading & error handling
  - Understanding network vs HTTP errors
- **Blog Card UI**
  - Card layouts
  - Text truncation
  - Responsive design
- **Reusable Card UI**
  - Grid-based layouts
  - Button alignment
  - Flexbox vs CSS Grid usage
- **Products from API**
  - Fetching products from an external API
  - Rendering dynamic cards
  - Error debugging and handling

---

## 🛠 Tech Stack

- **React (Vite)**
- **JavaScript (ES6+)**
- **CSS**
  - Flexbox
  - CSS Grid
  - CSS Variables
- **DummyJSON API** (for product data)

---

## 🧠 Key Learnings (Very Important Section)

This project helped me understand:

### React Concepts

- Component composition
- Conditional rendering
- State-driven UI
- Passing props correctly
- Avoiding prop drilling using config-driven rendering

### UI & Layout

- When to use **Flexbox vs CSS Grid**
- Sidebar overlay pattern for mobile screens
- Button alignment inside cards
- Responsive card layouts

### CSS Architecture

- Problems with global CSS
- Class name collisions
- Importance of scoped styles
- How CSS specificity and import order works

### Data Fetching

- Difference between **network errors** and **HTTP errors**
- Why `fetch()` only throws on network failure
- How to extract error details from `catch`
- Safe error handling for UI rendering

---

## 🧱 Project Structure (Simplified)

```
src/
├─ components/
│  ├─ Navbar.jsx
│  ├─ Sidebar.jsx
│
├─ pages/
│  ├─ Home.jsx
│
├─ projects/
│  ├─01_data_fetch/
│  ├─02_blog_card/
│  ├─03_card_ui/
│  ├─ products/
│
├─ App.jsx
├─ index.css

```

Each project is **self-contained**, making the app easier to scale.

---

## ⚙️ How Project Rendering Works

Projects are rendered dynamically using a **configuration-driven approach** instead of multiple conditionals.

This makes adding a new project simple:

- Add project component
- Update project config
- No change needed in layout logic

---

## 📱 Responsive Behavior

- Sidebar is always visible on large screens
- On small screens:
  - Sidebar opens as overlay
  - Clicking outside closes it
- Implemented using an overlay instead of global event listeners

---

## 🧪 Error Handling Example

- Network errors are caught using `try/catch`
- Error objects are normalized before rendering
- Error messages are safely displayed in UI

---

## 🚀 How to Run Locally

```bash
gitclone <repo-url>
cd project-hub
npm install
npm run dev

```

---

## 🎯 Future Improvements

- Convert CSS to CSS Modules or Tailwind
- Add routing with React Router
- Lazy load projects
- Improve accessibility
- Add animations

---

## 🙌 Why This Project Matters to Me

This project represents my **transition from writing UI to thinking like a frontend developer**:

- Structure before styling
- Behavior before visuals
- Scalability before shortcuts

---

## 📄 License

This project is for learning purposes.
