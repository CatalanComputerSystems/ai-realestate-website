# Requirements: AI Real Estate — Lead Generation Website
**workflow_id:** cwp-ai-realestate-website-2026-2026-03-24
**Prepared by:** RECON
**Date:** 2026-03-24
**Status:** DRAFT — pending operator answers to open questions

---

## 1. Tier Classification

### Classification: **Tier 1 — Static Lead Generation Site**

**Rationale:**
- Budget ($2,500 USD) and timeline (3 weeks) strongly favor a static build — no CMS runtime, no database, no auth overhead.
- Primary goal is inbound lead capture (calls, WhatsApp, form submissions), not content publishing or property search.
- Competitors at this budget level in Paraguay are predominantly WordPress or static sites with minimal CMS usage.
- Static Astro/Next.js export delivers fast Lighthouse scores, easy Vercel/Netlify deployment, and zero monthly hosting cost — maximizing budget for design and conversion optimization.
- **Escalation trigger:** If client requires a self-managed listings feed (10+ properties, updated weekly), reconsider Tier 2 (CMS-backed). Flag via open questions.

---

## 2. Market Context — Asunción, Paraguay

- **Growing market:** Paraguay's real estate sector grew 31% since 2015; projected ~5% growth in 2025–2026. Asunción price-per-sqm rising across all categories.
- **Foreign investor interest:** Stable economy (investment-grade rating), low debt (35% GDP), net rental yields 6–10%. Some clients may be international — bilingual (es/en) option worth considering.
- **Professionalization trend:** Market maturing fast — quality presentation and conceptual clarity now differentiate agents from portals.
- **Digital behavior:** WhatsApp is the dominant contact channel in Paraguay and across Latin America. Phone calls remain important for older demographics. Web forms are secondary but expected for trust.
- **Portal competition:** InfoCasas.com.py and TuLugar.com dominate property search. A solo agent website should NOT try to compete as a portal — it should differentiate on personal brand, trust, and immediate contact.

---

## 3. Competitor Landscape (Paraguay / Asunción)

| Competitor | URL | Strengths | Weaknesses / Gaps |
|---|---|---|---|
| Brokers Agentes Inmobiliarios | brokers.com.py | Active listings, WordPress, neighborhood coverage | Generic brand, no strong personal agent story |
| Century 21 Paraguay | century21.com.py | Franchise brand, multi-agent | Impersonal, no local agent personality |
| InfoCasas | infocasas.com.py | Dominant portal, large inventory | Not an agent site — portal only |
| El Inmobiliario | elinmobiliario.com.py | Professional content, market intel | Commercial/brokerage focus, not lead-gen agent |
| H&J Real Estate | hyjrealestate.com.py | Bilingual, investor-focused | Niche (foreign investors), limited local coverage |

**Gap opportunity:** A solo/boutique agent site with strong personal brand, WhatsApp-first CTA, fast load times, and neighborhood-specific content can outperform generalist portals in local Google searches for specific barrios (e.g., "agente inmobiliario Villa Morra," "propiedades Carmelitas Asunción").

---

## 4. Recommended Page List (Tier 1 — 4 pages)

### Page 1: Home (`/`)
**Purpose:** First impression + immediate conversion. Above-the-fold hero with primary CTA. Filter leads before they scroll.
- Hero: agent photo or lifestyle property image, headline value prop ("Tu agente de confianza en Asunción"), sub-headline (neighborhood or specialty focus)
- Primary CTA strip: WhatsApp button + call button + "Ver Propiedades" button
- Featured listings or services (3–6 cards, static or manually curated)
- Trust signals strip: years of experience, transaction count, client testimonial highlights
- Secondary CTA: lead capture form ("¿Buscás una propiedad? Contame qué necesitás")
- Neighborhood/zona badges (barrios served)

### Page 2: Propiedades / Servicios (`/propiedades`)
**Purpose:** Show inventory or services; qualify intent; capture leads per property.
- If listings exist: property cards with photos, price, zone, bedrooms/bathrooms, WhatsApp inquiry button per card
- If no active listings system: services breakdown (Compra / Venta / Alquiler / Inversión) with lead form per service type
- Filter bar (type, barrio, price range) — static or lightweight JS, no database needed
- CTA after each card: "Consultar por WhatsApp" or "Solicitar Info"

