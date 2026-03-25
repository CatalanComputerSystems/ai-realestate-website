# SEO Architecture
**workflow_id:** cwp-ai-realestate-website-2026-2026-03-24
**Prepared by:** RECON
**Date:** 2026-03-24
**Status:** FINAL — ready for ARCHITECT and BUILDER

---

## 1. Primary Keyword Targets

All keywords are Spanish-language, Asunción / Paraguay market. Search intent classifications follow standard commercial/informational/transactional/navigational taxonomy.

| # | Keyword | Monthly Volume (est.) | Competition | Intent | Target Page |
|---|---|---|---|---|---|
| 1 | `agente inmobiliario Asunción` | High | Medium | **Commercial** — user is evaluating agents | Home `/` |
| 2 | `propiedades en venta Asunción` | High | High | **Transactional** — user wants to buy | `/propiedades` |
| 3 | `departamentos en alquiler Asunción` | High | High | **Transactional** — user wants to rent | `/propiedades` |
| 4 | `comprar casa Asunción Paraguay` | Medium | Medium | **Transactional** — purchase intent | `/propiedades` |
| 5 | `vender propiedad Asunción` | Medium | Low | **Transactional** — seller intent | `/propiedades` (services view) |
| 6 | `inmobiliaria [barrio] Asunción` | Medium | Low | **Local Commercial** — barrio-specific agent search | Home `/` + optional `/guia-barrios` |
| 7 | `agente inmobiliario [barrio] Asunción` | Medium | Low | **Local Commercial** — barrio-specific agent | Home `/` + optional `/guia-barrios` |
| 8 | `alquiler apartamentos Carmelitas / Villa Morra` | Medium | Low | **Local Transactional** — high-value barrios | `/propiedades` |
| 9 | `asesor inmobiliario Paraguay` | Low–Medium | Low | **Informational/Commercial** — trust/credentials | `/sobre-mi` |
| 10 | `propiedades Paraguay inversión` | Low–Medium | Low | **Commercial/Informational** — investor segment | Home `/` + optional `/guia-barrios` |

