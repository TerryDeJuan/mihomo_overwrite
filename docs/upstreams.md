# Upstream baselines

| Upstream | Local path | Role | Default branch |
|---|---|---|---|
| `sub-store-org/Sub-Store` | `baselines/sub-store` | Subscription manager and converter model | `master` |
| `AIsouler/MyClash` | `baselines/myclash` | Mihomo config and override-script reference | `main` |
| `mihomo-party-org/override-hub` | `baselines/override-hub` | Override examples and import conventions | `main` |

Pinned commits are recorded by the superproject's Git index. Review upstream changes before advancing a pin.

## Local adaptations

| Local file | Source | Purpose |
|---|---|---|
| `scripts/personal-mihomo.js` | `myclash/Script/mihomoScript.js` | Full Mihomo subscription/config transformation |
| `scripts/prevent-dns-leak.js` | `override-hub/javascript/防止dns泄露(雾).js` | Optional DNS-leak rule-provider post-processing |

These are copies, not edits to the submodules. Re-compare them against the pinned source when updating a baseline.
