# Licensing guide

This document is an engineering-oriented licensing inventory, not legal advice.

## Scope

The repository is an aggregate containing:

1. original configuration and documentation;
2. separately pinned Git submodules;
3. adapted JavaScript;
4. remote references to third-party rule data;
5. repository-hosted legacy rule lists.

A single repository-level license cannot erase the original terms that apply to third-party material.

## Current recommendation

Do not add a blanket permissive license to the entire repository yet. First resolve the two adapted scripts whose source repositories have no explicit license at the pinned commits:

- `scripts/personal-mihomo.js`
- `scripts/prevent-dns-leak.js`

Safe options are, in order:

1. obtain explicit permission or confirmation of a governing license;
2. replace each script with an independently written implementation based on public format documentation and observed behavior rather than copied expression;
3. exclude the scripts from public distribution.

After that, original files can be licensed under a chosen license, while `THIRD_PARTY.md` preserves the exceptions and upstream terms.

## Referencing versus copying

A `rule-provider` URL that points to an upstream repository generally leaves the upstream file in that repository. This is preferable to copying a maintained rule list because it:

- preserves provenance;
- receives upstream maintenance;
- avoids publishing stale duplicate files;
- keeps licensing boundaries clearer.

It does not eliminate the need to respect upstream terms when using, modifying, or redistributing the fetched work.

## Submodules

The contents under `baselines/` are Git links to separate repositories. Do not copy their license files into the root as if they licensed this entire project. Keep each submodule's own notices intact and record its pinned source in `THIRD_PARTY.md`.

## Legacy rule lists

Only unmatched public lists needed by `config/mihomoConfig.yaml` belong under `rules/legacy/`. Before adding another file:

1. search maintained upstream repositories;
2. compare actual rule contents, not only filenames;
3. use a maintained upstream URL when behavior is sufficiently equivalent;
4. otherwise retain the needed public list and document its provenance;
5. never copy sensitive files from `personal/personal_files/`.

## Attribution maintenance

Whenever a provider or copied file is added, update `THIRD_PARTY.md` with:

- project and source URL;
- local files or provider keys affected;
- upstream license;
- whether the work is referenced, copied verbatim, or adapted;
- the source revision when practical.

## Disclaimer

Licensing obligations depend on facts such as copyrightability, the degree of adaptation, distribution method, and jurisdiction. Seek qualified legal advice before commercial distribution or when relying on an unlicensed upstream source.
