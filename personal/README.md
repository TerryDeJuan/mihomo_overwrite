cp personal/example.list personal/personal_rules1.list

Edit the new file with your private rules.

## Reference it in Mihomo

For a classical rule list:

```yaml
rule-providers:
  personal_rules1:
    type: http
    behavior: classical
    format: text
    interval: 86400
    url: <https://raw.githubusercontent.com/{YOUR_GIHUB_ACCOUNT}/mihomo_overwrite/main/personal/personal_rules1.list>
    path: ./ruleset/personal_rules1.list
```