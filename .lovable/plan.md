

## Remove Elephant Family from Certificate

Two changes needed:

1. **`src/components/CertificatePreview.tsx`** — Remove the `ElephantFamily` import (line 14) and the `<ElephantFamily>` render call (line 108).

2. Optionally delete `src/components/certificate/ElephantFamily.tsx` and `src/assets/elephants_gradient2.png` to clean up unused files.

No other visual layers will be changed.

