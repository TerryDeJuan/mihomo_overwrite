#!/usr/bin/env python3
"""Dependency-free checks for the repository's publishable configuration."""
import re
from pathlib import Path
from typing import Tuple

ROOT = Path(__file__).resolve().parents[1]


def validate_primary_config(path: Path) -> Tuple[int, int, int]:
    """Check the primary Mihomo YAML relationships without third-party modules."""
    text = path.read_text(encoding="utf-8-sig")
    assert not re.search(r"(?m)^\s+url:\s+https?://", text), "quote all HTTP URLs"

    provider_section, remainder = text.split("\nproxy-groups:\n", 1)
    group_section, rule_section = remainder.split("\nrules:\n", 1)
    provider_section = provider_section.split("\nrule-providers:\n", 1)[1]

    providers = set(re.findall(r"(?m)^  ([A-Za-z0-9_-]+):$", provider_section))
    groups = set(re.findall(r"(?m)^  - name: '([^']+)'$", group_section))
    rules = re.findall(r"(?m)^  - (.+)$", rule_section)

    assert providers, "primary config has no rule providers"
    assert groups, "primary config has no proxy groups"
    assert rules, "primary config has no rules"
    assert "Proxy" in groups and "Global" not in groups
    assert "CN_Service" in groups
    assert rules[-1] == "MATCH,Remaining", "MATCH,Remaining must be last"
    assert "GEOIP,CN,Direct,no-resolve" in rules
    assert "home.list" not in text

    paths = re.findall(r"(?m)^    path: '([^']+)'$", provider_section)
    assert len(paths) == len(set(paths)), "rule-provider cache paths must be unique"

    for rule in rules:
        if not rule.startswith("RULE-SET,"):
            continue
        _, provider, group, *_ = rule.split(",")
        assert provider in providers, f"unknown rule provider: {provider}"
        assert group in groups, f"unknown proxy group: {group}"

    raw_prefix = (
        "https://raw.githubusercontent.com/TerryDeJuan/"
        "mihomo_overwrite/main/rules/legacy/"
    )
    raw_paths = re.findall(
        rf"(?m)^    url: '{re.escape(raw_prefix)}([^']+)'$", provider_section
    )
    from urllib.parse import unquote

    expected = {unquote(item) for item in raw_paths}
    actual = {
        item.relative_to(ROOT / "rules/legacy").as_posix()
        for item in (ROOT / "rules/legacy").rglob("*")
        if item.is_file()
    }
    assert expected == actual, (
        f"rules/legacy mismatch: missing={sorted(expected - actual)}, "
        f"unreferenced={sorted(actual - expected)}"
    )
    return len(providers), len(groups), len(rules)


def main() -> None:
    required = [
        ROOT / "config/mihomoConfig.yaml",
        ROOT / "scripts/personal-mihomo.js",
        ROOT / "scripts/prevent-dns-leak.js",
        ROOT / "overrides/personal-mihomo.yaml",
        ROOT / "rules/local-reject.list",
        ROOT / "rules/local-proxy.list",
        ROOT / "rules/local-direct.list",
    ]
    missing = [str(path.relative_to(ROOT)) for path in required if not path.is_file()]
    assert not missing, f"missing files: {missing}"

    secret_scan_files = required[1:]
    text = "\n".join(
        path.read_text(encoding="utf-8-sig") for path in secret_scan_files
    )
    forbidden = ("api_token", "access_token", "订阅链接", "password:")
    hits = [marker for marker in forbidden if marker.lower() in text.lower()]
    assert not hits, f"sensitive markers found: {hits}"

    override = (ROOT / "overrides/personal-mihomo.yaml").read_text(encoding="utf-8")
    for provider in ("local_reject", "local_proxy", "local_direct"):
        assert f"{provider}:" in override
        assert f"RULE-SET,{provider}," in override

    provider_count, group_count, rule_count = validate_primary_config(required[0])
    print(
        f"validated {len(required)} publishable files; "
        f"primary config has {provider_count} providers, "
        f"{group_count} groups, and {rule_count} rules"
    )


if __name__ == "__main__":
    main()
