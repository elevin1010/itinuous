

# Identity Verification Certificate Redesign

## Overview
Build a new `CertificatePreview` React component that renders a contemporary, on-brand identity verification certificate. This will be a visual showpiece component that can be used on the homepage, creators page, or as a standalone route. The design bridges official document aesthetics (passports, licenses) with cryptographic visual language, all within the Intinuous dark/gold palette.

## Design Direction

The certificate draws from three visual traditions:
- **Official documents**: Structured field layout, serif-like hierarchy, border detailing, watermark
- **Passports/licenses**: Machine-readable zone (MRZ) at the bottom, grid structure, security micro-patterns
- **Cryptographic artifacts**: The pixelated color signature block, hex hashes displayed in monospace, subtle hash-pattern backgrounds

### Layout (portrait-leaning card, roughly 3:4 aspect ratio)

```text
+--------------------------------------------------+
|  [subtle gold border with corner accents]         |
|                                                   |
|  [Intinuous badge/mark]   IDENTITY VERIFICATION   |
|                           CERTIFICATE             |
|  Attestation: identity.likeness.observed          |
|                                                   |
|  +-----------+  +--------------------------+      |
|  | Pixelated |  | Issuer    Intinuous      |      |
|  | Color     |  | Issued To Private        |      |
|  | Signature |  | Subject   A-8287108928   |      |
|  | Block     |  | Provider  persona        |      |
|  |           |  | Issued    2026-01-27     |      |
|  +-----------+  | Chain     polygon (137)  |      |
|                 +--------------------------+      |
|                                                   |
|  Verification Hash                                |
|  0xa0dfb7dd...5aaea4d6                           |
|  Transaction Hash                                 |
|  0x82cdb5d8...73585eef                           |
|                                                   |
|  [MRZ-style machine-readable line]               |
|  <<<INTINUOUS<A8287108928<<<2026<<<POLYGON<<<    |
|                                                   |
|  Issued 2026-01-27T16:20:17.000Z                 |
|  Intinuous . https://intinuous.com               |
+--------------------------------------------------+
```

### Visual Details
- **Background**: Near-black (#080808) with a very subtle repeating micro-pattern (fine grid or guilloche-inspired CSS pattern) as a "security background"
- **Border**: Thin gold border with decorative corner brackets (like a passport page)
- **Badge**: The uploaded gold hexagonal mark rendered as a semi-transparent watermark behind the data fields
- **Pixelated color signature**: Canvas-rendered block of randomized colored squares (seeded from the verification hash) -- preserving the existing concept but rendering it with gold/teal/dark tones instead of the current cyan/blue
- **Typography**: "Inter" for labels, "IBM Plex Mono" for hash values and IDs, "Montserrat Light" uppercase for the title
- **MRZ zone**: A monospace, machine-readable-zone-style string at the bottom, styled like a passport's MRZ with slightly reduced opacity
- **Hashes**: Displayed in monospace with truncation ellipsis, gold accent on hover to copy

## Technical Plan

### 1. Copy the badge asset into the project
Copy `user-uploads://intinuous_feb2026_favicon_master.png` to `src/assets/intinuous-badge.png` for use as a watermark in the certificate.

### 2. Create `src/components/CertificatePreview.tsx`
A self-contained component that renders the certificate using:
- Tailwind classes for layout and the existing design tokens (gold, dark background, etc.)
- A small canvas-based or CSS-grid-based "pixelated color signature" block, seeded deterministically from a hash prop
- Framer Motion for subtle entrance animation
- Props for all certificate fields (issuer, subject ID, provider, chain, hashes, issued date, attestation type) with sensible defaults matching the example

### 3. Create a `/certificate` demo route
Add a new page `src/pages/CertificateDemo.tsx` that renders the certificate component centered on a dark background -- useful for demonstration, screenshots, and iteration. Register it in `App.tsx`.

### 4. CSS additions
Add a subtle guilloche/micro-pattern utility class (`.certificate-pattern`) to `index.css` for the security background texture.

## What stays the same
All certificate data fields from the original are preserved: Issuer, Issued To, Subject ID, Provider, Issued At, Chain, Verification Hash, Transaction Hash, the pixelated color signature block, timestamp, and footer URL.

