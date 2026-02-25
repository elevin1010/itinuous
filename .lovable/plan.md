

# Fix Elephant Visibility Bug

## Root Cause
The `elephantPath()` helper calls `ctx.beginPath()` on every invocation (line 37). When looping through all 4 elephants to build the combined clipping region, each call resets the previous path. Only the last elephant (smallest calf) ends up in the clip — and it's tiny and at the edge of the gradient, so nothing is visible.

## Fix

### `src/components/certificate/ElephantFamily.tsx`

1. **Split `beginPath` out of `elephantPath`** — remove `ctx.beginPath()` from inside the helper function. Instead, call `ctx.beginPath()` once before the loop that builds the combined clip path. This way all 4 elephant silhouettes accumulate into a single path for clipping.

2. **Keep per-elephant `beginPath` for the torch/flame drawing** — those are drawn separately outside the clip logic and still need their own `beginPath`.

The single-line fix is removing line 37 (`ctx.beginPath()`) from inside `elephantPath`, and adding a single `ctx.beginPath()` before the clipping loop at line 193 (before `for (const e of elephants)`).

No other files need changes. The elephant shapes, gradient, torch, and positioning are all correct — they're just not appearing because only 1 of 4 paths makes it into the clip region.

