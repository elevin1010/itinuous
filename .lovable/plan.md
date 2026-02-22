

# Intinuous Site Redesign

## Overview
A full content and structural redesign of the homepage, navigation, footer, and contact form. The page flow is simplified from 11 sections to 8, with new copy throughout and a shift from "product you can buy" to "invitation-only early access."

---

## Section Map (Current to New)

```text
CURRENT                          NEW (from brief)
─────────────────────────────    ─────────────────────────────
HomeHeroSection                  Section 1 - Hero (rewrite)
ProblemSection                   Section 2 - The Problem (rewrite + stat cards)
WhatIsSection                    REMOVE (merged into Solution)
WhyExistsSection                 REMOVE (merged into Solution)
HomeAudienceSection              Section 4 - Who It's For (rewrite)
BenefitsSection                  REMOVE (merged into Solution)
HomeHowItWorksSection            Section 3 - The Solution (new, includes steps)
PricingSection                   Section 7 - Access (3 tiers, no prices)
ClarificationSection             Section 5 - Privacy Commitment (rewrite)
HomeRoadmapSection               Section 6 - Roadmap (rewrite)
FinalCTASection                  Section 8 - Closing Hero (rewrite)
```

---

## Detailed Changes

### 1. Index.tsx - New section order
Remove imports for `WhatIsSection`, `WhyExistsSection`, `BenefitsSection`. Reorder remaining sections to match the brief's flow:
Hero, Problem, Solution, Who It's For, Privacy, Roadmap, Access, Closing Hero.

### 2. HomeHeroSection.tsx - Full rewrite
- Headline: "Your face, your key." (largest text on site, typographically dominant)
- Subheadline: new AI/likeness copy from brief
- CTA: "Request Early Access" (links to /contact)
- Trust line beneath: "Private by default. No data resale. No biometric marketplace."
- Remove the extended context block and scroll indicator
- Keep atmospheric glows and logo mark

### 3. ProblemSection.tsx - Full rewrite
- Section label: "The Problem"
- Headline: "Looking real is no longer proof."
- Body: new paragraphs from brief ending with "Proof does."
- Replace scenario list with 3 problem stat cards (deepfake fraud, no permission standard, no technical recourse)
- Keep parallax and atmospheric elements

### 4. New: SolutionSection (replaces WhatIs + Benefits + HowItWorks)
Create `src/components/home/HomeSolutionSection.tsx`:
- Section label: "What Intinuous Does"
- Headline: "One verified record. One key. Yours forever."
- Body: key/likeness metaphor from brief
- 3 numbered steps (Verify once, Receive your key, Share proof)
- Closer: "No recurring re-verification. No screenshots. No 'trust me.'"

### 5. HomeAudienceSection.tsx - Copy rewrite
- Headline: "For anyone whose face has value -- and vulnerability."
- Updated 6 segments with new copy from brief (Actors and Performers, Creators and Influencers, Executives and Public Figures, Parents, Organizations and Studios, Legal and Compliance)
- Each card gets the brief's description paragraph

### 6. ClarificationSection.tsx - Rewrite as Privacy Commitment
- Headline: "Your identity is not content."
- Body: "Intinuous is built on one principle: your data belongs to you..."
- IS list updated: "A user-owned proof layer", "Private and verifiable without re-exposure", "Permanent identity continuity you control", "Infrastructure, not a platform"
- ISN'T list stays same
- Remove the "It's infrastructure" closer (redundant with IS list)

### 7. HomeRoadmapSection.tsx - Restructured
- Section label: "What's Coming"
- Headline: "Built deliberately. Expanding with purpose."
- Version 1 card stays similar (launching soon)
- "On the roadmap" items rewritten with named features from brief:
  - Likeness Keys for AI Systems (with description)
  - Credential Stacking
  - Legacy and Estate Management
  - Organizational Verification

### 8. PricingSection.tsx - Becomes Access Section
Complete rewrite as invitation-only access:
- Section label: "Early Access"
- Headline: "Intinuous is currently invitation only."
- Body: first cohort copy from brief
- 3 tier cards (no prices): Individual, Agency and Management, Studio and Enterprise
- Each card lists features from brief
- CTA: "Request Early Access"
- Small line: "We respond to every inquiry personally. No automated sequences."
- Section id changes from "pricing" to "access"

### 9. FinalCTASection.tsx - Closing Hero rewrite
- Headline: "There's only one you. Let's keep it that way."
- Body: invitation-only cohort copy
- CTA: "Request Early Access"
- Small line: "We respond to every inquiry personally. No automated sequences. Confidential inquiries welcome."
- Full-width dark cinematic feel (expand padding/glow)

### 10. Navbar.tsx
- Change "Pricing" nav link to "Access" pointing to `#access`
- Add "Who It's For" link pointing to `#audience`
- Nav order: How It Works, Who It's For, Access, Contact
- Keep "Early Access" CTA button style on desktop (already "Request Early Access" on mobile)

### 11. Footer.tsx
- Add tagline: "Identity Continuity Layer" beneath logo
- Add "Your identity is infrastructure. Treat it that way." as closing line
- Copyright stays 2026
- Links: Privacy, Terms (Legal), Contact

### 12. Contact.tsx - Simplified form
- Remove Subject field
- Replace Message field with: "Describe your identity exposure in a sentence."
- 3 fields only: Name, Email, open question
- Update schema to match (remove `subject`, rename `message` to `exposure`)
- Keep Web3Forms integration

---

## Files Modified (12 files)
| File | Action |
|------|--------|
| `src/pages/Index.tsx` | Remove 3 imports, reorder sections |
| `src/components/home/HomeHeroSection.tsx` | Full copy rewrite |
| `src/components/home/ProblemSection.tsx` | Full copy rewrite + stat cards |
| `src/components/home/HomeSolutionSection.tsx` | NEW file (replaces 3 sections) |
| `src/components/home/HomeAudienceSection.tsx` | Copy rewrite |
| `src/components/home/ClarificationSection.tsx` | Copy rewrite as Privacy |
| `src/components/home/HomeRoadmapSection.tsx` | Restructured content |
| `src/components/home/PricingSection.tsx` | Full rewrite as Access tiers |
| `src/components/home/FinalCTASection.tsx` | Copy rewrite |
| `src/components/layout/Navbar.tsx` | Nav links updated |
| `src/components/sections/Footer.tsx` | Tagline + closing line added |
| `src/pages/Contact.tsx` | Simplified to 3 fields |

## Files Removed (3 files)
| File | Reason |
|------|--------|
| `src/components/home/WhatIsSection.tsx` | Merged into Solution |
| `src/components/home/WhyExistsSection.tsx` | Merged into Solution |
| `src/components/home/BenefitsSection.tsx` | Merged into Solution |

---

## No changes to
- Design system (index.css, tailwind.config)
- Other pages (Creators, Investors, Legal, Privacy, LogoDownload)
- UI components
- Dependencies