### Page 3: Sobre Mí / Nosotros (`/sobre-mi`)
**Purpose:** Trust-building. The agent IS the product — this page closes skeptical leads.
- Professional headshot + bio (background, years in market, specialties)
- Certifications, affiliations (CAPI — Cámara de la Propiedad Inmueble Paraguay, if applicable)
- Client testimonials (3–5 with full name/initials and barrio reference)
- Transaction milestones (properties sold, years active, zones covered)
- Secondary CTA: WhatsApp / phone / form

### Page 4: Contacto (`/contacto`)
**Purpose:** Capture leads across all contact preferences.
- Lead form: name, phone, email, message, dropdown (Comprar / Vender / Alquilar / Consulta general)
- WhatsApp click-to-chat button (pre-filled message: "Hola, vi tu sitio web y quiero consultar sobre...")
- Phone number (click-to-call on mobile)
- Barrio map / coverage area (Google Maps embed or static SVG)
- Optional: office address or "solo con cita previa" note
- Business hours

**Optional — if SEO budget permits (+1 page):**
### Page 5: Blog / Guía de Barrios (`/guia-barrios`) — SEO Page
- Static landing: "Comprar propiedad en [Barrio], Asunción — Guía 2026"
- Covers 3–5 target barrios with description, average prices, lifestyle notes
- High local SEO value; targets long-tail queries with low competition
- CTA: "¿Buscás en [Barrio]? Hablemos"

---

## 5. Key Conversion Elements

### CTAs
- **Primary:** WhatsApp click-to-chat (sticky floating button on all pages, mobile-first)
- **Secondary:** Click-to-call phone number (tel: link, always visible on mobile)
- **Tertiary:** Lead capture form (name + phone + message = minimum fields; fewer fields = more submissions)
- CTA copy in local register: "Consultame," "Hablemos," "¿Te ayudo?" — avoid corporate tone

### Forms
- Max 4 fields on hero form: Nombre, Teléfono, ¿Qué buscás? (dropdown), Mensaje (optional)
- Full form on /contacto: add Email + dropdown for intent
- Form backend: Formspree (free tier) or Netlify Forms — no server needed
- Auto-reply email / WhatsApp confirmation recommended post-submission

### Trust Signals
- Agent photo (professional, approachable — not stock)
- Real testimonials with names and neighborhood references
- Transaction count / years active / zones covered (specific numbers outperform vague claims)
- CAPI membership badge (if applicable)
- InfoCasas / portal profile links (external validation)
- Google review widget or screenshot (requires GMB setup)
- SSL certificate (mandatory — HTTP sites lose trust in .py market)

### WhatsApp-First Design
- Floating WhatsApp button: bottom-right, always visible, all pages
- Pre-filled message with context: "Hola [Nombre], vi tu sitio web..."
- Mobile-optimized tap targets (44px minimum)
- WhatsApp number = same as GMB business number (consistency for local SEO)

---

## 6. Local SEO Requirements — Asunción, Paraguay

### Google My Business (GMB)
- Create/claim GMB profile: category "Agencia inmobiliaria" or "Agente inmobiliario"
- NAP consistency (Name, Address, Phone) across website, GMB, and any portal profiles
- Add service areas: target barrios (Villa Morra, Carmelitas, Recoleta, Mburucuyá, etc.)
- Upload 10+ property/agent photos
- Collect 5+ Google reviews at launch (client outreach)

### On-Page SEO
- Title tags: "[Nombre Agente] — Agente Inmobiliario en Asunción, Paraguay"
- Meta descriptions: include barrio names + action words (comprar, vender, alquilar)
- H1s: localized ("Propiedades en Venta en Asunción")
- Schema markup: `LocalBusiness`, `RealEstateAgent`, `ContactPoint`
- Open Graph tags for social sharing
- Sitemap.xml + robots.txt

### Keyword Targets (Spanish, local)
- "agente inmobiliario Asunción"
- "propiedades en venta Asunción"
- "alquiler departamentos [barrio] Asunción"
- "comprar casa [barrio] Paraguay"
- "inmobiliaria [barrio] Asunción"

