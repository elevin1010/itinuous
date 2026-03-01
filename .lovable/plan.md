

## Certificate V1 — Text & Layout Updates

### Changes

1. **`src/components/certificate/PixelSignature.tsx`** (line 51-52): Change label from `Color Signature` to two lines — `Color Signature` on first line, `Deterministic Visual Hash of Submitted Likeness` as a smaller subtitle below.

2. **`src/components/certificate/QRBlock.tsx`**: 
   - Add `Status: Active` text above the QR canvas
   - Change `Scan to Verify` → `Verify Status` below the QR canvas

3. **`src/components/CertificatePreview.tsx`**:
   - Enlarge QR from `size={80}` to `size={104}` (30%)
   - Restructure hash section (lines 166-180): change from `grid-cols-2` to single-column stacked layout (verification hash on top, transaction hash below) to accommodate the larger QR code beside them
   - The text defaults (`issuedTo: 'Withheld'`, `attestation: 'identity.likeness.verified'`) are already applied from the last diff

### Files
- `src/components/CertificatePreview.tsx`
- `src/components/certificate/PixelSignature.tsx`
- `src/components/certificate/QRBlock.tsx`

