# Personal Mihomo Override Rules

A personal Mihomo/Clash override-rules project intended for use with [Sub-Store](https://github.com/sub-store-org/Sub-Store) and Mihomo-compatible clients.

This repository is developed from three upstream references:

- [Sub-Store](https://github.com/sub-store-org/Sub-Store) — subscription management and converter integration.
- [MyClash](https://github.com/AIsouler/MyClash) — Mihomo configuration and JavaScript override patterns.
- [override-hub](https://github.com/mihomo-party-org/override-hub) — reusable Mihomo Party YAML and JavaScript overrides.

## Repository layout

```text
baselines/                 Pinned upstream repositories as Git submodules
├── sub-store/
├── myclash/
└── override-hub/

overrides/                 Final Sub-Store/Mihomo override entry points
rules/                     Rule providers, rule-set definitions, and policy fragments
scripts/                   Reusable JavaScript transformation scripts
tests/                     Fixtures and validation tests
docs/                      Design notes and usage documentation
```

## Development principles

1. Keep upstream code in `baselines/`; do not edit submodules in place.
2. Build personal behaviour in this repository and preserve upstream attribution.
3. Separate subscription transformation from rule-provider data where practical.
4. Prefer deterministic, documented transformations over opaque one-off patches.
5. Never commit subscription URLs, API tokens, private node data, or local credentials.
6. Validate generated YAML and JavaScript before publishing a raw URL for Sub-Store.

## Baseline updates

```bash
git submodule update --init --recursive
git -C baselines/sub-store fetch --depth 1 origin master
git -C baselines/sub-store checkout FETCH_HEAD
git -C baselines/myclash fetch --depth 1 origin main
git -C baselines/myclash checkout FETCH_HEAD
git -C baselines/override-hub fetch --depth 1 origin main
git -C baselines/override-hub checkout FETCH_HEAD
git add baselines .gitmodules
git commit -m "chore: update upstream baselines"
```

The update command changes pinned commits locally; review the diff before committing.

## Published entry points

- `scripts/personal-mihomo.js` — adapted from the pinned MyClash Mihomo override. It builds region/service groups, DNS safeguards, TUN defaults, and rule providers without embedding subscription data.
- `scripts/prevent-dns-leak.js` — optional small post-processing override adapted from override-hub.
- `overrides/personal-mihomo.yaml` — local classical rule-provider fragment.
- `rules/local-*.list` — sanitized, intentionally empty local rule lists ready for personal entries.

Run `python3 tests/validate.py` before publishing. The validator checks that required entry points exist and that obvious credential markers are absent.

## Licensing and attribution

This repository is an aggregate of original material, separate upstream submodules,
adapted scripts, and third-party rule providers. See [THIRD_PARTY.md](THIRD_PARTY.md)
for source-specific notices and [docs/licensing.md](docs/licensing.md) for the current
licensing policy. No repository-level license overrides an upstream work's terms.
