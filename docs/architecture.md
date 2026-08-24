# Architecture

## Inputs

Subscription data is supplied by Sub-Store or another compatible subscription manager. Sensitive subscription URLs remain outside this repository.

## Transformation layer

JavaScript overrides in `scripts/` should focus on subscription/config transformation:

- normalize proxy names and metadata;
- classify nodes by region, protocol, and multiplier;
- construct policy groups;
- apply DNS, TUN, and routing safeguards;
- preserve user-configurable switches.

## Rule layer

`rules/` contains reusable Mihomo rule-set definitions and policy fragments. Rule providers should be referenced by stable URLs or maintained locally when licensing and redistribution permit.

## Published entry points

`overrides/` contains the files intended to be imported into Sub-Store or Mihomo Party. Each published file should include a short header documenting its purpose, expected input, and upstream inspiration.

The primary entry point is `scripts/personal-mihomo.js`, a repository-owned copy adapted from `baselines/myclash/Script/mihomoScript.js`. Keep subscription-specific values in the input subscription or local runtime configuration, never in Git. `scripts/prevent-dns-leak.js` is intentionally separate so it can be enabled only when a client needs the additional post-processing step.

## Upstream boundary

`baselines/` is read-only reference material. Changes should be made in this repository, not directly in a submodule. If upstream behaviour is copied or adapted, record the source path and commit in the file header or in a design note.
