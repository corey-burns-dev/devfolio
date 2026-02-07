# devfolio

A modern, animated developer portfolio built with Astro, React, TypeScript, Tailwind CSS, and GSAP.

## Overview

`devfolio` is a single-page portfolio experience with smooth section navigation, scroll-based motion, and bold visual styling.  
It uses Astro as the site framework and mounts the existing React portfolio app as a client-side island to preserve behavior and visuals.

## Features

- Full-page portfolio sections: Hero, Projects, Skills, About, Contact
- GSAP-powered animations with `ScrollTrigger`
- Active section tracking in navigation
- Responsive layout for desktop and mobile
- Utility-first styling with Tailwind CSS
- Fast local development and production builds via Astro
- React app mounted with `client:load` in Astro

## Tech Stack

- React 19
- TypeScript
- Astro 5
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
├── astro.config.mjs
├── src/
│   ├── App.tsx
│   ├── env.d.ts
│   ├── index.css
│   └── pages/
│       └── index.astro
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Notes

- `node_modules/` and `dist/` are intentionally git-ignored.
- The current portfolio content is sample content and can be customized in `src/App.tsx`.
