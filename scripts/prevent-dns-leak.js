function main(config) {
  // Ensure the DNS-leak prevention provider is available before adding its rule.
  if (!config['rule-providers']) {
    config['rule-providers'] = {};
  }
  const newProvider = {
    type: "http",
    interval: 86400,
    behavior: "domain",
    format: "text",
    url: "https://raw.githubusercontent.com/xishang0128/rules/main/clash%20or%20stash/prevent_dns_leak/prevent_dns_leak_domain.list"
  };
  config['rule-providers']['prevent_dns_leak'] = newProvider;

  // Route the prevention rule to the same fallback group used by MATCH.
  const matchRule = config.rules.find(rule => rule.startsWith("MATCH"));
  const name = matchRule ? matchRule.split(",").pop() : null;
  const newRule = `RULE-SET,prevent_dns_leak,${name}`;
  if (name) {
    config.rules.unshift(newRule);
  }

  // Keep fake-IP mode enabled, as the prevention rules rely on it.
  if (!config.dns) {
    config.dns = {};
  }
  const dnsConfig = config.dns;
  if (!dnsConfig['enhanced-mode'] || dnsConfig['enhanced-mode'] !== "fake-ip") {
    dnsConfig['enhanced-mode'] = "fake-ip";
  }

  return config;
}
