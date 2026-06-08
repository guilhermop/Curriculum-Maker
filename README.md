# CV Maker

A simple and modern CV builder built with React and Vite.

🔗 **Live demo:** [curriculomaker.netlify.app](https://curriculomaker.netlify.app/)

---

## About

CV Maker lets you fill in your personal information, education, and work experience through a clean form interface, with a live preview updating in real time on the right side. Each section has its own **Submit** and **Edit** buttons, so you can lock in your data and go back to edit it whenever you want.

---

## Features

- **Personal Info section** — name, email, and phone number
- **Education section** — school name, degree, and study period
- **Experience section** — company, position, responsibilities, and dates
- **Live preview** — updates as you type
- **Edit / Submit per section** — toggle between editing and viewing modes
- Dark, modern UI theme

---

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS (vanilla, modular per component)

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/seu-usuario/cv-maker.git

# Navigate to the project folder
cd cv-maker

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
├── components/
│   ├── PersonalInfoSection.jsx
│   ├── EducationSection.jsx
│   ├── ExperienceSection.jsx
│   └── CVPreview.jsx
├── styles/
│   ├── App.css
│   ├── PersonalInfoSection.css
│   ├── EducationSection.css
│   ├── ExperienceSection.css
│   └── CVPreview.css
├── App.jsx
└── main.jsx
```

---

## What I Learned

- Component structure in React
- State management with `useState`
- Passing props between components
- Controlled inputs
- Conditional rendering (edit vs. view mode)
- CSS organization per component
- Deploying a Vite app with Netlify

---


