

## Deploy Talent Deck v2 as `/deck/talent`

### What we're building
Convert this self-contained HTML deck into a React page at `/deck/talent` that preserves the exact visual design, scroll-reveal animations, and section structure. It already links to `/deck/contact` for the CTA -- that's already live.

### Approach

**1. Create `src/styles/talent-deck.css`**
Port the full CSS from the HTML file (lines 9-178) into a dedicated stylesheet, scoped under `.talent-deck` class to avoid collisions with the rest of the app. This is the same pattern used by `investor-onesheet.css`.

**2. Create `src/pages/TalentDeck.tsx`**
A standalone React page (no Navbar/Footer from the main site) containing:
- Sticky nav with logo mark, "For Talent & Representation" badge, and "Get in Touch" CTA linking to `/deck/contact`
- All 12 sections converted to JSX (cover, reality, gap, analogy, kit, where, matters, claim, positioning, whynow, future, CTA)
- Scroll-reveal via `IntersectionObserver` in a `useEffect` (same pattern as the HTML's script)
- Obfuscated email rendering (the `atob` trick from the original script) to reduce spam scraping
- Logo mark images using the existing `intinuous-mark-clean.png` asset
- Footer with branding

**3. Add route in `App.tsx`**
`<Route path="/deck/talent" element={<TalentDeck />} />`

**4. Add `noindex` meta**
The page will include a `<Helmet>`-style approach (or `useEffect` to set meta) with `robots: noindex` since this is a private deck.

### What stays untouched
- Existing `/deck/contact` page -- no changes
- No backend, auth, or database changes
- No modifications to existing components or styles

