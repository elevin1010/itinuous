

## Certificate V2 — Norwegian Passport-Inspired Design

Create a new `CertificatePreview2` component and demo page, drawing from the Norwegian passport's defining qualities: generous whitespace, soft muted palette, rounded corners, and a clean typographic hierarchy — while retaining cryptographic verification features.

### Design Principles (from references)

- **Spacious and calm** — far less visual density than V1; let the document breathe
- **Soft color palette** — muted sage/teal background with warm accents (inspired by the passport interior pages), not the current black+gold
- **Rounded corners** — the passport booklet has soft edges, so `rounded-xl`
- **Subtle security art** — a hash-seeded generative landscape (geometric mountains + waves, like the passport's interior illustration) replaces the heavy moiré/guilloche stack
- **Minimal chrome** — no corner brackets, no phoenix watermark; the badge and typography do the work
- **Retained crypto features**: pixel color signature (smaller), QR code, MRZ line, micro-text border, verification/transaction hashes

### Layout

```text
┌─────────────────────────────────┐
│  [badge]  INTINUOUS             │
│           Identity Certificate  │
│                                 │
│  ┌──────┐   Name: ...          │
│  │photo │   Subject: ...       │
│  └──────┘   Provider: ...      │
│             Issued: ...         │
│             Chain: ...          │
│                                 │
│  ┌─── generative landscape ───┐ │
│  │  (hash-seeded mountains/   │ │
│  │   waves in muted tones)    │ │
│  └────────────────────────────┘ │
│                                 │
│  [pixel sig]    [hashes]   [QR] │
│  <<<MRZ LINE<<<                 │
│  Issued date · intinuous.com    │
└─────────────────────────────────┘
```

### New Files

1. **`src/components/CertificatePreview2.tsx`** — Main layout. Soft sage/cream palette, rounded corners, cleaner grid. Reuses existing `PixelSignature`, `QRBlock`, `SubjectPhoto`, `MicroText`, and `utils`. Skips moiré, guilloche, phoenix, corner accents.

2. **`src/components/certificate/GenerativeLandscape.tsx`** — Canvas component that draws a hash-seeded geometric mountain/wave scene in muted tones (sage greens, soft grays, warm tans). Deterministic via `seededRng`. This replaces the moiré+guilloche stack as the primary visual cryptographic fingerprint — each certificate gets a unique landscape.

3. **`src/pages/CertificateDemo2.tsx`** — Demo page at `/certificate2` showing the new design.

4. **`src/App.tsx`** — Add route for `/certificate2`.

### Color Palette

- Background: `hsl(160, 15%, 94%)` (soft sage-gray)
- Text: `hsl(200, 10%, 20%)` (dark slate)
- Accent: `hsl(43, 50%, 45%)` (muted gold, from existing brand)
- Landscape fills: hash-seeded combinations of `hsl(160-200, 10-20%, 60-80%)` (mountain grays/sage) and `hsl(175, 20%, 75%)` (water teal)

### Cryptographic Features Retained

- **Pixel color signature** — smaller (100px), positioned bottom-left
- **Generative landscape** — new primary visual fingerprint, fully hash-seeded
- **QR code** — bottom-right
- **MRZ line** — bottom
- **Micro-text border** — reused from V1 with adjusted colors
- **Hashes** — displayed inline

