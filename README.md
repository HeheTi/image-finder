# Image Finder (Vite + React 19 + TypeScript)

A modern rewrite of the legacy Image Finder project using **Vite**, **React 19**, and
**TypeScript**.  
The goal of this project is to demonstrate clean architecture, modular feature-based structure,
reusable UI components, and predictable async data flows.

---

## Table of Contents

- [Image Finder (Vite + React 19 + TypeScript)](#image-finder-vite--react-19--typescript)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [Environment Variables](#environment-variables)
  - [GitHub Pages Deployment](#github-pages-deployment)
  - [Available Commands](#available-commands)
  - [About](#about)
  - [License](#license)

---

## Features

- Fast bundling with **Vite**
- **React 19 + TypeScript**
- Feature-based architecture (FSD-inspired)
- Typed **Pixabay API client** with environment variables
- Modern async state management inside custom hooks
- Reusable UI components (`Button`, `Modal`, `Loader`)
- CSS Modules + SCSS
- Integration with **React Router v7**
- Clean separation of:
  - domain model
  - API layer
  - UI layer
  - shared components

---

## Tech Stack

- **Vite**
- **React 19**
- **TypeScript**
- **React Router v7**
- **React Toastify**
- **Pixabay API**
- **SCSS Modules**
- Feature-Sliced inspired structure

---

## Project Structure

```bash
project-root/
├── index.html
├── vite.config.ts
├── package.json
├── tsconfig.json
├── .gitignore
├── .env.example
└── src/
    ├── app/                         # application shell, routing, providers
    ├── pages/                       # routing-level page components
    ├── features/                    # isolated feature modules with API + model + UI
    │   └── image-search/
    ├── shared/                      # reusable UI and utilities
    └── assets/
        └── (images, icons, etc.)
```

---

## Environment Variables

Create `.env` file:

```bash
VITE_PIXABAY_API_KEY=your_api_key_here
```

The key is required for image requests.

---

## GitHub Pages Deployment

Vite requires specifying a base path for GitHub Pages.

In `vite.config.ts`:

```ts
export default defineConfig({
  base: '/image-finder/', // <-- repository name
  plugins: [react()],
  resolve: { ... }
});
```

Then build:

```bash
npm run build
```

Deploy manually or via GitHub Actions.

---

## Available Commands

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm install`     | Install dependencies             |
| `npm run dev`     | Start local development          |
| `npm run build`   | Build production bundle          |
| `npm run preview` | Preview production build locally |

---

## About

This project is a refactored version of an old CRA-based Image Finder, updated with modern tooling
and architecture.  
It serves as a training environment to improve engineering skills, architectural thinking, and
production-ready React development.

---

## License

MIT © 2025
