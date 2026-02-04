

# Homepage Transformation: Consumer Sales Funnel

This plan transforms the Intinuous website from an investor-focused explainer into a consumer-facing sales funnel for the $40/year Intinuous Proof product. It includes migrating current content to `/investors`, creating a bold new homepage with offground.solutions-inspired effects, and preparing for Stripe integration.

---

## Overview

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                           CURRENT STATE                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│  Homepage (/)           │  /investors                                       │
│  - Hero                 │  - Login placeholder                              │
│  - Problem/Shift        │  - Request access form                            │
│  - Solution             │                                                   │
│  - Audience             │                                                   │
│  - How It Works         │                                                   │
│  - Product Modules      │                                                   │
│  - Roadmap/Vision       │                                                   │
│  - CTA                  │                                                   │
└─────────────────────────────────────────────────────────────────────────────┘

                                    ↓

┌─────────────────────────────────────────────────────────────────────────────┐
│                            NEW STATE                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│  Homepage (/)                     │  /investors                             │
│  - Hero (massive typography)      │  - Full explainer content:              │
│  - What Intinuous Proof Is        │    • Problem/Shift                      │
│  - Who It's For                   │    • Solution                           │
│  - Core Benefits                  │    • Audience                           │
│  - How It Works (V1)              │    • How It Works                       │
│  - Why This Exists                │    • Product Modules                    │
│  - Pricing ($40/year)             │    • Vision/Roadmap                     │
│  - What This Is/Isn't             │    • CTA                                │
│  - Roadmap Transparency           │  - Login portal (preserved)             │
│  - Final CTA                      │                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Phase 1: Create New Homepage Components

### 1.1 New Hero Section with Massive Typography

Inspired by offground.solutions, the new hero will feature:
- Massive bottom-anchored typography effect ("INTINUOUS PROOF")
- Atmospheric gold gradient glow (adapted from current palette)
- "Verify once. Prove forever." as the primary headline
- Scroll-triggered text reveal animations
- Two CTAs: "Start Verification" (primary) + "See how it works" (secondary)

Create new file: `src/components/home/HomeHeroSection.tsx`

### 1.2 What Is Section

- "Intinuous Proof is an identity continuity layer" messaging
- Four "No" statements styled as quiet anti-features
- "Just proof." as the closer

Create new file: `src/components/home/WhatIsSection.tsx`

### 1.3 Who It's For Section

Adapt the existing `AudienceSection.tsx` with the new copy:
- Same 5 audience segments with updated descriptions
- Remove the organizational risk callout (investor-focused)
- Keep the tabbed desktop / card mobile pattern

Create new file: `src/components/home/AudienceSection.tsx`

### 1.4 Core Benefits Section

Four benefit cards in a 2x2 grid:
- Private Certificate
- Public Proof Page
- Continuity Over Time
- You Control Exposure

Create new file: `src/components/home/BenefitsSection.tsx`

### 1.5 How It Works Section (V1)

Simplified 3-step flow:
1. Verify once
2. Receive your private certificate
3. Share proof when needed

With the confident closer: "That's it. No recurring re-verification. No screenshots. No 'trust me bro.'"

Create new file: `src/components/home/HowItWorksSection.tsx`

### 1.6 Why This Exists Section

Trust framing with:
- "Looking real isn't proof. Continuity is."
- Context about AI/deepfakes making appearance meaningless
- Problem definition

Create new file: `src/components/home/WhyExistsSection.tsx`

### 1.7 Pricing Section

Bold, unapologetic pricing:
- "$40 / year" as massive typography
- Feature bullets
- "No free tier. If you care about your identity, you secure it."
- Primary CTA: "Start Verification"

Create new file: `src/components/home/PricingSection.tsx`

### 1.8 What This Is / Isn't Section

Four "not" items with checkmarks/X:
- Not a social profile
- Not a KYC resale business
- Not biometric surveillance
- A user-owned proof layer

Create new file: `src/components/home/ClarificationSection.tsx`

### 1.9 Roadmap Transparency Section

Two-column layout:
- Version 1 (now): current features
- What's coming: future features

Create new file: `src/components/home/RoadmapSection.tsx`

### 1.10 Final CTA Section

- "There's only ONE you. Prove it."
- Two CTAs: Start Verification + Learn more about Intinuous

Create new file: `src/components/home/FinalCTASection.tsx`

---

## Phase 2: Visual Effects (Offground-Inspired)

### 2.1 Massive Typography Animation

Add CSS keyframes and utility classes for:
- Full-viewport-width text that scales with the container
- Text that appears to rise from the bottom of the viewport
- Gold gradient fill with subtle animation

Update: `src/index.css`

### 2.2 Scroll-Triggered Text Reveals

