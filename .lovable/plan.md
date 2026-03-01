

## MicroText as a Border Frame

Rewrite `MicroText.tsx` to render text along all four edges of the certificate as a continuous border, positioned **outside** the corner accents (which sit at `top-3 left-3`, i.e. 12px inset with 20px size — so the text border should sit at roughly 2-3px from the edge).

### Approach

Use four absolutely positioned strips (top, right, bottom, left) each containing a single line of micro-text. Right and left strips use CSS `writing-mode: vertical-lr` (right side) and `vertical-rl` (left side, reversed) so text flows naturally along the edges.

**Phrase fitting**: Concatenate all 5 phrases into one continuous string. Measure the approximate character width at the chosen font size (~5px font, ~3.5px per char with letter-spacing) and repeat the combined phrase string enough times to fill each edge, then truncate to the nearest phrase boundary (using `·` as delimiter) so no phrase is cut mid-word.

### Implementation

- **Font size**: ~5px (slightly larger than current 3px for readability as a border)
- **Opacity**: 30% as requested
- **Top/bottom**: horizontal `<p>` elements, absolutely positioned
- **Left/right**: vertical text via `writing-mode`
- **Positioning**: ~2px from edge, inside the certificate but outside the corner brackets

### Files
- `src/components/certificate/MicroText.tsx` — Full rewrite to border-frame layout

