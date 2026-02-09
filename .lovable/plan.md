

# Enhance Problem Section with Atmospheric Graphics and Animation

## What Changes

Add visual depth to the Problem Section so it matches the richness of the Hero and other sections, while keeping the content clean and typography-focused.

### 1. Atmospheric Gold Glow Background
Add a subtle radial gold glow behind the section (similar to the Hero's atmospheric treatment) to give it visual weight and warmth instead of sitting on a flat black background.

### 2. Animated Accent Line
Add a thin, slowly pulsing vertical gold line that runs from above the heading down to the scenario list — a visual thread that subtly reinforces the idea of "continuity" and connects the content beats together.

### 3. Enhanced Bullet Points
Replace the static gold dots with small animated rings that pulse once as they appear on scroll — drawing the eye to each scenario as it fades in.

### 4. "Proof does." Glow Treatment
Add a subtle gold glow effect behind the "Proof does." text (similar to the CTA button's `glow-gold`) so it reads as the emotional peak of the section.

### 5. Additional Parallax Decorative Elements
Add a second parallax circle (dashed border, like the Solution section's orbital rings) on the left side to balance the existing right-side circle and add more atmospheric depth.

---

## Technical Details

### File modified: `src/components/home/ProblemSection.tsx`

- Add a `bg-gradient-radial` gold glow div (hidden on mobile for performance, matching the Hero pattern)
- Add a decorative vertical line element using a thin `div` with `bg-gradient-to-b from-transparent via-primary/20 to-transparent`, centered above the heading
- Update bullet `span` elements from static dots to animated rings: a small `motion.span` with a scale animation on `whileInView`
- Wrap "Proof does." paragraph in a container with a soft `glow-gold-light` box-shadow or a radial gold gradient behind it
- Add a second `motion.div` parallax circle on the left side with `opacity-[0.04]` and dashed border

No new files, no new dependencies. All techniques already used elsewhere on the site.