**Notes:**
- Target barrios (to be confirmed by operator — see open question #4): primary candidates are Villa Morra, Carmelitas, Recoleta, Mburucuyá, Las Mercedes, Mcal. López corridor.
- Long-tail barrio keywords (e.g., "casa en venta Villa Morra Asunción 2026") have very low competition and high conversion rate — prioritize in H2s and page copy once barrios are confirmed.
- Volume estimates are indicative; validate with Google Search Console post-launch and Google Keyword Planner pre-build.

---

## 2. URL Structure

All URLs are lowercase, hyphenated, Spanish-language slugs. No trailing slashes (configure in `astro.config.mjs`).

| Page | URL | Canonical |
|---|---|---|
| Home | `/` | `https://[domain]/` |
| Propiedades / Servicios | `/propiedades` | `https://[domain]/propiedades` |
| Sobre Mí | `/sobre-mi` | `https://[domain]/sobre-mi` |
| Contacto | `/contacto` | `https://[domain]/contacto` |
| Guía de Barrios *(optional SEO page)* | `/guia-barrios` | `https://[domain]/guia-barrios` |

**Implementation notes:**
- Set `trailingSlash: 'never'` in `astro.config.mjs`.
- Canonical tags must be set explicitly on every page using `<link rel="canonical" href="..." />` in the `<head>` — Astro layout component.
- 301-redirect bare domain → canonical (Vercel `vercel.json` redirects: `www` → apex or apex → `www`, choose one and enforce).
- Domain recommendation: `.com.py` — if registered, e.g., `nombreagente.com.py`. Fallback: `nombreagente.com`.

---

## 3. Title Tags & Meta Descriptions

### Template Variables
- `[Nombre]` — Agent full name (to be confirmed, open question #1)
- `[Barrios]` — 2–3 primary barrio names, comma-separated (open question #4)
- `[X]` — Years of experience or transaction count (open question — confirm with client)
- `[Domain]` — Final domain

### Home `/`

**Title tag (≤ 60 chars):**
```
[Nombre] | Agente Inmobiliario en Asunción, Paraguay
```
*Example: "María González | Agente Inmobiliaria en Asunción, Paraguay" — 57 chars ✓*

**Meta description (≤ 155 chars):**
```
Comprá, vendé o alquilá propiedades en Asunción con [Nombre], agente de confianza en [Barrios]. Respondemos rápido por WhatsApp. ¡Consultanos!
```

**H1:**
```
Tu agente inmobiliario de confianza en Asunción
```

---

### Propiedades / Servicios `/propiedades`

**Title tag (≤ 60 chars):**
```
Propiedades en Asunción | [Nombre] — Agente Inmobiliario
```

**Meta description (≤ 155 chars):**
```
Casas, departamentos y locales en venta y alquiler en [Barrios], Asunción. Encontrá tu propiedad ideal con [Nombre]. Contactanos por WhatsApp hoy.
```

**H1:**
```
Propiedades en Venta y Alquiler en Asunción
```

---

### Sobre Mí `/sobre-mi`

**Title tag (≤ 60 chars):**
```
Sobre Mí | [Nombre] — Agente Inmobiliario en Asunción
```

**Meta description (≤ 155 chars):**
```
Conocé a [Nombre], agente inmobiliario con [X] años en el mercado de Asunción. Especialista en [Barrios]. Tu aliado para comprar, vender o alquilar.
```

**H1:**
```
Hola, soy [Nombre] — Agente Inmobiliario en Asunción
```

---

### Contacto `/contacto`

**Title tag (≤ 60 chars):**
```
Contacto | [Nombre] — Agente Inmobiliario Asunción
```

**Meta description (≤ 155 chars):**
```
Comunicate con [Nombre] para comprar, vender o alquilar en Asunción. Atención por WhatsApp, teléfono o formulario. Respondemos el mismo día.
```

**H1:**
```
Hablemos — Estoy aquí para ayudarte
```

---

### Guía de Barrios `/guia-barrios` *(optional)*

**Title tag (≤ 60 chars):**
```
Guía de Barrios Asunción 2026 | [Nombre] Inmobiliario
```

**Meta description (≤ 155 chars):**
```
Guía actualizada de los mejores barrios de Asunción para comprar o alquilar en 2026. Precios, características y tips de [Nombre], agente local.
```

**H1:**
```
Guía de Barrios de Asunción 2026 — Dónde Vivir y Qué Esperar
```

---

### Open Graph & Twitter Card (all pages)

Apply to all pages via the shared Astro layout:

```html
<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:locale" content="es_PY" />
<meta property="og:site_name" content="[Nombre] — Agente Inmobiliario" />
<meta property="og:title" content="[page title]" />
<meta property="og:description" content="[page meta description]" />
<meta property="og:url" content="[canonical URL]" />
<meta property="og:image" content="https://[domain]/og-image.jpg" /> <!-- 1200x630px -->

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[page title]" />
<meta name="twitter:description" content="[page meta description]" />
<meta name="twitter:image" content="https://[domain]/og-image.jpg" />
```

OG image: single branded card (agent photo + name + tagline + domain). 1200×630px, WebP with JPEG fallback.

---

## 4. Schema Markup

All schema implemented as JSON-LD `<script>` blocks in page `<head>`. Do not use Microdata or RDFa.

### 4.1 `RealEstateAgent` + `LocalBusiness` — All Pages (global, in Layout)

```json
{
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness"],
  "name": "[Nombre]",
  "description": "Agente inmobiliario especializado en propiedades de compra, venta y alquiler en Asunción, Paraguay.",
  "url": "https://[domain]/",
  "telephone": "+595[número]",
  "email": "[email]",
  "image": "https://[domain]/img/agent-photo.jpg",
  "logo": "https://[domain]/img/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Asunción",
    "addressCountry": "PY"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -25.2867,
    "longitude": -57.647
  },
  "areaServed": [
    { "@type": "City", "name": "Asunción" },
    { "@type": "Neighborhood", "name": "Villa Morra" },
    { "@type": "Neighborhood", "name": "Carmelitas" },
    { "@type": "Neighborhood", "name": "Recoleta" }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+595[número]",
    "contactOption": ["TollFree"],
    "availableLanguage": ["Spanish"]
  },
  "sameAs": [
    "https://www.facebook.com/[perfil]",
    "https://www.instagram.com/[perfil]",
    "https://infocasas.com.py/[perfil]"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
}
```

**Notes:**
- Populate `areaServed` with confirmed barrios from operator (open question #4).
- `sameAs` array: add GMB, InfoCasas, TuLugar URLs after profiles are created.
- Use `RealEstateAgent` as primary type — Google recognizes it as a local business subtype.

---

### 4.2 `Person` — `/sobre-mi` only

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[Nombre completo]",
  "jobTitle": "Agente Inmobiliario",
  "worksFor": {
    "@type": "RealEstateAgent",
    "name": "[Nombre o agencia]"
  },
  "url": "https://[domain]/sobre-mi",
  "image": "https://[domain]/img/agent-photo.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Asunción",
    "addressCountry": "PY"
  },
  "knowsAbout": ["Real estate", "Propiedades en Paraguay", "Mercado inmobiliario Asunción"],
  "sameAs": [
    "https://www.linkedin.com/in/[perfil]",
    "https://infocasas.com.py/[perfil]"
  ]
}
```

---

### 4.3 `Service` — `/propiedades` only

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Real Estate Services",
  "provider": {
    "@type": "RealEstateAgent",
    "name": "[Nombre]",
    "url": "https://[domain]/"
  },
  "areaServed": {
    "@type": "City",
    "name": "Asunción"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios Inmobiliarios",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Compra de Propiedades" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Venta de Propiedades" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Alquiler de Propiedades" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Asesoría de Inversión Inmobiliaria" } }
    ]
  }
}
```

---

### 4.4 `BreadcrumbList` — All inner pages (not Home)

Example for `/propiedades`:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://[domain]/" },
    { "@type": "ListItem", "position": 2, "name": "Propiedades", "item": "https://[domain]/propiedades" }
  ]
}
```

Adapt `name` and `item` per page. All inner pages get a 2-level breadcrumb: Inicio → [Page Name].

---

### 4.5 `WebSite` — Home only

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "[Nombre] — Agente Inmobiliario",
  "url": "https://[domain]/",
  "inLanguage": "es-PY",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://[domain]/propiedades?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

Note: `SearchAction` only relevant if `/propiedades` supports URL-based filtering. Include even for static filter (Google may display sitelinks search box).

---

## 5. Core Web Vitals Budgets

Target: Google "Good" thresholds on mobile (primary) and desktop. Static Astro site has a structural advantage.

| Metric | Budget | Astro Advantage | Key Risk | Mitigation |
|---|---|---|---|---|
| **LCP** | < 2.5s | Zero runtime JS overhead | Hero image load time | Preload hero with `<link rel="preload">`, serve WebP ≤ 150KB, use `fetchpriority="high"` on hero `<img>` |
| **CLS** | < 0.1 | No hydration shifts | Web fonts FOUT, image layout shift | `font-display: swap` + preload font, explicit `width`/`height` on all `<img>` tags |
| **INP** | < 200ms | Minimal JS, no heavy framework | WhatsApp button click handler, form submission | Keep all interaction handlers synchronous/lightweight; Formspree handles async off-thread |

### Image Optimization Rules
- All images: WebP format with JPEG fallback using `<picture>` element.
- Hero image: max 1440×900px, ≤ 150KB.
- Property card images: max 800×600px, ≤ 80KB each.
- Agent photo: max 400×400px, ≤ 60KB.
- All `<img>` tags: explicit `width` and `height` attributes (prevents CLS).
- Below-fold images: `loading="lazy"`.
- Hero image: `loading="eager"` + `fetchpriority="high"`.

### Font Loading
- Self-host Google Fonts or use `font-display: swap`.
- Preload primary font weight: `<link rel="preload" as="font" type="font/woff2" href="/fonts/[font].woff2" crossorigin>`.
- Limit font weights: 2 maximum (e.g., 400 + 700).

### JavaScript Budget
- Astro island hydration: use `client:visible` (not `client:load`) for non-critical components.
- WhatsApp floating button: pure CSS + minimal inline JS (≤ 1KB).
- Form: Formspree JS or standard `<form action="...">` POST — no custom JS needed.
- Google Maps embed: use static map image on `/contacto` unless interactive map is required (saves ~300KB runtime).
- Google Analytics: load with `type="text/partytown"` (Astro Partytown integration) to offload to web worker.

---

## 6. Internal Linking Structure

### Navigation (persistent, all pages)
```
Logo → /
Nav: Propiedades → /propiedades | Sobre Mí → /sobre-mi | Contacto → /contacto
```

### Footer (persistent, all pages)
```
Footer links: Inicio (/) | Propiedades (/propiedades) | Sobre Mí (/sobre-mi) | Contacto (/contacto)
Footer text: NAP (Name + Address + Phone) — must match GMB exactly
```

### In-Page CTAs (directional links)

| Source Page | Link Target | Anchor Text / Context |
|---|---|---|
| Home `/` | `/propiedades` | "Ver Propiedades" (hero CTA button) |
| Home `/` | `/contacto` | "Consultame" / lead form CTA |
| Home `/` | `/sobre-mi` | "Conocé más sobre mí" (trust signals section) |
| Home `/` | `/propiedades` | Property/service cards ("Ver más") |
| `/propiedades` | `/contacto` | Per-card CTA: "Consultar por WhatsApp" / "Solicitar Info" |
| `/propiedades` | `/sobre-mi` | Agent bio blurb: "Conocé al agente" |
| `/sobre-mi` | `/contacto` | "Hablemos" (secondary CTA, bottom of page) |
| `/sobre-mi` | `/propiedades` | "Ver mis propiedades" (inline or CTA strip) |
| `/contacto` | `/propiedades` | "Ver propiedades disponibles" (pre-form context) |
| `/guia-barrios` *(opt.)* | `/contacto` | Per-barrio CTA: "¿Buscás en [Barrio]? Hablemos" |
| `/guia-barrios` *(opt.)* | `/propiedades` | "Ver propiedades en [Barrio]" |

### Link Equity Notes
- Home is the highest-authority page — every page must link back to Home via logo/nav.
- `/contacto` and `/propiedades` are conversion pages — prioritize inbound links from all other pages.
- Anchor text should be descriptive and keyword-adjacent (not generic "click here").
- External links (InfoCasas profile, GMB, social): add `rel="noopener noreferrer"` but do NOT add `nofollow` — they are trust signals.

---

## 7. hreflang Implementation

### Primary Language: Spanish (Paraguay)
Single-language site (Spanish only, es-PY):

```html
<!-- In <head> on every page -->
<link rel="alternate" hreflang="es-PY" href="https://[domain][/path]" />
<link rel="alternate" hreflang="x-default" href="https://[domain][/path]" />
```

`x-default` should point to the same URL as `es-PY` (single-language site — no language switcher).

### Astro Implementation
In the shared Layout component:

```astro
---
const { canonicalUrl } = Astro.props;
---
<link rel="alternate" hreflang="es-PY" href={canonicalUrl} />
<link rel="alternate" hreflang="x-default" href={canonicalUrl} />
```

Pass `canonicalUrl` as a prop from each page's frontmatter.

### Bilingual Upgrade Path (if operator approves — open question #10)
If English (`en`) is added for foreign investor targeting:

```html
<link rel="alternate" hreflang="es-PY" href="https://[domain][/path]" />
<link rel="alternate" hreflang="en" href="https://[domain]/en[/path]" />
<link rel="alternate" hreflang="x-default" href="https://[domain][/path]" />
```

Use `/en/` prefix for English routes. `x-default` → Spanish (primary market).

---

## 8. Technical SEO Checklist (Implementation Requirements)

BUILDER must implement all items below. QA will validate at Phase D and Phase E.

### sitemap.xml
- Auto-generate via `@astrojs/sitemap` integration.
- Include all 4 pages (+ `/guia-barrios` if built).
- Exclude: `/404`, any utility pages.
- Submit to Google Search Console post-launch.

```js
// astro.config.mjs
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://[domain]',
  integrations: [sitemap()],
  trailingSlash: 'never',
});
```

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://[domain]/sitemap-index.xml
```

