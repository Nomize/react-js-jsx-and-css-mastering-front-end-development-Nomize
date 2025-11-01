
---

# 🧠 React Blog + Task Manager App

A fully functional, responsive React application that demonstrates API integration, theme switching, routing, and simple task management — built with  **React** ,  **Tailwind CSS** , and  **Context API** .

---

## ✨ Features

* 🌗 **Light/Dark Theme Toggle** using React Context
* 🧩 **Modular Components** (Navbar, Footer, Cards, Buttons, etc.)
* 📰 **Dynamic Posts** fetched from a public API
* ✅ **Task Manager** with local state handling
* 📱 **Responsive Layout** built with Tailwind CSS
* ⚛️ **React Router Integration** for multiple pages
* 🧠 **Context Management** for theme persistence
* 🚫 **404 Page** for invalid routes

---

## 🖼️ Preview

Here’s a screenshot of the deployed app:

C:\Users\Uchen\OneDrive\Desktop\Full-Stack Dev\react-js-jsx-and-css-mastering-front-end-development-Nomize\frontend\src\assets\Screenshots\Homepage_light mode.png

---

## 🛠️ Tech Stack

* **Frontend:** React + Vite
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **Icons:** Lucide React
* **State Management:** React Hooks + Context API
* **API Source:** [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

---

## ⚙️ Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-Nomize.git
cd "frontend"
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

Then open your browser at:

```
http://localhost:5173/
```

---

## 📂 Folder Structure

```
src/
│
├── assets/
│   └── screenshot.png
│
├── components/
│   ├── ApiData.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── TaskManager.jsx
│   └── ThemeSwitcher.jsx
│
├── context/
│   └── ThemeContext.jsx
│
├── pages/
│   ├── About.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   └── Posts.jsx
│
├── utils/
│   └── helpers.jsx
│
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🌍 API Integration

Posts are fetched dynamically from the **JSONPlaceholder** API inside

`src/components/ApiData.jsx`:

```js
https://jsonplaceholder.typicode.com/posts
```

You can replace it with your own REST API endpoint for real data.

---

## 💡 How to Customize

* 🖋️ Update **Navbar** links or add new pages in `src/pages/`
* 🎨 Adjust theme colors in `tailwind.config.js`
* 🧠 Modify or expand Context logic in `src/context/ThemeContext.jsx`
* ⚙️ Add utility functions in `src/utils/helpers.jsx`
* ✏️ Replace the screenshot with your own deployed app preview in `src/assets/`

---

## 🧪 Expected Outcome

✅ A React app that demonstrates:

* Multiple components and pages
* State and Context management
* API integration with loading & error handling
* Responsive Tailwind styling
* Clean, well-organized, production-ready code
* Deployed live on vercel

## 🚀 Live Demo

You can view the deployed project here:  
👉 [## 🚀 Live Demo

You can view the deployed project here:  
👉 [[https://react-js-jsx-and-css-mastering-fron-mu.vercel.app/](https://react-js-jsx-and-css-mastering-fron-mu.vercel.app/)](https://react-js-jsx-and-css-mastering-fron-tawny.vercel.app/)



---

## 🧑‍💻 Author

Developed by Nomize— built to showcase clean React architecture and modern UI principles.

---

## 📄 License

This project is open-source and available under the [MIT License](https://chatgpt.com/c/LICENSE).

---
