

## Fix OG Image — Restore Gold Gradient Style

The current `public/og-image.png` uses the dark background with the hexagonal mark. You want it replaced with the warm gold-gradient style from the first screenshot (Montserrat Light wordmark + tagline, no mark).

### Approach

Create a utility page at `/og-preview` that renders the OG image design at exactly 1200×630px. You screenshot or right-click-save it, then we replace `public/og-image.png`.

### Design (matching screenshot 1)

- **Background**: Warm gradient — dark charcoal edges fading to a golden-brown center glow
- **Center**: "Intinuous" in Montserrat Light, large, gold-gradient text
- **Below**: "The Continuity Layer for Identity" in white/light, smaller weight
- **No hexagonal mark** — text-only treatment

### Files

| File | Action |
|------|--------|
| `src/pages/OgImagePreview.tsx` | Create — 1200×630 canvas page |
| `src/App.tsx` | Edit — add `/og-preview` route |

Once you capture the image from that page, we swap `public/og-image.png` and remove the utility route. Note: messaging apps cache OG images aggressively, so existing threads may still show the old version for a while.

