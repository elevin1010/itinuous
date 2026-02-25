

# Replace Canvas Elephants with Image Asset

## Approach
Replace the entire canvas-based `ElephantFamily` component with a simple `<img>` element using the user's designed elephant artwork (`elephants_gradient2.png`). This image already has the torch, gradient glow, and proper silhouettes baked in.

## Changes

### 1. Copy `elephants_gradient2.png` to `src/assets/`
Copy the uploaded file into the project assets folder for proper bundling.

### 2. Rewrite `src/components/certificate/ElephantFamily.tsx`
Strip out all canvas logic. Replace with a simple component that:
- Imports the image from `@/assets/elephants_gradient2.png`
- Renders an `<img>` element absolutely positioned at the bottom-left of the certificate
- Uses `pointer-events-none` and appropriate opacity
- Sizes it to roughly 55-60% of the certificate width, anchored to the bottom-left corner
- The image has a transparent background with a gold glow, so it will composite naturally over the dark certificate background

The component no longer needs `hash`, `width`, or `height` props since it is a static image. However, to avoid changing the parent interface, we can keep the props and just ignore them.

### 3. `src/components/CertificatePreview.tsx` — No changes needed
The existing `<ElephantFamily>` usage remains the same.

