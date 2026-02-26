# Lovepreet Bhatia — Portfolio

A production-ready React portfolio built with **Vite**, **Tailwind CSS v3**, and a
soft Pinterest-inspired aesthetic. Zero external UI libraries.

---

## Tech Stack

| Tool          | Version  | Purpose                      |
|---------------|----------|------------------------------|
| React         | 18        | UI framework                 |
| Vite          | 5         | Build tool / dev server      |
| Tailwind CSS  | 3         | Utility-first CSS            |
| PostCSS       | 8         | CSS transformer              |
| Autoprefixer  | 10        | Vendor prefixing             |

---

## Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx              ← ReactDOM entry point
    ├── App.jsx               ← Root component (assembles sections)
    ├── index.css             ← Tailwind directives + global styles
    ├── hooks/
    │   └── useReveal.js      ← IntersectionObserver scroll-reveal hook
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Projects.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

Output goes to `dist/`. You can preview it with:

```bash
npm run preview
```

---

## Deploying to Vercel

1. Push the project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import the repo.
3. Vercel auto-detects Vite — just click **Deploy**.

No extra configuration needed.

---

## Customisation Guide

### Update personal info
- **Name / email / GitHub** — Edit `src/components/Hero.jsx`, `Contact.jsx`, and `Footer.jsx`.
- **About text** — Edit `src/components/About.jsx`.
- **Skills** — Edit the `SKILLS` array in `src/components/About.jsx`.
- **Projects** — Edit the `PROJECTS` array in `src/components/Projects.jsx`.

### Change the colour palette
All palette tokens live in `tailwind.config.js` under `theme.extend.colors`.
CSS variables for one-off overrides are declared at the top of `src/index.css`.

### Add a new section
1. Create `src/components/MySection.jsx`.
2. Import and drop `<MySection />` inside the `<main>` block in `src/App.jsx`.
3. Add the matching `href="#my-section"` to the `NAV_LINKS` array in `Navbar.jsx`.

---

## Design Decisions

- **DM Sans** (body) + **Lora** (headings) — loaded via Google Fonts in `index.html`.
- **Soft pastel palette** — rose, peach, sky, mint, lavender — defined as Tailwind tokens.
- **Scroll-reveal** handled by a single reusable `useReveal` hook using `IntersectionObserver`.
- **No external component libraries** — every badge, card, and button is hand-crafted with Tailwind utilities.
- **Mobile-first** — all layouts start from `sm:` breakpoints upward.

---

*Built with care by Lovepreet Bhatia · Thapar Institute of Engineering & Technology*
