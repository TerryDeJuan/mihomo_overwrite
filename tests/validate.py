#!/usr/bin/env python3
"""Dependency-free checks for the repository's safe, publishable scaffold."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def main() -> None:
    required = [
        ROOT / "scripts/personal-mihomo.js",
        ROOT / "scripts/prevent-dns-leak.js",
        ROOT / "overrides/personal-mihomo.yaml",
        ROOT / "rules/local-reject.list",
        ROOT / "rules/local-proxy.list",
        ROOT / "rules/local-direct.list",
    ]
    missing = [str(path.relative_to(ROOT)) for path in required if not path.is_file()]
    assert not missing, f"missing files: {missing}"

    text = "\n".join(path.read_text(encoding="utf-8") for path in required)
    forbidden = ("api_token", "access_token", "订阅链接", "password:")
    hits = [marker for marker in forbidden if marker.lower() in text.lower()]
    assert not hits, f"sensitive markers found: {hits}"

    override = (ROOT / "overrides/personal-mihomo.yaml").read_text(encoding="utf-8")
    for provider in ("local_reject", "local_proxy", "local_direct"):
        assert f"{provider}:" in override
        assert f"RULE-SET,{provider}," in override

    print(f"validated {len(required)} publishable files")


if __name__ == "__main__":
    main()
