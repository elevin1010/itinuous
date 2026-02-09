

# Revised Problem Section — Plain-Spoken, Scenario-Driven

## Overview

Replace the abstract language ("attack surface," "verifiable origin," "recognized authority") with concrete, relatable scenarios that anyone can immediately understand. The section should feel like a calm wake-up call — not technical, not fear-driven, just honest.

## Content Structure

Three beats, all centered, clean typography:

### Beat 1 — Opening Line
> At some point, identity stops being theoretical.

Simple, declarative. No badge pill — just the statement as a large heading.

### Beat 2 — Scenario List
A short list of real moments when identity actually matters:

- Someone questions whether an image of you is real
- A platform asks you to prove you're the original source
- Your name, face, or voice is used without permission
- A client or collaborator needs to know they're dealing with the real you

Each item appears with a subtle staggered fade-in. Styled as clean bullet points with muted foreground text — no cards, no icons, no decoration.

### Beat 3 — The Punchline
> In those moments, screenshots and profiles don't hold up.
> **Proof does.**

"Proof does." gets emphasis — larger weight, primary gold color. This is the emotional bridge into the What Is section.

### Closing Divider
A quiet horizontal line with centered text: "That's the gap Intinuous exists to fill" — transitions naturally into What Is.

## Visual Treatment

- Clean centered layout, `max-w-3xl`, generous whitespace
- No cards, no grids, no stat callouts — just typography
- The scenario list uses simple bullet points (gold-tinted dots) with comfortable spacing
- Framer Motion scroll-triggered fades matching existing section patterns
- Subtle parallax background element (matching existing decorative circles) for depth
- Section padding matches existing pattern: `py-24 md:py-32`

## Technical Details

### Modify: `src/components/home/ProblemSection.tsx`
- Replace all existing content with the new plain-spoken structure
- Keep the same framer-motion patterns and background treatments
- Remove the "attack surface" heading, the bulleted "who is allowed" list, the stats callout box, and the "verifiable origin / recognized authority / accountable history" cards
- Much simpler component — mostly text with motion wrappers

### Verify: `src/pages/Index.tsx`
- ProblemSection is already imported and placed between Hero and WhatIsSection (from previous implementation) — no changes needed here

## Section Flow (unchanged)

```text
Hero
  |
Problem Section (revised content)
  |
What Is
  |
(rest unchanged)
```