Use Framer Motion's `useInView` and staggered animations:
- Words animate in sequence (like "Patternbreakers..." on offground)
- Opacity + subtle Y translation

Applied throughout new sections.

### 2.3 Atmospheric Glow Enhancement

Enhance the existing gradient mesh with:
- Larger, more diffuse gold orbs
- Subtle pulsing animation on scroll
- Mouse-following glow (already exists, will be enhanced)

Update: `src/index.css` + component styles

---

## Phase 3: Migrate Investor Content

### 3.1 Update Investors Page

Transform `/investors` from a login-only page to a full content portal:
- Keep the login form at the top
- Add all current homepage sections below
- Sections: Problem, Solution, Audience, How It Works, Product Modules, Vision/Roadmap, CTA

Update: `src/pages/Investors.tsx`

### 3.2 Import Existing Section Components

The investor page will import and render:
- `ProblemSection` (The Shift)
- `SolutionSection`
- `AudienceSection` (original version)
- `HowItWorksSection` (original version)
- `ProductModulesSection`
- `RoadmapSection`
- `CTASection`

These components remain unchanged.

---

## Phase 4: Update Navigation

### 4.1 Update Navbar Links

Change navigation from section anchors to new homepage structure:
- Remove: The Shift, Approach, Who It's For, Vision
- Add: How It Works, Pricing
- Keep: Investors link
- Change CTA: "Get in Touch" → "Start Verification"

Update: `src/components/layout/Navbar.tsx`

### 4.2 Create Consumer-Focused Navbar

Option to create a simpler navbar for the homepage:
- Logo (left)
- Minimal links (center): How It Works, Pricing
- CTA (right): Start Verification

---

## Phase 5: Stripe Integration Preparation

### 5.1 Enable Stripe

Use the Stripe connector to set up:
- $40/year subscription product
- Checkout flow

Note: This requires enabling Stripe through the Lovable integration.

### 5.2 Create Checkout Flow

- "Start Verification" button triggers Stripe checkout
- Success/cancel redirect pages
- Payment confirmation state

Create new files:
- `src/pages/Checkout.tsx`
- `src/pages/CheckoutSuccess.tsx`

---

## Phase 6: New Homepage Assembly

### 6.1 Update Index Page

Replace the current homepage with the new consumer-focused structure:

```text
HomeHeroSection
   ↓
WhatIsSection
   ↓
AudienceSection (new)
   ↓
BenefitsSection
   ↓
HowItWorksSection (new)
   ↓
WhyExistsSection
   ↓
PricingSection
   ↓
ClarificationSection
   ↓
RoadmapSection (new)
   ↓
FinalCTASection
   ↓
Footer
```

Update: `src/pages/Index.tsx`

---

## File Changes Summary

### New Files (10)
```text
src/components/home/HomeHeroSection.tsx
src/components/home/WhatIsSection.tsx
src/components/home/AudienceSection.tsx
src/components/home/BenefitsSection.tsx
src/components/home/HowItWorksSection.tsx
src/components/home/WhyExistsSection.tsx
src/components/home/PricingSection.tsx
src/components/home/ClarificationSection.tsx
src/components/home/RoadmapSection.tsx
src/components/home/FinalCTASection.tsx
```

### Modified Files (4)
```text
src/pages/Index.tsx          - New homepage structure
src/pages/Investors.tsx      - Add migrated content sections
src/components/layout/Navbar.tsx  - Updated navigation
src/index.css                - New animation utilities
```

---

## Technical Details

### Animation Utilities to Add

```css
/* Massive typography scaling */
.text-massive {
  font-size: clamp(4rem, 15vw, 12rem);
  line-height: 0.85;
  letter-spacing: -0.03em;
}

/* Text reveal animation */
@keyframes text-reveal {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-text-reveal {
  animation: text-reveal 0.8s ease-out forwards;
}
```

### Framer Motion Patterns

All new sections will use consistent animation patterns:
- `initial={{ opacity: 0, y: 30 }}`
- `whileInView={{ opacity: 1, y: 0 }}`
- `viewport={{ once: true, margin: "-10%" }}`
- Staggered children with `transition={{ delay: index * 0.1 }}`

### Mobile Responsiveness

All sections will follow the existing mobile-first approach:
- Stack layouts on mobile
- Larger touch targets for CTAs
- Simplified animations on mobile (respecting `prefers-reduced-motion`)

---

## Implementation Order

1. Create new home component directory and base files
2. Build HomeHeroSection with massive typography effect
3. Build remaining sections (top to bottom)
4. Update Index.tsx with new structure
5. Migrate content to Investors page
6. Update Navbar
7. Add CSS utilities for new animations
8. Enable and integrate Stripe (separate step)
9. Test responsive behavior and animations

