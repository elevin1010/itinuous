

# Make the Phoenix Watermark Visible

## Problem
The `PhoenixWatermark` component renders correctly but is invisible because all stroke opacities are extremely low:
- Main phoenix/torch strokes: `rgba(215, 178, 90, 0.055)` (5.5%)
- Radiating rays: `rgba(215, 178, 90, 0.03)` (3%)
- Broken chains: `rgba(215, 178, 90, 0.04)` (4%)

These are buried under the moire, guilloche, attestation gradient, micro-text, and the badge watermark layers.

## Solution
Increase opacity across the board so the phoenix is a visible-but-subtle watermark, not an invisible one:

### Changes to `src/components/certificate/PhoenixWatermark.tsx`
- **Main strokes** (body, wings, torch, feathers): Increase from `0.055` to `0.18` -- visible but still clearly a watermark
- **Line width**: Increase from `0.8` to `1.2` for the main drawing
- **Radiating rays**: Increase from `0.03` to `0.09`
- **Broken chain links**: Increase from `0.04` to `0.12`
- **Scale factor**: Increase from `0.0028` to `0.0038` so the drawing is physically larger on the certificate

These values will make the phoenix clearly visible as a subtle gold watermark behind the content -- similar to how currency watermarks are visible when you look for them but don't overpower the printed text.

## Technical Details

File: `src/components/certificate/PhoenixWatermark.tsx`

| Element | Current Opacity | New Opacity | Current Width | New Width |
|---------|----------------|-------------|---------------|-----------|
| Phoenix/torch strokes | 0.055 | 0.18 | 0.8 | 1.2 |
| Radiating rays | 0.03 | 0.09 | 0.4 | 0.6 |
| Broken chains | 0.04 | 0.12 | 0.6 | 0.9 |
| Scale multiplier | 0.0028 | 0.0038 | -- | -- |

Only one file is modified. No new dependencies or components needed.

