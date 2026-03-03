

## Intinuous Backend Dashboard — Build Plan

This is a large feature. The plan creates a complete app shell and all 9 V1 screens using mock data, plus reusable components — designed so you can later wire real APIs in Cursor.

---

### Architecture

```text
/app                 ← Dashboard root (new)
├── /app             ← Overview (default)
├── /app/identities
├── /app/attestations
├── /app/assets
├── /app/proof
├── /app/billing
├── /app/security
├── /app/activity
└── /app/settings
```

A new `AppLayout` component wraps all `/app/*` routes with:
- **Left sidebar** (using existing shadcn Sidebar components) with the 9 nav items + Intinuous logo
- **Top bar** with "Start Verification" CTA button, notifications bell, and user avatar/menu
- **Main content area** via `SidebarInset`

All screens use mock/placeholder data — no real API calls — so they're ready for Cursor integration.

---

### New Files

#### Layout & Shell
| File | Purpose |
|------|---------|
| `src/components/app/AppLayout.tsx` | Sidebar + top bar shell using existing `Sidebar*` components |
| `src/components/app/AppSidebar.tsx` | Nav items, logo, collapsed state |
| `src/components/app/AppTopBar.tsx` | Verification CTA, notifications, user menu |

#### Reusable Components
| File | Purpose |
|------|---------|
| `src/components/app/StatusBadge.tsx` | ACTIVE / REVOKED / EXPIRED / PENDING pill variants |
| `src/components/app/InfoCard.tsx` | Bordered card with label + value + optional action |
| `src/components/app/MetricCard.tsx` | Stat card with icon, number, label |
| `src/components/app/Timeline.tsx` | Vertical event timeline with icons |
| `src/components/app/DataTable.tsx` | Generic table with row actions |
| `src/components/app/EmptyState.tsx` | Icon + message + CTA |
| `src/components/app/CopyField.tsx` | Read-only field with copy button + toast |
| `src/components/app/IntinuousBadge.tsx` | Public-facing "Verified by Intinuous" pill (light/dark, status variants) |

#### Screens (9 pages)
| File | Purpose |
|------|---------|
| `src/pages/app/Overview.tsx` | Status cards, quick actions, latest attestation |
| `src/pages/app/Identities.tsx` | Identity status, public ID, certificate preferences, timeline |
| `src/pages/app/Attestations.tsx` | DataTable of attestations + detail drawer |
| `src/pages/app/Assets.tsx` | Upload area + asset table with verify/revoke actions |
| `src/pages/app/PublicProof.tsx` | Proof URL, embed code, badge preview, revocation controls |
| `src/pages/app/Billing.tsx` | Plan info card, manage subscription button |
| `src/pages/app/Security.tsx` | Session list placeholder, last login |
| `src/pages/app/Activity.tsx` | Timeline feed of events |
| `src/pages/app/Settings.tsx` | Profile, communication, legal links |

#### Mock Data
| File | Purpose |
|------|---------|
| `src/data/mockDashboard.ts` | All placeholder data for every screen |

---

### Modified Files

| File | Change |
|------|--------|
| `src/App.tsx` | Add `/app/*` routes wrapped in `AppLayout` |

---

### Design Approach

- Follows existing design system exactly: `#080808` bg, `#D7B25A` gold accent, Inter/IBM Plex Mono fonts
- Uses existing shadcn components: Sidebar, Card, Table, Dialog, Tabs, Separator, Badge, Button, Sheet, Tooltip, Skeleton, Toast
- All interaction states: loading skeletons, empty states with CTAs, confirmation dialogs for revocation, copy-to-clipboard toasts
- Mobile: sidebar collapses to sheet overlay, tables become card lists on small screens
- V2 hooks: nav structure and component props accommodate future multi-asset types, org roles, API keys sections without needing redesign

---

### Implementation Order

1. Mock data + reusable components (StatusBadge, InfoCard, MetricCard, CopyField, DataTable, Timeline, EmptyState, IntinuousBadge)
2. AppSidebar + AppTopBar + AppLayout shell
3. Overview screen
4. Identities + Attestations screens
5. Assets + PublicProof screens
6. Billing + Security + Activity + Settings screens
7. Routes in App.tsx

This is ~20 new files. All use mock data so they're immediately interactive and ready for API wiring in Cursor.

