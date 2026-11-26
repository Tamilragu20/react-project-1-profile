# React Project 1 — Personal Profile Website

A responsive personal portfolio and developer profile application built with **React**, **Vite**, **JavaScript**, and modular **CSS**.

## Features

- Sticky navigation bar with responsive mobile menu (`Header.jsx`)
- Personal introduction card with SVG portrait, availability badge, highlights, and contact actions (`ProfileCard.jsx`)
- Reusable skills grid rendered with `map()` showing proficiency bars and technology tags (`Skills.jsx`)
- Academic background and training cards with coursework pills (`Education.jsx`)
- Responsive footer with contact links (`Footer.jsx`)

## Project Structure

```text
react-project-1-profile/
├── src/
│   ├── assets/
│   │   └── avatar.svg
│   ├── components/
│   │   ├── Education.css
│   │   ├── Education.jsx
│   │   ├── Footer.css
│   │   ├── Footer.jsx
│   │   ├── Header.css
│   │   ├── Header.jsx
│   │   ├── ProfileCard.css
│   │   ├── ProfileCard.jsx
│   │   ├── Skills.css
│   │   └── Skills.jsx
│   ├── data/
│   │   └── profileData.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Getting Started

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```
