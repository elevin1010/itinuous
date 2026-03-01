

## Make Certificate Labels More Visible

The issue is low opacity on label text. Increase contrast by bumping opacity/lightness on these elements:

### Files & Changes

1. **`src/components/certificate/SubjectPhoto.tsx`** (line 12): Change `text-muted-foreground/50` → `text-muted-foreground/80` (dark), `text-[hsl(0_0%_50%)]` → `text-[hsl(0_0%_35%)]` (light)

2. **`src/components/certificate/PixelSignature.tsx`** (line 40): Change `text-muted-foreground/50` → `text-muted-foreground/80` (dark), `text-[hsl(0_0%_50%)]` → `text-[hsl(0_0%_35%)]` (light) — applies to both "Color Signature" and subtitle

3. **`src/components/certificate/QRBlock.tsx`** (line 21): Change `text-muted-foreground/40` → `text-muted-foreground/75` (dark), `text-[hsl(0_0%_50%)]` → `text-[hsl(0_0%_35%)]` (light) — applies to "Status: Active" and "Verify Status"

