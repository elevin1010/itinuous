

# Certificate Watermark Repositioning + Elephant Family

## Overview
Reposition the phoenix (top-right, ~100px, no torch), move guilloche to bottom-right, and add an elephant family scene in the bottom-left where a lead adult carries a Statue-of-Liberty-style torch that illuminates the path forward for two calves walking ahead.

## Layout

```text
┌──────────────────────────────────┐
│  [header content]       Phoenix  │
│                         ~100px   │
│                                  │
│  [fields, pixel sig, etc.]       │
│                                  │
│                                  │
│  🐘🐘(calves)🐘🐘(adults)       │
│  ←torch light→    Guilloche      │
│  [MRZ + QR]                      │
└──────────────────────────────────┘
```

The elephant procession reads right-to-left: adults on the right (torch-bearer furthest right), calves in front (to the left). The torch light radiates forward (leftward and slightly down), illuminating the calves' path.

## Changes

### 1. `src/components/certificate/PhoenixWatermark.tsx` — Strip down and reposition
- Move anchor from center to top-right: `cx = width * 0.80`, `cy = height * 0.16`
- Scale down so wingspan ≈ 100px: reduce scale multiplier and cap wingSpan
- **Remove**: entire inverted torch section (handle, cross-hatching, flame, dripping embers), radiating rays, broken chain links
- **Keep**: bird body, wings, feathers, tail, head crest

### 2. `src/components/certificate/GuillochePattern.tsx` — Bottom-right only
- Spirograph centers: X range `0.55 + rng() * 0.35`, Y range `0.55 + rng() * 0.35`
- Central rosette: move from `(0.5, 0.45)` to `(0.75, 0.75)`
- Reduce max radius from `80 + rng() * 100` to `50 + rng() * 60` to keep it contained

### 3. `src/components/certificate/ElephantFamily.tsx` — New component
Canvas-drawn scene in the bottom-left (~180px wide):

**Composition (right to left):**
- **Lead adult** (rightmost, largest): carries a Statue-of-Liberty-style torch held high in trunk. Tallest silhouette (~45px tall)
- **Second adult** (slightly left and behind): slightly smaller, walking alongside
- **Two calves** (front/left of the adults): smaller silhouettes (~20-25px tall), walking ahead — the ones being "shown the way"

**Torch illumination effect:**
- Torch flame drawn at the tip of the lead adult's raised trunk
- A radial gradient emanates from the flame position, extending **forward** (leftward) to light the calves' path
- Gradient: gold `rgba(215, 178, 90, 0.25)` at center → transparent at ~150px radius
- Elephants are drawn as closed bezier-curve silhouette paths
- Rendering technique: draw elephant paths, clip to them, then fill with the radial gradient — elephants only become visible where the torchlight reaches
- Calves (closer to light direction) glow brighter gold; adults are dimmer since light goes forward
- The "path" ahead of the calves gets a subtle ground-line glow

**Elephant silhouette shape** (each drawn via bezier curves):
- Rounded back, domed head, large ear, trunk (raised on lead adult, down on others), four stocky legs, small tail tuft

### 4. `src/components/CertificatePreview.tsx` — Add ElephantFamily layer
Import and insert `<ElephantFamily>` component between existing security layers (after guilloche, before attestation gradient).

### 5. `src/components/certificate/MicroText.tsx` — No changes
The "SOVEREIGN·IDENTITY·PROOF" text is there at 3px / 6% opacity as a security texture. Working as designed.

## Technical Details

**Elephant torch-light rendering:**
1. Define all 4 elephant silhouettes as closed bezier paths
2. `ctx.save()` → create a clipping region from all 4 elephant paths combined
3. Draw a radial gradient centered at the torch flame, biased leftward: `createRadialGradient(flameX, flameY, 5, flameX - 80, flameY, 150)`
4. Fill the entire clipped area — only elephant shapes receive the gradient
5. `ctx.restore()`
6. Draw the torch handle and flame separately (always visible in gold)

**Files modified:** 3 existing + 1 new  
**No new dependencies**

