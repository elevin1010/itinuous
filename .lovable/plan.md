

# Remove Buzzword Cloud from Homepage Hero

## What Changes

Remove the entire floating buzzword cloud (Provenance, Continuity, Authenticity, etc.) from the homepage hero background. The atmospheric gold glows and grid pattern already present will remain as the sole background treatment.

## Technical Detail

**File: `src/components/home/HomeHeroSection.tsx`**

- Delete lines 17-57 — the entire `<div className="absolute inset-0 overflow-hidden pointer-events-none select-none">` block containing the 8 animated `<motion.span>` buzzword elements
- The existing atmospheric gold glow orbs (lines 62-64) and grid pattern (line 60) stay untouched

No other files affected. One deletion, no new code.

