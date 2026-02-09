

# Update Benefits and Roadmap Section Content

## Analysis

After comparing the proposed content against the existing sections, here is the recommended mapping:

### Benefits Section — Replace All 4 Cards with 6 New Ones

The current 4 benefits (Private Certificate, Public Proof Page, Continuity Over Time, You Control Exposure) are feature-descriptive but abstract. The 6 new "Available Now" items are more action-oriented and consumer-friendly. All 6 fit well and should replace the existing set. The grid changes from 2x2 to 2x3.

| New Benefit | Replaces / Covers |
|---|---|
| Create permanent proof of who you are | New — strongest lead card |
| Establish clear ownership of your identity | New — addresses impersonation concern |
| Protect against unauthorized use of your likeness | New — ties directly to Problem Section scenarios |
| One identity, one source of truth | Continuity Over Time (clearer phrasing) |
| Private by default, shareable when needed | Private Certificate + You Control Exposure (merged) |
| A unique digital signature you control | Public Proof Page (reframed around user agency) |

### Roadmap Section — Replace "What's Coming" List with New Future Items

The current future features list (Opt-in model permissions, Revocable proof tokens, Higher-exposure tiers, API access for platforms) reads like internal product notes. The 4 new "Designed for the Future" items are written for consumers and explain *why* each matters. Direct replacement.

| New Future Item | Replaces |
|---|---|
| Built for permission-based AI systems | Opt-in model permissions |
| Identity keys for streamlined authorization | API access for platforms |
| Support for additional credentials over time | Revocable proof tokens / Higher-exposure tiers |
| Long-term identity control | New — adds emotional weight |

The "Version 1 (now)" checklist in the Roadmap stays as-is — it still accurately describes shipped features and pairs well with the new future items.

---

## Technical Details

### File: `src/components/home/BenefitsSection.tsx`

- Replace the `benefits` array with 6 new items (new titles, descriptions, and appropriate Lucide icons)
- Update grid from `md:grid-cols-2` to keep `md:grid-cols-2` but now with 3 rows (6 cards total)
- Assign icons: `Shield` (permanent proof), `Fingerprint` (ownership), `ShieldAlert` (likeness protection), `Target` (single source), `Lock` (private by default), `Scan` (digital signature)
- Keep existing animation pattern (alternating lateral slides)

### File: `src/components/home/HomeRoadmapSection.tsx`

- Replace the `futureFeatures` array with the 4 new items
- Each item gets a short description subtitle (the explanatory text from the user's input) displayed below the title in smaller, muted text
- Update the "highlight" flag: "Built for permission-based AI systems" remains the highlighted/primary item
- Keep existing layout, animations, and "Version 1 (now)" card unchanged
- Update the italic footnote to match the new permission-based framing

