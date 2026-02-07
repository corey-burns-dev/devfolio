# devfolio

A modern, animated developer portfolio built with React, TypeScript, Vite, Tailwind CSS, and GSAP.

## Overview

`devfolio` is a single-page portfolio experience with smooth section navigation, scroll-based motion, and bold visual styling.  
It is designed to showcase projects, skills, background, and contact details in a clean, high-impact layout.

## Features

- Full-page portfolio sections: Hero, Projects, Skills, About, Contact
- GSAP-powered animations with `ScrollTrigger`
- Active section tracking in navigation
- Responsive layout for desktop and mobile
- Utility-first styling with Tailwind CSS
- Fast local development and production builds via Vite

## Tech Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- GSAP

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- npm (or bun)

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```text
.
├── src/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Notes

- `node_modules/` and `dist/` are intentionally git-ignored.
- The current portfolio content is sample content and can be customized in `src/App.tsx`.
