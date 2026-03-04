# Intinuous Certificate — Visual Element Reference

> **Purpose**: This document describes every non-cryptographic graphical element on the Identity Verification Certificate, how each is generated, and how they relate to the underlying verification data. Use this as a spec when implementing server-side rendering or algorithmic verification.

---

## Table of Contents

1. [Seeded RNG (core primitive)](#1-seeded-rng)
2. [Pixel Signature (Color Signature)](#2-pixel-signature)
3. [Moiré Pattern](#3-moiré-pattern)
4. [Guilloché Pattern](#4-guilloché-pattern)
5. [Phoenix Watermark](#5-phoenix-watermark)
6. [Attestation Gradient](#6-attestation-gradient)
7. [MicroText Border](#7-microtext-border)
8. [Generative Landscape (V2 only)](#8-generative-landscape)
9. [Corner Accents](#9-corner-accents)
10. [QR Block](#10-qr-block)
11. [Subject Photo](#11-subject-photo)
12. [Certificate Composition](#12-certificate-composition)

---

## 1. Seeded RNG

**File**: `src/components/certificate/utils.ts`

All visual elements derive their unique parameters from a **deterministic seeded PRNG** (Linear Congruential Generator). Given the same seed string, the same sequence of pseudo-random numbers is always produced.

### Algorithm

```typescript
function seededRng(seed: string): () => number {
  // Hash the seed string to a 32-bit integer
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  }
  // LCG: multiplier=16807, modulus=2^31-1 (Lehmer/Park-Miller)
  return () => {
    h = (h * 16807 + 0) % 2147483647;
    return (h & 0x7fffffff) / 0x7fffffff; // returns [0, 1)
  };
}
```

### Seed Inputs by Component

| Component           | Seed                                      |
| ------------------- | ----------------------------------------- |
| Moiré Pattern       | `transactionHash`                         |
| Guilloché Pattern   | `verificationHash + "guilloche"`          |
| Phoenix Watermark   | `transactionHash + "phoenix"`             |
| Pixel Signature     | `verificationHash`                        |
| Attestation Gradient| `attestation + verificationHash`          |
| Generative Landscape| `verificationHash + transactionHash`      |

> **Key insight**: Each element uses a different seed (or seed suffix) so that they produce independent random sequences, but all are **fully deterministic** from the certificate's hash values.

---

## 2. Pixel Signature (Color Signature)

**File**: `src/components/certificate/PixelSignature.tsx`

A 10×10 grid of colored cells rendered on a `<canvas>`, forming a unique visual hash — like a pixelated fingerprint.

### Algorithm

1. Seed the RNG with `verificationHash`.
2. Define a color palette (8 colors per variant):
   - **Dark variant**: Vault Gold tones `[215,178,90]`, near-blacks `[30,30,30]`, muted golds `[160,130,70]`
   - **Light variant**: Muted golds and warm creams
3. For each cell `(x, y)` in a 10×10 grid:
   - Pick a random palette color: `palette[floor(rng() * palette.length)]`
   - Fill the cell with that RGB color
4. Canvas uses `imageRendering: 'pixelated'` for sharp edges.

### Palettes

```
Dark:  [215,178,90] [180,148,68] [240,210,130] [30,30,30] [50,50,50] [80,70,50] [160,130,70] [20,20,20]
Light: [180,148,68] [160,130,60] [200,170,90] [230,225,215] [215,210,200] [190,175,140] [140,110,50] [240,235,225]
```

### Parameters
- **Grid**: 10×10 cells
- **Canvas size**: configurable (default 160px for V1, 80px for V2)
- **Labels**: "Color Signature" + "Deterministic Visual Hash of Submitted Likeness"

---

## 3. Moiré Pattern

**File**: `src/components/certificate/MoirePattern.tsx`

Three overlapping sets of concentric ellipses that create an interference (moiré) pattern. The overlay of slightly offset ellipse families produces complex visual artifacts that are extremely difficult to reproduce without the exact parameters.

### Algorithm

1. Seed the RNG with `transactionHash`.
2. Compute `maxR = max(width, height) * 0.8`.
3. **Layer 1** (primary):
   - Center: `(width * [0.3–0.7], height * [0.3–0.7])` — randomized
   - Frequency (ring spacing): `5 + rng() * 5` px
   - Draw concentric ellipses from `freq` to `maxR`, step by `freq`
   - Each ellipse: `ellipse(cx, cy, r, r * 0.85, rotation, 0, 2π)` — slight vertical compression
   - Rotation: `rng() * 0.3` radians (slight tilt per ring)
   - Stroke: `rgba(215,178,90, 0.14)` (dark) / `rgba(160,130,60, 0.10)` (light)
   - Line width: 0.6
4. **Layer 2** (offset):
   - Center offset from Layer 1 by `±width*0.125, ±height*0.125`
   - Frequency: independent `5 + rng() * 5`
   - Ellipses: `r * 0.9` width, `r` height (horizontally compressed)
   - Stroke: slightly lower opacity
5. **Layer 3** (fine detail):
   - Center: `(width * [0.4–0.6], height * [0.4–0.6])`
   - Frequency: `3 + rng() * 4` (tighter spacing)
   - Ellipses: `r * 1.1` width, `r * 0.7` height
   - Only extends to `maxR * 0.6`
   - Line width: 0.4

### Anti-Forgery Properties
- The interference pattern between the three ellipse families creates emergent visual detail that cannot be captured by photographing or scanning — it degrades on reproduction.
- Slight parameter changes (different hash) produce completely different moiré interference.

---

## 4. Guilloché Pattern

**File**: `src/components/certificate/GuillochePattern.tsx`

Classic spirograph-like curves used on banknotes and security documents. Combines **spirograph curves** (hypotrochoids) with a **rose/rosette** pattern.

### Algorithm — Spirograph Curves

1. Seed the RNG with `verificationHash + "guilloche"`.
2. Generate `4–6` spirograph curves (numCurves = `4 + floor(rng() * 3)`).
3. For each curve:
   - **Center**: `(width * [0.45–0.95], height * [0.40–0.95])` — biased right/lower
   - **Parameters** (hypotrochoid):
     - `R` (outer radius): `50 + rng() * 140`
     - `r` (inner radius): `10 + rng() * 50`
     - `d` (pen distance): `5 + rng() * 60`
   - **Rotations**: `20 + floor(rng() * 40)` full rotations
   - **Steps**: `rotations * 100` line segments
   - **Parametric equations** (standard hypotrochoid):
     ```
     x(t) = cx + (R - r) * cos(t) + d * cos(((R - r) / r) * t)
     y(t) = cy + (R - r) * sin(t) - d * sin(((R - r) / r) * t)
     ```
     where `t` ranges from `0` to `rotations * 2π`
   - **Stroke**: `rgba(215,178,90, 0.04–0.10)` (dark) — opacity varies per curve via RNG
   - **Line width**: `0.3 + rng() * 0.4`

### Algorithm — Rosette

1. Center: `(width * 0.70, height * 0.68)` — fixed position (lower-right)
2. **Petals**: `6 + floor(rng() * 8)` petals
3. **Radius**: `80 + rng() * 100`
4. For each petal `p`:
   - Angle offset: `(p / petals) * 2π`
   - Parametric rose curve: `r(t) = R * sin(petals * t / 2)`
   - Plot `(rcx + r * cos(t + angle), rcy + r * sin(t + angle))` for `t ∈ [0, π]`
5. Stroke: `rgba(215,178,90, 0.035)` (dark) / `rgba(140,110,50, 0.05)` (light)
6. Line width: 0.5

### Anti-Forgery Properties
- The extremely thin, overlapping parametric curves create detail below most scanner/printer resolution.
- Combined with the moiré layer, the visual complexity is compounded.

---

## 5. Phoenix Watermark

**File**: `src/components/certificate/PhoenixWatermark.tsx`

A stylized phoenix bird drawn with bezier curves and line segments. Positioned in the upper-right quadrant of the certificate.

### Structure

All coordinates are relative to a center point `(width * 0.78, height * 0.18)` with `scale = 1.8`.

1. **Body**: Elongated teardrop via two quadratic curves meeting at top and bottom.
2. **Wings** (left + right):
   - `wingSpan = 45` (gives ~100px total wingspan at scale)
   - Each wing: a cubic bezier from body center out to wingtip
   - 5 feather strokes per wing — short lines extending from the wing curve at regular intervals using `sin(t * π)` for natural curve-following
3. **Tail feathers**:
   - Count: `4 + floor(rng() * 3)` — **hash-dependent** (only randomized element)
   - Each tail feather: cubic bezier fanning downward from body base
   - Spread: linear distribution across `±30 * scale` width
   - Length: `25 + rng() * 20` — varies per feather
4. **Head crest**: 3 short lines radiating upward from head

### Style
- Stroke: `rgba(215,178,90, 0.18)` (dark) / `rgba(140,110,50, 0.15)` (light)
- Line width: 1.2, round caps
- The phoenix is intentionally subtle/watermark-like — visible but not dominant.

---

## 6. Attestation Gradient

**File**: `src/components/certificate/AttestationGradient.tsx`

A subtle multi-layered gradient overlay seeded by the attestation type + verification hash.

### Algorithm

1. Seed: `attestation + verificationHash`
2. Generate random parameters:
   - Two hue values in the gold range: `hue1 = 35 + rng() * 20`, `hue2 = 38 + rng() * 15`
   - Angle for linear gradient: `floor(rng() * 360)` degrees
   - Two focal points for radial gradients: `(x1%, y1%)` and `(x2%, y2%)`
3. Compose three CSS gradient layers:
   ```css
   background:
     linear-gradient({angle}deg, hsla({hue1}, 70%, 55%, {opacity}) 0%, transparent 60%),
     radial-gradient(ellipse at {x1}% {y1}%, hsla({hue2}, 60%, 50%, {o2}) 0%, transparent 55%),
     radial-gradient(ellipse at {x2}% {y2}%, hsla({hue1}, 50%, 40%, {o3}) 0%, transparent 50%)
   ```
4. Opacity values:
   - Dark: `0.07, 0.06, 0.05`
   - Light: `0.04, 0.03, 0.025`

### Purpose
- Adds a unique atmospheric "tint" to each certificate based on its attestation type.
- Different attestation strings produce noticeably different color distributions.

---

## 7. MicroText Border

**File**: `src/components/certificate/MicroText.tsx`

A frame of tiny repeating text around all four edges of the certificate, rendered in monospace at 5px font size.

### Phrases (concatenated and repeated)

```
INTINUOUS·VERIFIED·{hash[2:10]}·
ATTESTATION·{ATTESTATION_DOTTED}·
SOVEREIGN·IDENTITY·PROOF·{hash[-8:]}·
DECENTRALIZED·TRUST·PROTOCOL·
NON·TRANSFERABLE·UNIQUE·IDENTITY·
```

### Layout

- **Horizontal edges** (top/bottom): Fill ~540px width
- **Vertical edges** (left/right): Fill ~756px height, using `writing-mode: vertical-lr` (right edge) / `vertical-rl + rotate(180deg)` (left edge)
- **Truncation**: Text is cut at the nearest `·` delimiter to prevent mid-word breaks
- **Char width estimate**: 3.5px per character at 5px font with 0.5px letter-spacing
- **Inset**: 2px from each edge
- **Opacity**: 30%

### Anti-Forgery Properties
- At 5px, the text is below comfortable reading size — requires magnification to verify.
- The hash-derived content makes each border unique.

---

## 8. Generative Landscape (V2 Only)

**File**: `src/components/certificate/GenerativeLandscape.tsx`

A hash-seeded geometric mountain-and-water scene replacing the moiré/guilloché stack in V2 certificates.

### Algorithm

1. Seed: `verificationHash + transactionHash`
2. Canvas: 460×130px at 2x DPR (retina)
3. **Sky**: Linear gradient from top to bottom
   - Hue range: `170–200` (sage/teal)
   - Saturation: `10–20%`, Lightness: `88–94%`
4. **Mountain ranges** (3 layers, back to front):
   - Each layer has increasing base Y position: `height * (0.3 + layer * 0.18)`
   - Peak variance decreases per layer: `height * (0.25 - layer * 0.06)`
   - Lightness increases per layer (atmospheric perspective): `65 + layer * 8`
   - Segments: `8–14` mountain peaks per layer
   - Each peak: quadratic bezier curves between randomized control points
   - Fill: solid HSL color
5. **Water band** (foreground):
   - Starts at `height * (0.75–0.80)`
   - Gentle sine wave at the top edge
   - Gradient fill from `hsl(175–190, 15–25%, 72–80%)` to lighter
   - 5 subtle horizontal reflection lines at 15% opacity

### Purpose
- Provides a visually distinctive, calming alternative to the moiré/guilloché security patterns.
- Maintains full determinism — same hashes always produce the exact same landscape.
- The V2 certificate uses this as its primary visual fingerprint.

---

## 9. Corner Accents

**File**: `src/components/certificate/CornerAccent.tsx`

Four L-shaped corner marks positioned 12px (`top/left/right/bottom: 3 * 4px = 12px`) from each corner.

- Size: 20×20px
- Two border sides per corner (e.g., top-left gets `border-top` + `border-left`)
- Color: `primary/60` (dark) / `hsl(43, 50%, 45%)/50` (light)

---

## 10. QR Block

**File**: `src/components/certificate/QRBlock.tsx`

- **Library**: `qrcode` npm package (`QRCode.toCanvas`)
- **Data**: `{verifyBaseUrl}{verificationHash}`
- **Error correction**: Level M
- **Colors**: Vault Gold foreground on transparent background
- **Labels**: "Status: Active" above, "Verify Status" below
- **Size**: 104px (V1), 70px (V2)

---

## 11. Subject Photo

**File**: `src/components/certificate/SubjectPhoto.tsx`

A square image container for the verification subject's photo.

- **V1**: 160×160px, sharp corners, 1px gold border
- **V2**: 120×120px, rounded-lg corners
- **Label**: "Subject Photo" (V1 only)
- Only rendered if `photoUrl` is provided.

---

## 12. Certificate Composition

### V1 (`CertificatePreview.tsx`) — Security Document Style

**Canvas**: 540×756px (5:7 aspect ratio), sharp corners

**Layer order** (bottom to top):
1. Background fill (`hsl(0,0%,3%)` dark / `hsl(40,20%,97%)` light)
2. MicroText border (30% opacity)
3. Moiré pattern (canvas)
4. Guilloché pattern (canvas)
5. Phoenix watermark (canvas)
6. Attestation gradient (CSS)
7. Cross-hatch pattern overlay (CSS class `certificate-pattern`, 4% opacity)
8. Corner accents (CSS)
9. Content layer (z-10):
   - Header: badge + "Identity Verification Certificate"
   - Attestation line
   - Subject Photo + Color Signature (left column)
   - Field table (right column): Issuer, Issued To, Subject, Provider, Issued date, Chain
   - Verification Hash + Transaction Hash (left) + QR Block (right)
   - MRZ zone (machine-readable string)
   - Footer: timestamp + "Intinuous · intinuous.com"

### V2 (`CertificatePreview2.tsx`) — Norwegian Passport Style

**Canvas**: 540×756px (5:7 aspect ratio), rounded-xl corners

**Layer order** (bottom to top):
1. Background fill (`hsl(160, 15%, 94%)` — muted sage/cream)
2. MicroText border (light variant)
3. Content layer (z-10):
   - Header: badge + "Intinuous / Identity Certificate"
   - Attestation line
   - Subject Photo (left, 120px) + Field table (right)
   - Generative Landscape (full width, 460×130px)
   - Bottom row: Pixel Signature (80px) + Hashes + QR (70px)
   - MRZ zone
   - Footer

### Key Differences V1 vs V2

| Aspect              | V1                           | V2                            |
| ------------------- | ---------------------------- | ----------------------------- |
| Security patterns   | Moiré + Guilloché + Phoenix  | Generative Landscape          |
| Corners             | Sharp (rounded-sm)           | Rounded (rounded-xl)          |
| Palette             | Near-black + Vault Gold      | Sage/cream + muted gold       |
| Color Signature     | 160px                        | 80px                          |
| QR Code             | 104px                        | 70px                          |
| Variants            | dark / light                 | light only                    |

---

## Server-Side Rendering Notes

To re-render these elements server-side (e.g., for verification/fraud detection):

1. **Port the `seededRng` function exactly** — the LCG parameters (multiplier 16807, modulus 2^31-1) must match precisely.
2. **Use the same seed strings** — including the suffixes like `"guilloche"`, `"phoenix"`.
3. **Canvas API equivalents**: All drawing uses standard Canvas 2D API (`beginPath`, `moveTo`, `lineTo`, `quadraticCurveTo`, `bezierCurveTo`, `ellipse`, `stroke`, `fill`). These can be replicated with any server-side canvas library (e.g., `node-canvas`, `sharp` with SVG, or Python's `Pillow`/`cairo`).
4. **Pixel-perfect matching** is achievable because all parameters are deterministic — no dependency on browser rendering quirks (aside from anti-aliasing, which is cosmetic).

---

## Data Flow Summary

```
verificationHash ──┬── seededRng ──► Pixel Signature (color grid)
                   ├── + "guilloche" ── seededRng ──► Guilloché curves
                   └── + attestation ── seededRng ──► Attestation Gradient

transactionHash ───┬── seededRng ──► Moiré Pattern (ellipses)
                   ├── + "phoenix" ── seededRng ──► Phoenix Watermark
                   └── + verificationHash ── seededRng ──► Generative Landscape (V2)

attestation ───────── string manipulation ──► MicroText phrases
verificationHash ──── URL construction ──► QR code data
```
