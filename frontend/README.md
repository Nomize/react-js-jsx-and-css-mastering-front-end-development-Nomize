
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

Here’s a screenshot of the deployed app:![1762000655447](image/README/1762000655447.png)

![App Screenshot](https://chatgpt.com/c/src/assets/screenshot.png)

---

## 🛠️ Tech Stack

* **Frontend:** React + Vite
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **Icons:** Lucide React
* **State Management:** React Hooks + Context API
* **API Source:** [JSONPlaceholde](https://jsonplaceholder.typicode.com/)r

---

## ⚙️ Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/react-blog-task-app.git
cd react-blog-task-app
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

---

## 🧑‍💻 Author

Developed by Nomize — built to showcase clean React architecture and modern UI principles.

---

## 📄 License

This project is open-source and available under the [MIT License](https://chatgpt.com/c/LICENSE).
