# Architecture — AI Real Estate Lead Generation Website

**Workflow ID:** cwp-ai-realestate-website-2026-2026-03-24  
**Project Type:** Tier 1 static lead-generation website  
**Stack:** Astro 4.x + Tailwind CSS + TypeScript + Formspree  
**Deployment:** Static export on Vercel

## 1. Architecture Summary

This project will be implemented as a static marketing site optimized for lead capture, local SEO, and fast mobile performance. The site architecture prioritizes WhatsApp-first conversion, clear service positioning, and a lightweight content model that can be maintained without a database or CMS runtime.

Because the confirmed stack is static-first, all page content, listing/service cards, testimonials, metadata, and SEO configuration should live in local content/data files inside the repository. This keeps the site fast, inexpensive to host, simple to deploy, and aligned with the approved Tier 1 scope.

> Note: `requirements.md` identifies unresolved client inputs (brand name, barrios, listing count, language, etc.). This architecture assumes a **single-agent / personal-brand site**, **Spanish-first content**, and a **hybrid propiedades/servicios page** that can render either curated listings or service cards from static data.

---

## 2. Stack Selection and Rationale

### Core Stack
- **Framework:** Astro 4.x
- **Styling:** Tailwind CSS 3.x
- **Language:** TypeScript
- **Forms:** Formspree
- **Hosting/Deploy:** Vercel
- **Analytics:** Google Analytics 4
- **Maps/Location:** Google Maps Embed or static map embed

### Rationale

#### Astro 4.x
- Best fit for a static lead-gen site with minimal JavaScript.
- Excellent Lighthouse and Core Web Vitals performance.
- Supports component-based architecture without requiring a heavy client runtime.
- Simple static export flow for Vercel deployment.

#### Tailwind CSS
- Fast implementation of a polished real-estate marketing UI.
- Encourages reusable visual patterns for cards, sections, badges, CTA bars, and forms.
- Reduces CSS maintenance overhead for a small brochure-style site.

#### TypeScript
- Improves safety for props, content/data shapes, and configuration.
- Useful for strongly typed page data, SEO metadata, testimonials, contact links, and listings/services.

#### Formspree
- No custom backend required.
- Appropriate for static hosting and low operational overhead.
- Supports email notifications and spam protection for lead capture.

#### Vercel
- Simple Git-based deployment flow.
- Free/static-friendly hosting, SSL, and CDN delivery.
- Suitable for fast iteration and preview deployments during QA.

### Why this stack is correct for Tier 1
- No database required.
- No CMS runtime required.
- No authentication or admin panel required.
- Fast delivery within the 3-week timeline.
- Low maintenance after launch.
- Strong fit for local SEO and mobile-first conversion.

---

## 3. Repository and Deployment Naming

- **Repository name:** `ai-realestate-website`
- **Vercel project name:** `ai-realestate-website`

If the operator later wants client-specific naming, the repo can remain generic while the production domain points to the client brand domain.

---

## 4. High-Level Technical Approach

### Rendering Strategy
- All pages generated statically at build time.
- No SSR required.
- No backend/API required for content rendering.
- Minimal client-side JavaScript only where useful (for small filters, menu behavior, analytics events, sticky interactions).

### Data Strategy
Content should be stored in local TypeScript or JSON data files, such as:
- site settings
- agent profile
- testimonials
- featured properties or service cards
- barrios/zones served
- contact details
- SEO metadata

This enables quick edits without introducing CMS complexity.

### Conversion Strategy
- Persistent WhatsApp CTA on all pages.
- Phone CTA visible on mobile.
- Lead form on homepage and full form on contact page.
- Conversion sections repeated at key drop-off points.

### SEO Strategy
- Static metadata per route.
- Schema markup for `RealEstateAgent` / `LocalBusiness`.
- Sitemap and robots generation.
- Spanish-first copy and local keyword targeting for Asunción / target barrios.

---

## 5. Page List

Exactly 4 pages will be implemented in the initial scope.

