

# Certificate V2 — QR Code, Headshot, and Cryptographic Graphics

## What's Changing

Three new visual elements plus an additional algorithmic security graphic:

### 1. QR Code (canvas-rendered, no library needed)
A deterministic QR code generated from the verification hash, rendered on a canvas using a lightweight custom implementation (or a tiny library like `qrcode`). Positioned in the **bottom-right area**, near the MRZ zone, mirroring how passports place machine-readable codes adjacent to the MRZ strip. Rendered in gold-on-black to stay on-brand.

### 2. Optional Headshot / Photo
An optional `photoUrl` prop. When provided, renders a small portrait photo (passport-style, roughly 72x90px) with a thin gold border, placed to the **left of the data fields** — replacing or sitting above the color signature block. When absent, the space is occupied by the color signature alone. The photo area will have a subtle label: "SUBJECT PHOTO".

### 3. Moire / Guilloche Security Pattern (canvas-rendered)
A second canvas element that renders a **concentric interference pattern** (moire) seeded from the transaction hash. This creates a unique, hard-to-reproduce visual fingerprint per certificate. The technique: draw two sets of concentric circles with slightly different centers and frequencies, producing organic interference fringes. Rendered at low opacity as a background layer behind the data fields, in gold tones.

### 4. Color Signature Acknowledgment
The color signature stays as-is — each certificate gets a unique output seeded from the verification hash. No changes needed here, just repositioning within the new layout.

## Updated Layout

```text
+------------------------------------------------------+
|  [corner]                                   [corner]  |
|                                                       |
|  [badge]  IDENTITY VERIFICATION                       |
|           CERTIFICATE                                 |
|  Attestation: identity.likeness.observed              |
|                                                       |
|  +----------+ +----------+ +--------------------+     |
|  | Headshot | | Color    | | Issuer   Intinuous |     |
|  | Photo    | | Signature| | Issued To Private  |     |
|  | (opt.)   | | Block    | | Subject  A-828...  |     |
|  |          | |          | | Provider persona   |     |
|  +----------+ +----------+ | Issued   2026-01   |     |
|                             | Chain    polygon   |     |
|                             +--------------------+     |
|                                                       |
|  [--- moire pattern layer behind this area ---]       |
|                                                       |
|  Verification Hash            Transaction Hash        |
|  0xa0dfb7dd...5aaea4d6        0x82cdb5d8...73585eef   |
|                                                       |
|  [MRZ line]                              [QR Code]    |
|  <<<INTINUOUS<A828...<<<                 [        ]    |
|                                          [        ]    |
|  Issued 2026-01-27...    Intinuous.com                |
|  [corner]                                   [corner]  |
+------------------------------------------------------+
```

## Technical Plan

### Step 1: Install `qrcode` package
Install `qrcode` (tiny, zero-dep library) for generating QR code data matrices. This avoids reimplementing the QR spec from scratch while keeping bundle size minimal.

### Step 2: Add new sub-components to `CertificatePreview.tsx`

**MoirePattern component** — A canvas-based component that:
- Takes a hash string as seed
- Draws two sets of concentric ellipses with slightly offset centers (derived from the hash)
- Uses gold-tinted strokes at very low opacity
- Creates a unique interference pattern per certificate
- Rendered as a background layer (absolute positioned, low opacity)

**QRBlock component** — A small canvas that:
- Encodes a verification URL (e.g. `https://intinuous.com/verify/{hash}`) as a QR code
- Renders in gold-on-transparent style
- Sized ~64x64px with a "SCAN TO VERIFY" label beneath

**SubjectPhoto component** — A simple image block:
- Accepts an optional `photoUrl` prop
- Renders passport-style with gold border and "SUBJECT PHOTO" label
- When absent, shows a placeholder silhouette outline or is simply hidden

### Step 3: Update props interface
Add new optional props:
- `photoUrl?: string` — URL for the subject's headshot
- `verifyBaseUrl?: string` — base URL for QR code link (defaults to `https://intinuous.com/verify/`)

### Step 4: Reorganize layout
- Shift to a slightly wider aspect ratio (roughly 5:7) to accommodate the photo + color sig + fields side by side
- Place hashes in a two-column layout to save vertical space
- Position QR code in the bottom-right, adjacent to the MRZ strip
- Layer the moire canvas behind the main content area

### Step 5: Update `CertificateDemo.tsx`
Add example usage showing both states: one certificate with a headshot, one without.

## Files Modified
- `src/components/CertificatePreview.tsx` — Major rewrite with new sub-components and layout
- `src/pages/CertificateDemo.tsx` — Updated demo with photo example
- `package.json` — Add `qrcode` dependency

