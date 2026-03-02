

## Investor One-Pager — `/investor_1sheet`

Build the uploaded HTML as a new React page at `/investor_1sheet`, preserving its distinct **light/cream aesthetic** (this is intentionally different from the dark main site — it's a standalone document meant to feel like a printed investor brief).

### Approach

Create a single self-contained page component that faithfully reproduces the HTML document using scoped CSS (CSS modules or a dedicated stylesheet). The page uses **Cormorant Garamond + Jost** (loaded via Google Fonts), a cream background (`#FAF8F4`), gold accents (`#B8924A`), and a narrow 720px column — deliberately departing from the main site's dark theme to read as a formal document.

### Files

| File | Action |
|------|--------|
| `src/pages/InvestorOneSheet.tsx` | Create — full page component with all sections |
| `src/styles/investor-onesheet.css` | Create — scoped styles (cream palette, Cormorant Garamond, stat grids, phase strip, signal box) |
| `src/App.tsx` | Edit — add `/investor_1sheet` route |

### Sections (from the HTML)

1. **Header** — Logo wordmark + "Private Investor Overview · Confidential" label
2. **Hero** — "The cost of copying a person just hit *zero.*" headline, lead paragraph, pull quote
3. **The Problem** — SAG-AFTRA/AB 2602 context + 3-stat grid ($0 / 0 standards / 10–25M creators)
4. **The Product** — Attestation kit tag list + public verification description
5. **Early Signal** — Dark signal box with purchase-intent framing
6. **Market Opportunity** — TAM sizing ($20–50M ARR beachhead, $100B+ creator economy)
7. **The Path** — 4-phase roadmap strip (Phase 1 highlighted)
8. **Founder** — Eric Levin bio in two-column layout
9. **CTA** — "Let's talk about *what comes next.*" with email + request buttons
10. **Footer** — Logo + confidentiality note

### Implementation notes

- Scroll-triggered fade-in via `IntersectionObserver` (same pattern as the HTML, implemented with a `useEffect` hook — no framer-motion dependency to keep it feeling like a standalone document)
- `@keyframes rise` animation for header/hero elements
- Responsive: stat/phase grids collapse to 2-col on mobile, founder block to single column
- CTA email links to `eric@intinuous.com`, "Request Full Brief" as `mailto:` or `/contact` link
- Google Fonts loaded via CSS `@import` in the scoped stylesheet

