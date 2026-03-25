# CLAUDE.md — AI Real Estate Website

## Project Overview
This project is a Tier 1 static lead-generation website for a real estate agent/business in Asunción, Paraguay. Its purpose is to convert visitors into leads through WhatsApp, phone, and contact forms while establishing trust with a strong personal brand, fast performance, and local SEO fundamentals. The implementation is intentionally lightweight so it can launch quickly, deploy cheaply, and remain easy to maintain.

## Stack Summary
- **Framework:** Astro 4.x
- **Styling:** Tailwind CSS 3.x
- **Language:** TypeScript
- **Forms:** Formspree
- **Deployment:** Vercel (static export)
- **Analytics:** Google Analytics 4
- **Maps:** Google Maps Embed or equivalent static embed

## Dev Commands
Assumes a standard Astro + Tailwind project setup.

```bash
# install dependencies
npm install

# start local dev server
npm run dev

# create production build
npm run build

# preview production build locally
npm run preview

# deploy to Vercel
vercel --prod
```

If the project uses pnpm instead of npm, mirror the same commands with `pnpm`.

## Key Directories

```text
src/pages/        Route files for the 4 public pages
src/components/   Reusable UI sections and shared components
src/layouts/      Global page layout(s)
src/data/         Static content/data sources for site settings, agent info, listings/services, testimonials, zones
src/styles/       Global styles and Tailwind entry styles
src/lib/          Small helper utilities (SEO, contact links, formatting)
src/types/        Shared TypeScript interfaces and content types
public/           Static assets such as images, icons, OG images, and favicons
```

## Coding Conventions
- Use **Astro components by default**; add client-side hydration only when interaction genuinely requires it.
- Keep the site **static-first**. Do not introduce a backend, database, or SSR unless scope changes.
- Put editable business content in `src/data/*` instead of hardcoding repeated strings in components.
- Use **TypeScript interfaces/types** for listings, services, testimonials, contact data, and SEO metadata.
- Prefer **small, section-based components** over large monolithic page files.
- Keep Tailwind class usage readable; extract repeated UI patterns into reusable components.
- Maintain **mobile-first** layouts and CTA visibility, especially for WhatsApp and phone actions.
- All public environment variables must use the `PUBLIC_` prefix.
- Optimize for **Core Web Vitals**, accessible semantics, and local SEO from the first pass.
- Route names, labels, and default copy should remain **Spanish-first** unless bilingual scope is later approved.