### Canonical Tags
Every page must declare its canonical URL:
```html
<link rel="canonical" href="https://[domain][/path]" />
```

### Meta Charset & Viewport
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<html lang="es-PY">
```

### Security Headers (Vercel `vercel.json`)
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

### 404 Page
Custom `/404` page with: nav header, "Página no encontrada" message, link back to Home and Propiedades.

### Google Analytics 4
- Load via Astro Partytown: `@astrojs/partytown`.
- Measurement ID: `G-XXXXXXXXXX` (to be provisioned).
- Configure GA4 events: `page_view`, `click` (WhatsApp button), `form_submit`.

---

## 9. Dependency Map — Open Questions Blocking SEO Variables

The following items from `requirements.md` open questions directly affect SEO implementation. ARCHITECT and BUILDER must resolve before finalizing copy:

| Open Q | Affects |
|---|---|
| #1 Legal/trading name | All title tags, schema `name`, OG tags, domain |
| #2 Solo agent or team | `/sobre-mi` schema (`Person` vs. `Organization`), H1 framing |
| #3 Property types | Keyword set refinement, schema `OfferCatalog` items |
| #4 Target barrios/zones | `areaServed` schema, barrio keyword integration in titles/copy |
| #8 Domain | All canonical URLs, sitemap, hreflang, schema `url` |
| #10 Language | hreflang bilingual upgrade, English keyword strategy |

---

## 10. Post-Launch SEO Actions (Out of Scope for Build — Client/Operator Responsibility)

1. **Google Search Console:** Verify domain ownership, submit sitemap.xml.
2. **Google My Business:** Create/claim listing, set category "Agente inmobiliario," add NAP matching website schema.
3. **Citation building:** InfoCasas.com.py, TuLugar.com, Properstar.com agent profiles — NAP must be identical to schema.
4. **Google reviews:** Request 5+ reviews from past clients at launch.
5. **Page Speed Insights:** Run audit on live URL within 24h of launch. Target: all metrics in "Good" range.
6. **Search Console impressions:** Review after 2 weeks — identify top queries, adjust title tags if needed.

---

*SEO Architecture complete. Pending: operator answers to open questions #1, #2, #3, #4, #8, #10 before BUILDER can finalize title tag and schema copy.*