### Technical SEO
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms (static site advantage)
- Mobile-first (majority of PY web traffic is mobile)
- Spanish-language hreflang (add `en` alternate only if bilingual)
- Image alt text in Spanish with location references
- `.py` domain strongly preferred for local trust and Google.com.py ranking

### Citation Building (post-launch)
- InfoCasas.com.py agent profile
- TuLugar.com agent listing
- Properstar.com profile
- Facebook Business Page (linked to website)
- Instagram (linked to website) — high usage in PY real estate market

---

## 7. Open Questions for Operator

The following items must be answered before ARCHITECT can begin. Numbered for easy reference in approval reply.

1. **Legal/trading name** — What is the client's full name and/or agency name? (Needed for domain, GMB, schema markup)
2. **Solo agent or team?** — Is this a single agent or a small office? Affects "Sobre Mí" vs. "Sobre Nosotros" framing.
3. **Property types** — Residential only? Commercial? Rentals? Land? Industrial? (Affects page content and keyword strategy)
4. **Target barrios/zones** — Which neighborhoods in Asunción does the agent cover? (Critical for local SEO targeting)
5. **Brand assets** — Do they have a logo, brand colors, or agent photos? Or is branding part of scope?
6. **Active listings count** — How many properties does the agent currently have listed? (Determines if /propiedades is a listings page or a services page)
7. **Listings integration** — Do they post to InfoCasas/TuLugar? Do they want the website to mirror those listings, or is it separate? (Could escalate to Tier 2 if sync is required)
8. **Domain** — Is a domain already registered? If not, preferred name (ideally `.com.py`)?
9. **Hosting** — Any existing hosting? Or greenfield? (Vercel/Netlify recommended for static)
10. **Language** — Spanish only, or bilingual Spanish/English? (Relevant if targeting foreign investors)
11. **Contact preference weighting** — WhatsApp, phone call, or form — which is the agent's primary preferred lead channel?
12. **Competitor references** — Any local sites the client likes or wants to differentiate from?

---

## 8. Suggested Tech Stack

### Tier 1 (Recommended — Static Lead Gen)
| Layer | Choice | Rationale |
|---|---|---|
| Framework | Astro 4.x | Static-first, excellent Lighthouse scores, component flexibility |
| Styling | Tailwind CSS 3.x | Rapid UI, consistent design system, no runtime overhead |
| Forms | Formspree (free) or Netlify Forms | Zero backend, spam protection, email notification |
| Hosting | Vercel or Netlify (free tier) | Automatic deploys, CDN, SSL, edge performance |
| Analytics | Google Analytics 4 | Standard; required for GMB integration |
| Maps | Google Maps Embed (free) | Coverage area visualization on /contacto |
| CMS (optional) | Decap CMS (formerly Netlify CMS) | Optional lightweight CMS layer if client wants to edit content — no server needed |
| Domain | `.com.py` preferred | Local trust signal; ~$20–40/year via NIC Paraguay |

### Tier 2 (If CMS or Listings Required)
| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 14 App Router | Hybrid static/SSR; best CMS integration |
| CMS | Sanity.io (free tier) or WordPress headless | Sanity for custom schemas; WP if client needs familiarity |
| Styling | Tailwind CSS 3.x | Same as Tier 1 |
| Hosting | Vercel | Native Next.js support |
| Forms | Same as Tier 1 | — |
| Analytics | GA4 | — |

**Budget note:** At $2,500, Tier 1 is achievable with room for design polish. Tier 2 would be feasible but leaves less budget for QA, copywriting, and post-launch iteration.

---

## 9. Summary

| Field | Value |
|---|---|
| Tier | **Tier 1 — Static Lead Gen** |
| Page count | **4 pages** (5 if SEO blog page approved) |
| Primary CTA | WhatsApp click-to-chat + call button |
| Open questions | **12** |
| Domain recommendation | `.com.py` |
| Tech stack | Astro + Tailwind + Formspree + Vercel |
| Timeline fit | ✅ 3 weeks achievable for Tier 1 |
| Budget fit | ✅ $2,500 sufficient for Tier 1 |
| Escalation risk | Listings integration could push to Tier 2 |