| Page | Route | Primary Top-Level Component | Data Source |
|---|---|---|---|
| Home | `/` | `HomePage` | `src/data/site.ts`, `src/data/agent.ts`, `src/data/listings.ts` or `src/data/services.ts`, `src/data/testimonials.ts`, `src/data/zones.ts` |
| Propiedades / Servicios | `/propiedades` | `PropertiesPage` | `src/data/listings.ts` and/or `src/data/services.ts`, `src/data/zones.ts` |
| Sobre Mí | `/sobre-mi` | `AboutPage` | `src/data/agent.ts`, `src/data/testimonials.ts`, `src/data/credentials.ts`, `src/data/zones.ts` |
| Contacto | `/contacto` | `ContactPage` | `src/data/contact.ts`, `src/data/site.ts`, `src/data/zones.ts` |

### Page Details

#### 1. Home (`/`)
**Purpose:** immediate trust + conversion.

**Sections likely included:**
- Hero with value proposition
- Primary CTA bar (WhatsApp / call / view properties)
- Featured properties or featured services
- Trust metrics
- Testimonials preview
- Coverage areas / barrio badges
- Short lead form

**Primary data sources:**
- site settings
- agent profile
- featured listings or services
- testimonials
- target zones

#### 2. Propiedades / Servicios (`/propiedades`)
**Purpose:** present inventory or, if inventory is limited, present service offerings with inquiry CTAs.

**Sections likely included:**
- Intro header
- Filter/chip bar (static or lightweight client-side filter)
- Property cards or service cards
- Repeated WhatsApp CTA
- Lead capture section

**Primary data sources:**
- listings data if available
- services data fallback
- zones / categories

#### 3. Sobre Mí (`/sobre-mi`)
**Purpose:** establish authority, personality, and local trust.

**Sections likely included:**
- Bio / headshot
- Experience and specialties
- Certifications / affiliations
- Transaction or trust metrics
- Testimonials block
- CTA section

**Primary data sources:**
- agent profile
- testimonials
- credentials / milestones
- zones served

#### 4. Contacto (`/contacto`)
**Purpose:** maximize inbound lead capture across preferred channels.

**Sections likely included:**
- Contact hero
- Formspree contact form
- WhatsApp CTA
- click-to-call phone CTA
- business details / hours
- map or service-area embed

**Primary data sources:**
- contact settings
- site settings
- zones / address / hours

---

## 6. Component Hierarchy (Top-Level Components Only)

Top-level only, per requested scope.

### Layout / Global
- `MainLayout`
- `SiteHeader`
- `MobileNav`
- `SiteFooter`
- `SeoHead`
- `FloatingWhatsAppButton`
- `StickyMobileContactBar`

### Home Page
- `HomePage`
- `HeroSection`
- `PrimaryCtaBar`
- `FeaturedGrid`
- `TrustSignalsSection`
- `TestimonialsSection`
- `LeadFormSection`
- `ZonesSection`

### Propiedades / Servicios Page
- `PropertiesPage`
- `PageHero`
- `FilterBar`
- `PropertyGrid`
- `ServicesGrid`
- `InquiryCtaSection`
- `LeadCaptureSection`

### Sobre Mí Page
- `AboutPage`
- `AgentBioSection`
- `CredentialsSection`
- `MilestonesSection`
- `TestimonialsSection`
- `AboutCtaSection`

### Contacto Page
- `ContactPage`
- `ContactMethodsSection`
- `ContactFormSection`
- `MapSection`
- `BusinessInfoSection`

### Shared Content Blocks
- `SectionHeading`
- `PropertyCard`
- `ServiceCard`
- `TestimonialCard`
- `MetricCard`
- `ZoneBadgeList`
- `Button`

---

## 7. Recommended Repository Structure

```text
ai-realestate-website/
├─ public/
│  ├─ favicon.svg
│  ├─ images/
│  └─ og/
├─ src/
│  ├─ components/
│  ├─ data/
│  ├─ layouts/
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ propiedades.astro
│  │  ├─ sobre-mi.astro
│  │  └─ contacto.astro
│  ├─ styles/
│  ├─ lib/
│  └─ types/
├─ astro.config.mjs
├─ tailwind.config.mjs
├─ tsconfig.json
├─ package.json
├─ .env.example
└─ README.md
```

