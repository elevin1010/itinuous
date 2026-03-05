

## Light Contact Page for Decks

### Concept

Create a new route `/contact/deck` (or `/deck-contact`) that serves as a light-themed contact page matching the deck's visual language — cream backgrounds, Cormorant Garamond + Jost typography, warm gold accents. Same 3-field form (name, email, exposure), same Web3Forms integration, but with a hidden field `source: "deck"` so submissions are distinguishable in your inbox.

### Design Approach

**Visual language (matching the deck):**
- Background: `#FAF8F4` (cream) with subtle noise texture overlay
- Typography: Cormorant Garamond (headings, serif italic accents), Jost (body/labels/inputs)
- Colors: ink `#181614`, gold `#B8924A`, muted `#7A7570`, rules `#E2DDD8`
- Inputs: white background, `#E2DDD8` borders, no rounded-full — squared/minimal
- CTA button: ink background `#181614`, pill-shaped, hover → gold
- Gold accent bar on left side (like deck's `gold-bar` pattern)
- No Navbar or Footer — standalone page, just logo mark + "INTINUOUS" at top, minimal footer line ("Confidential · intinuous.com")

**Deck attribution in submissions:**
- Hidden form field: `source: "talent-deck"` sent to Web3Forms
- Email subject line: `"Early Access Request (Deck)"` vs `"Early Access Request"` on the main site
- This lets you filter/tag deck leads in your inbox immediately

### Implementation

1. **Add Google Fonts** — Cormorant Garamond + Jost via `index.html` preconnect (Jost is close to existing Montserrat, but the deck uses it specifically)

2. **Create `src/pages/DeckContact.tsx`** — Standalone light-themed contact page:
   - No `<Navbar>` or `<Footer>` — self-contained with minimal logo header and one-line footer
   - Cream background with CSS noise texture (inline SVG, matching deck)
   - Gold left-bar accent on the form card
   - Same `contactSchema` validation, same Web3Forms endpoint
   - Hidden field `source: "talent-deck"` + modified subject line
   - Success state styled in the cream/gold palette

3. **Add route** in `App.tsx`: `<Route path="/deck/contact" element={<DeckContact />} />`

### What stays untouched
- Existing `/contact` page — no changes
- No backend/API/auth changes
- No changes to existing components or styles

