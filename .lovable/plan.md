

# Floating Buzzword Cloud on Hero Section

## Overview

Add a subtle, atmospheric word cloud to the hero section background that displays key brand terms -- Provenance, Continuity, Authenticity, Credibility, Verification, Authorization, Attestation, Infrastructure -- at varying sizes, rotations, and low opacities. The words will float gently using Framer Motion, reinforcing brand identity without competing with the headline.

## Visual Design

- Words scattered across the hero background at very low opacity (5-12%)
- Mixed font sizes (text-lg to text-6xl) and slight rotations for organic feel
- Subtle, slow floating animation (gentle vertical drift, 15-30s loops)
- Positioned behind all content (z-0), beneath the existing grid pattern and gold glows
- Uses the primary gold color at low opacity to stay on-brand
- Words are non-interactive (pointer-events-none) so they don't interfere with clicks

## Technical Details

### Modified: `src/components/home/HomeHeroSection.tsx`

- Add a buzzwords array with position, size, rotation, and animation config for each word
- Render them as absolutely-positioned `motion.span` elements inside the hero section
- Each word gets a unique slow float animation with staggered durations so they feel organic
- All words sit below the content z-index and use `select-none pointer-events-none`

No new files or dependencies needed -- just Framer Motion (already used) and Tailwind classes.