### Recommended data files
```text
src/data/
├─ site.ts
├─ agent.ts
├─ contact.ts
├─ listings.ts
├─ services.ts
├─ testimonials.ts
├─ zones.ts
├─ credentials.ts
└─ seo.ts
```

---

## 8. Environment Variables Required

The project is static, so only a small set of environment variables is required.

| Variable | Required | Purpose |
|---|---|---|
| `PUBLIC_SITE_URL` | Yes | Canonical site URL for metadata, sitemap, and OG tags |
| `PUBLIC_FORMSPREE_ENDPOINT` | Yes | Formspree form endpoint/action URL for contact submissions |
| `PUBLIC_WHATSAPP_NUMBER` | Yes | WhatsApp CTA link generation |
| `PUBLIC_PHONE_NUMBER` | Yes | Click-to-call CTA |
| `PUBLIC_GA4_MEASUREMENT_ID` | Recommended | Google Analytics 4 tracking |
| `PUBLIC_GOOGLE_MAPS_EMBED_URL` | Optional | Contact page map/service area embed |
| `PUBLIC_GMB_PROFILE_URL` | Optional | Link to Google Business Profile |
| `PUBLIC_INSTAGRAM_URL` | Optional | Social proof / footer link |
| `PUBLIC_FACEBOOK_URL` | Optional | Social proof / footer link |

### Notes
- Use Astro `PUBLIC_` variables only for values intentionally exposed client-side.
- Do not place secrets in the frontend project.
- Formspree in this setup does not require a private backend secret if configured as a public form endpoint.

---

## 9. Key Assumptions and Decisions

### Content Model Decision
Because `requirements.md` leaves active listing count unresolved, the `/propiedades` route should be architected to support either:
1. a static featured-listings grid, or
2. a services-first presentation if the client lacks enough current inventory.

This avoids re-architecting if the operator later confirms limited listings.

### Brand Framing Decision
Until the operator answers whether the business is solo or team-based, the architecture defaults to:
- personal brand emphasis
- route `/sobre-mi`
- first-person trust language

If the client is actually a small team, this can be renamed and rewritten without structural changes.

### Language Decision
Default implementation should be Spanish-first. If bilingual is approved later, the site can be extended using Astro i18n patterns, but bilingual support is out of the current Tier 1 base architecture unless explicitly added.

### Filtering Decision
Any filtering on `/propiedades` should be lightweight and client-side only, using static datasets. No live inventory sync is included in this architecture.

---

## 10. Build and Delivery Estimate

### Estimated build time
- **Architecture + setup:** 0.5 day
- **Core UI/layout implementation:** 2–3 days
- **4 page implementation:** 2–3 days
- **Content wiring + forms + analytics + SEO basics:** 1–2 days
- **Responsive polish + QA fixes:** 1–2 days
- **Deployment + launch adjustments:** 0.5 day

**Estimated total build time:** **7–10 working days**

This fits comfortably inside the stated 3-week delivery window for a Tier 1 project.

---

## 11. Implementation Notes for Builder

- Keep JS hydration minimal; default to Astro serverless-free static components.
- Prefer data-driven sections over hardcoded copy blocks so operator/client revisions are quick.
- Implement strong CTA reuse across all pages.
- Optimize images aggressively for mobile performance.
- Include schema, OG metadata, sitemap, robots, and canonical URLs in the first implementation pass.
- Build `/propiedades` so the same grid shell can render listings now and services later if needed.

---

## 12. Final Recommendation

Proceed with a **static Astro 4.x marketing architecture** using **Tailwind CSS, TypeScript, Formspree, and Vercel**. This is the correct technical choice for the approved Tier 1 lead-generation scope: it minimizes complexity, maximizes speed and SEO performance, and supports fast delivery with a clean conversion-focused UX.
