
# Pre-Launch Site Update

## Summary
Transition the site from "live product" to "pre-launch" mode by swapping CTAs, softening pricing language, moving the voice agent to the contact page, and adding branded social sharing metadata.

---

## Changes

### 1. Swap all "Start Verification" CTAs to "Request Early Access"
**Files:** `HomeHeroSection.tsx`, `PricingSection.tsx`, `FinalCTASection.tsx`, `Navbar.tsx`

- Replace every `mailto:hello@intinuous.com?subject=Start%20Verification` link with `Link to="/contact"` routing
- Change button text from "Start Verification" to "Request Early Access"
- Update the hero "See how it works" secondary CTA to remain as-is
- Update mobile menu "Get Started" button to also route to `/contact` with "Request Early Access" text

### 2. Reframe Pricing Section
**File:** `PricingSection.tsx`

- Change badge from "Simple Pricing" to "Planned Pricing"
- Remove the "No free tier" / "If you care about your identity, you secure it" stance block at the bottom of the card entirely
- Keep the price, features, and monthly reframe intact so visitors understand value

### 3. Update Roadmap to "Launching Soon"
**File:** `HomeRoadmapSection.tsx`

- Change "Version 1 (now)" to "Version 1 (launching soon)"
- This signals the product exists but isn't publicly available yet

### 4. Move ElevenLabs Voice Agent to Contact Page Only
**Files:** `App.tsx`, `Contact.tsx`

- Remove the global `<VoiceAgentOrb />` from `App.tsx` (currently renders on every page)
- Add `<VoiceAgentOrb />` inside the `Contact.tsx` page component so visitors can still ask questions there

### 5. Add Branded OG Image and Social Meta
**File:** `index.html`

- Replace the default Lovable OG image (`lovable.dev/opengraph-image-p98pqg.png`) with a branded Intinuous image
- This requires creating or providing a branded OG image (1200x630px recommended). For now, we can point to the Intinuous logo mark or generate a simple dark card with the tagline. If you have a specific image you'd like to use, share it and we'll wire it up.

### 6. Update Footer Copyright Year
**File:** `Footer.tsx`

- Change `2025` to `2026` to reflect the current year

---

## Technical Details

- All CTA buttons currently using `<a href="mailto:...">` will become `<Link to="/contact">` from react-router-dom, keeping navigation client-side
- The ElevenLabs widget script (`VoiceAgentOrb`) will only load on `/contact`, reducing page weight on all other routes
- No new dependencies required
- No database or backend changes needed
