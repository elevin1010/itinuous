

## Scale Up Talent Deck Font Sizes (~50% Larger)

### Problem
Body text and supporting type across the deck is too small to read comfortably — especially card bodies, scenario descriptions, timing rows, pills, and other Jost-set content.

### Changes — all in `src/styles/talent-deck.css`

Bump all font sizes by roughly 50%. Key adjustments:

| Element | Current | New |
|---|---|---|
| `.pill` | 0.62rem | 0.93rem |
| `.display` | clamp(2.4rem,4.5vw,3.6rem) | clamp(3.6rem,6.5vw,5.4rem) |
| `.display-xl` | clamp(3rem,6vw,5rem) | clamp(4.5rem,9vw,7.5rem) |
| `.card-num` | 1.8rem | 2.7rem |
| `.card-head` | 0.95rem | 1.4rem |
| `.card-body` | 0.82rem | 1.2rem |
| `.kit-num` | 1.2rem | 1.8rem |
| `.kit-tag` | 0.62rem | 0.93rem |
| `.kit-title` | 1rem | 1.5rem |
| `.kit-body` | 0.85rem | 1.25rem |
| `.platform-name` | 1rem | 1.5rem |
| `.platform-sub` | 0.8rem | 1.2rem |
| `.dark-panel p` | 1.5rem | 2.25rem |
| `.attr-label` | 1.1rem | 1.65rem |
| `.attr-sub` | 0.8rem | 1.2rem |
| `.use-label` | 0.95rem | 1.4rem |
| `.uses-note p` | 0.85rem | 1.25rem |
| `.scenario-who` | 1rem | 1.5rem |
| `.scenario-action` | 0.85rem | 1.25rem |
| `.scenario-when` | 0.78rem | 1.15rem |
| `blockquote p` | 1.2rem | 1.8rem |
| `.quote-block blockquote p` | 1.25rem | 1.85rem |
| `.quote-sub` | 0.82rem | 1.2rem |
| `.claim-head` | 1rem | 1.5rem |
| `.claim-body` | 0.85rem | 1.25rem |
| `.not-item` / `.is-item` | 0.9rem | 1.35rem |
| `.not-col-label` | 0.68rem | 1rem |
| `.timing-label` | 0.95rem | 1.4rem |
| `.timing-body` | 0.85rem | 1.25rem |
| `.future-label` | 1rem | 1.5rem |
| `.future-body` | 0.85rem | 1.25rem |
| `.disclaimer p` | 0.8rem | 1.2rem |
| `.cta-contact a` | 1rem | 1.5rem |
| `.cta-closes span` | 0.88rem | 1.3rem |
| Nav `.nav-logo span` | 0.95rem | 1.4rem |
| Nav `.nav-badge` | 0.68rem | 1rem |
| Nav `.nav-cta` | 0.75rem | 1.1rem |
| Footer spans | 0.7–0.75rem | 1.05–1.1rem |
| `.corner-logo span` | 0.68rem | 1rem |

Also scale a few italic accent lines in `TalentDeck.tsx` that use inline `fontSize` styles (e.g., cover subtitle, analogy subtitle, future subtitle, CTA italic, and small muted paragraphs).

### Files touched
1. `src/styles/talent-deck.css` — all size bumps
2. `src/pages/TalentDeck.tsx` — inline `fontSize` style values scaled up

