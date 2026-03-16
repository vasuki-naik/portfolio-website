# Vasuki Nagesh Naik — Personal Portfolio

A modern, minimal personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## ✨ Design

- **Aesthetic**: Warm editorial minimalism — cream backgrounds, refined typography, subtle grain texture
- **Fonts**: Cormorant Garamond (display) + Figtree (body)
- **Colors**: Soft whites, warm beige, pastel slate-blue accents
- **Animations**: Framer Motion scroll reveals, micro-interactions, floating elements

## 🗂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky nav with mobile hamburger
│   ├── Hero.jsx            # Intro section with avatar + CTA buttons
│   ├── About.jsx           # About paragraph + quick stats
│   ├── Skills.jsx          # Skill groups in minimal cards
│   ├── Projects.jsx        # Project cards with stack tags
│   ├── Research.jsx        # Research paper with status badge
│   ├── Experience.jsx      # Deloitte + Certs + Hackathon grid
│   ├── Contact.jsx         # Email / LinkedIn / GitHub links
│   ├── Footer.jsx          # Minimal footer
│   ├── SectionWrapper.jsx  # Scroll-reveal wrapper + section header
│   └── useInView.js        # Intersection Observer hook
├── App.jsx                 # Main layout + background radials
├── index.css               # Global styles + Tailwind directives
└── main.jsx                # React entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Customization

| What to change | Where |
|---|---|
| Your name / tagline | `src/components/Hero.jsx` |
| Profile photo | Replace the initials placeholder in `Hero.jsx` with an `<img>` tag |
| Projects | `src/components/Projects.jsx` → `projects` array |
| Skills | `src/components/Skills.jsx` → `skillGroups` array |
| Contact links | `src/components/Contact.jsx` → `contacts` array |
| Resume link | `src/components/Hero.jsx` → Download Resume `<a href>` |
| Colors | `tailwind.config.js` → `theme.extend.colors` |

## 🛠 Tech Stack

- **React 18** — UI framework
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion 11** — Animations & transitions
- **Lucide React** — Icon library
- **Vite 5** — Build tool
