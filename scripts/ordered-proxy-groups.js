// Sub-Store File Script Operator: requires $content and ProxyUtils.yaml.
// Run after the sorted collection and Mihomo config have been combined.
// Preserve config.proxies order for Proxy and filtered *_Select groups.
function compileMihomoFilter(expression) {
    if (typeof expression !== 'string' || expression.length === 0) {
        return null;
    }
    if (expression.startsWith('(?i:') && expression.endsWith(')')) {
        expression = expression.slice(4, -1);
    }
    return new RegExp(expression, 'i');
}

function matchesMihomoFilter(name, filter) {
    return filter
        .split('`')
        .filter((expression) => expression.length > 0)
        .some((expression) => {
            const matcher = compileMihomoFilter(expression);
            return matcher && matcher.test(name);
        });
}

const config = ProxyUtils.yaml.safeLoad($content ?? '');

if (!config || typeof config !== 'object') {
    throw new Error('The current file content is not a Mihomo configuration object');
}

const orderedProxies = Array.isArray(config.proxies)
    ? config.proxies.filter(
          (proxy) => proxy && typeof proxy.name === 'string',
      )
    : [];

if (orderedProxies.length === 0) {
    throw new Error(
        'No config.proxies found. The File item must receive the collection output, or the script must call produceArtifact().',
    );
}

const orderedNames = orderedProxies.map((proxy) => proxy.name);
const nodeNames = new Set(orderedNames);

if (!Array.isArray(config['proxy-groups'])) {
    throw new Error('The Mihomo configuration has no proxy-groups array');
}

config['proxy-groups'] = config['proxy-groups'].map((group) => {
    if (group && group.type === 'select' && group.name === 'Proxy') {
        // Keep subgroup/built-in entries first, preserving their current order.
        // Remove existing node entries so they can be appended in subscription order.
        const existingEntries = Array.isArray(group.proxies) ? group.proxies : [];
        const preservedEntries = existingEntries.filter(
            (name) => typeof name === 'string' && !nodeNames.has(name),
        );
        const updatedGroup = {
            ...group,
            proxies: [...new Set([...preservedEntries, ...orderedNames])],
        };

        // Explicit membership must not be repopulated or filtered dynamically.
        delete updatedGroup['include-all'];
        delete updatedGroup['include-all-proxies'];
        delete updatedGroup['include-all-providers'];
        delete updatedGroup.filter;

        return updatedGroup;
    }

    if (
        !group ||
        group.type !== 'select' ||
        typeof group.name !== 'string' ||
        !group.name.endsWith('_Select') ||
        typeof group.filter !== 'string'
    ) {
        return group;
    }

    const selectedNames = orderedNames.filter((name) =>
        matchesMihomoFilter(name, group.filter),
    );

    const updatedGroup = {
        ...group,
        proxies: selectedNames,
    };

    delete updatedGroup['include-all'];
    delete updatedGroup.filter;

    return updatedGroup;
});

$content = ProxyUtils.yaml.safeDump(config);
