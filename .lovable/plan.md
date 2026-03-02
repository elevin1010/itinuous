

## Homepage V2 — Build as Separate Route

Build the revised homepage as `/v2` (`IndexV2.tsx`) so you can compare both versions side-by-side before swapping.

### Structure

7 new section components in `src/components/home-v2/`, plus reuse of `Navbar` and `Footer`:

```text
IndexV2.tsx
├── Navbar (existing)
├── HeroV2            — "Own yourself." + McConaughey reference
├── TheMomentSection  — "It's not coming. It's here."
├── TheGapSection     — "There's no authoritative record of you."
├── WhatWeDoSection   — "Verify once. Own the record." (3 steps)
├── InfraSection      — "The beginning of a permission layer."
├── AudienceV2Section — Revised intro, tightened tile copy
├── PrincipleSection  — "Your identity is not content." (no IS/ISN'T list)
├── EarlyAccessCTA    — Tightened invitation-only CTA
└── Footer (existing)
```

### Content (verbatim from your doc)

Each component uses the exact copy you provided. No editorial changes. Visual treatments follow the existing design system: `landio-card`, `badge-pill`, `text-gradient-gold`, `text-emphasis-italic`, gold atmospheric glows, framer-motion scroll reveals.

### Key design choices

- **HeroV2**: Large "Own yourself." headline with gold gradient. McConaughey reference as a secondary paragraph (unattributed, as specified). Two-line subhead structure.
- **TheMomentSection**: Opening pull-quote style ("It's not coming. It's here.") with emphasized closing line "Waiting is no longer a neutral position." in gold.
- **TheGapSection**: Text-forward, no cards. Closing callout: "A watermark protects a file. It doesn't protect the person behind it." styled as a bordered quote block.
- **WhatWeDoSection**: 3-column step cards (same layout as current `HomeSolutionSection`), copy swapped to your revised text.
- **InfraSection**: Minimal, text-forward. No timeline/roadmap graphic. Three short paragraphs signaling vision without over-claiming.
- **AudienceV2Section**: Same 6 tiles, revised intro line, each description trimmed to one sentence.
- **PrincipleSection**: Replaces `ClarificationSection`. No IS/ISN'T columns. Just headline + two short paragraphs.
- **EarlyAccessCTA**: Tighter than current `FinalCTASection`. Closes with "There's only one you. The time to establish that record is before it's contested."

### Files created
- `src/pages/IndexV2.tsx`
- `src/components/home-v2/HeroV2.tsx`
- `src/components/home-v2/TheMomentSection.tsx`
- `src/components/home-v2/TheGapSection.tsx`
- `src/components/home-v2/WhatWeDoSection.tsx`
- `src/components/home-v2/InfraSection.tsx`
- `src/components/home-v2/AudienceV2Section.tsx`
- `src/components/home-v2/PrincipleSection.tsx`
- `src/components/home-v2/EarlyAccessCTA.tsx`

### Files modified
- `src/App.tsx` — add `/v2` route pointing to `IndexV2.tsx`

### What stays untouched
- All current `src/components/home/` files and `src/pages/Index.tsx` remain as-is
- Once you're happy with V2, a single swap makes it the default `/` route

