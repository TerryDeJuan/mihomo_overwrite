# Third-party notices

This repository combines original configuration with references to and adaptations of third-party projects. Third-party material remains subject to its original copyright and license; no repository-level license overrides those terms.

## Pinned baseline submodules

| Project | Local path | Pinned commit | License/status |
|---|---|---|---|
| [Sub-Store](https://github.com/sub-store-org/Sub-Store) | `baselines/sub-store` | `19ccd79750557bc6ae418a590303665efe2d4332` | AGPL-3.0; license retained in the submodule |
| [MyClash](https://github.com/AIsouler/MyClash) | `baselines/myclash` | `6433aa11e500875b4c5db941139f93c0236ec326` | No explicit repository license found at this pin |
| [override-hub](https://github.com/mihomo-party-org/override-hub) | `baselines/override-hub` | `1c7c45c3512a22b5b3425eb2e6c101d4d45691ce` | No explicit repository license found at this pin |

Git submodules are separate upstream works; inclusion as a pinned reference does not relicense them.

## Adapted scripts

| Local file | Upstream source | Status |
|---|---|---|
| `scripts/personal-mihomo.js` | `AIsouler/MyClash/Script/mihomoScript.js` | Adapted from a repository with no explicit license found. Keep out of redistributed releases unless permission or a governing license is confirmed, or replace it with an independent implementation. |
| `scripts/prevent-dns-leak.js` | `mihomo-party-org/override-hub/javascript/防止dns泄露(雾).js` | Adapted from a repository with no explicit license found. Keep out of redistributed releases unless permission or a governing license is confirmed, or replace it with an independent implementation. |

Attribution is not a substitute for permission when a source has no license.

## Remote rule providers

The primary configuration references rule data from these upstream projects without copying those remote files into this repository:

| Project | Use | Upstream license |
|---|---|---|
| [ACL4SSR](https://github.com/ACL4SSR/ACL4SSR) | Classical Clash rule providers | CC BY-SA 4.0, as stated in its README |
| [blackmatrix7/ios_rule_script](https://github.com/blackmatrix7/ios_rule_script) | Classical Clash rule providers | GPL-2.0 repository license |
| [MetaCubeX/meta-rules-dat](https://github.com/MetaCubeX/meta-rules-dat) | Mihomo `.mrs` geosite/geoip providers | GPL-3.0 repository license |
| [wwqgtxx/clash-rules](https://github.com/wwqgtxx/clash-rules) | Mihomo direct and fake-IP providers | See upstream repository for applicable terms |

Users retrieve these resources from their upstream URLs. The upstream projects do not endorse this repository.

## Repository-hosted legacy rules

`rules/legacy/` contains public rule lists from the owner's previous configuration for which no sufficiently equivalent maintained upstream list was selected. The files may include accumulated entries originally inspired by multiple public rule ecosystems. They are published with source-oriented filenames and no claim of exclusive authorship over third-party entries.

Files carrying recognizable third-party provenance remain subject to the relevant source terms. In particular:

- `rules/legacy/DivineEngine/Surge/Ruleset/Unbreak.list` retains its DivineEngine path to identify its provenance.
- Files under `rules/legacy/custom/` are owner-maintained aggregations; individual domains, CIDRs, and rule facts may overlap public datasets.

## Private material

Files under `personal/personal_files/` are intentionally excluded from Git. They may contain private domains, addresses, or routing policy and are not part of the public distribution.

## No warranty or endorsement

All configuration and rule data is provided as-is, without warranty. References to upstream projects indicate provenance and compatibility only; they do not imply affiliation or endorsement.
