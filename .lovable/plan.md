

# Copy Balance Tweaks

Two targeted text edits to even out card lengths across sections.

---

## 1. Tighten the middle Problem stat card

**File:** `src/components/home/ProblemSection.tsx` (line 12)

Current (25 words):
> "There is currently no standard way for AI systems to ask permission before generating a real person's likeness"

Proposed (14 words):
> "No standard exists for AI systems to ask permission before generating someone's likeness"

This brings it in line with the brevity of cards 1 and 3.

---

## 2. Balance the Audience cards

**File:** `src/components/home/HomeAudienceSection.tsx` (lines 4-34)

The Actors card is ~35 words while others range from 12-22. Two options:

**Option A — Trim Actors to match the others:**
> "AI-generated likenesses are already being used without consent. Intinuous gives performers a verifiable record and a technical foundation for likeness rights."

(Removes "Hollywood is already facing" and "before something goes wrong" — cuts from 35 to 24 words, matching the middle of the pack.)

**Option B — Expand the shorter cards to match Actors.** This adds more substance but makes the grid heavier overall.

**Recommendation:** Option A. The brief cards feel intentional and punchy — trimming the outlier keeps the grid tight.

---

## Summary
- 2 files modified, 2 lines changed total
- No structural or visual changes

