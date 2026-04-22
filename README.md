# Tobams Group - Frontend Assessment

A production-ready Next.js implementation of the Tobams Group Training and Development landing page, built for the Frontend Intern Assessment.

## 🚀 Live Demo
**Live URL:** [https://tobams-assesment.vercel.app/](https://tobams-assesment.vercel.app/) *(Placeholder - Replace with your actual deployment URL)*

## 🛠 Tech Stack
- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Typography:** [Geist](https://vercel.com/font) & [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)
- **Icons:** Custom SVG & Lucide-style iconography
- **Deployment:** [Vercel](https://vercel.com/)

## 📋 Features
- **Pixel-Perfect Implementation:** Closely matched the Figma design for desktop, tablet, and mobile.
- **Fully Responsive:** Fluid layouts using Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`).
- **Component-Driven:** Modular architecture with reusable components in `/components`.
- **Accessibility:** Semantic HTML tags (`<nav>`, `<main>`, `<section>`, `<footer>`), ARIA labels, and keyboard-navigable elements.
- **Performance Optimized:** Optimized images via `next/image` and custom font loading.

## 🎨 Design Decisions & Assumptions
1. **Tailwind CSS 4.0:** Utilized the latest version of Tailwind for improved performance and a modern CSS-in-JS approach via `@theme`.
2. **Typography:** Used `Nunito Sans` as the primary font to match the professional brand aesthetic of Tobams Group.
3. **Animations:** Implemented subtle hover effects and transitions while respecting `prefers-reduced-motion`.
4. **Image Selection:** High-quality professional imagery sourced from Unsplash to maintain the "premium" feel of the design.
5. **Two-Tier Navbar:** Implemented a sophisticated two-tier navigation system as seen in modern professional services websites.

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/tobams-assesment.git
cd tobams-assesment
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Build for production
```bash
npm run build
npm start
```

## 🔗 Figma Design Reference
[Figma Design Link](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)

---
**Note:** This implementation was created as part of an assessment. All brand assets (logo) were provided in the initial project structure.
