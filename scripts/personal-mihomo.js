/**
 * English comment
 * English comment
 * English comment
 * English comment
 * English comment
 */

// English comment

// English comment
const Compatible_With_Bettbox = { ruleOptionsEnable: true };

/**
 * English comment
 * English comment
 * English comment
 */
const ruleOptionsEnable = {
  // English comment
  手动选择: true, // English comment
  自动选择: true, // English comment
  负载均衡: true, // English comment

  // English comment
  FCM: true, // English comment
  YouTube: true, // English comment
  Google: true, // English comment
  AI: true, // English comment
  Microsoft: true, // English comment
  Apple: true, // English comment
  Telegram: true, // English comment
  Steam: true, // English comment
  TikTok: true, // English comment
  Twitter: true, // English comment
  Instagram: true, // English comment
  Netflix: true, // English comment
  Emby: true, // English comment
  PikPak: true, // English comment
  Spotify: true, // English comment
  Crypto: true, // English comment
  EHentai: true, // English comment
  AdBlock: true, // English comment

  // English comment
  生成地区自动选择组: true, // English comment
  隐藏地区手动选择组: false, // English comment
  生成倍率组: true, // English comment
  分流组添加所有节点: false, // English comment
  过滤高倍率节点: false, // English comment
  过滤非地区节点: true, // English comment
  屏蔽国外QUIC: true, // English comment
  代理IPV4优先: false, // English comment
  代理IPV6优先: false, // English comment
  链式代理: false, // English comment
};

// English comment
const prefixRules = [
  // English comment
  'RULE-SET,private,直连',

  // English comment
  'RULE-SET,games_cn,直连', // English comment
  'RULE-SET,epicgames,直连',
  'RULE-SET,nvidia_cn,直连',
  'RULE-SET,apple_cn,直连',
  'RULE-SET,microsoft_cn,直连',
  'DOMAIN,fsend.cn,直连',
  'DOMAIN,international-gfe.download.nvidia.com,直连',
  'DOMAIN-SUFFIX,hdslb.com,直连',
];

// English comment
// English comment
// English comment
// const customizeProxies = [
//   {
// English comment
//     type: 'vmess',
//     server: '5.6.7.8',
//     port: 443,
//     uuid: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
//     alterId: 0,
//     cipher: 'auto',
//     tls: true,
//     servername: 'example.com',
//     network: 'ws',
//     'ws-opts': {
//       path: '/path',
//       headers: { Host: 'example.com' },
//     },
//   },
// ];
const customizeProxies = [];

// English comment
const dialerProxyName = '链式中转';

// English comment
const excludeFilter =
  /群|返利|循环|官网|客服|网站|网址|获取|订阅|流量|到期|机场|下次|版本|官址|备用|过期|已用|联系|邮箱|工单|贩卖|通知|倒卖|防止|国内|地址|频道|电报|无法|说明|使用|提示|访问|支持|教程|关注|更新|作者|加入|超时|收藏|优惠|福利|邀请|好友|失联|选择|剩余|公益|发布|DIZTNA|通路|登录|禁止|定时|渠道|牢记|永久|余额|阁下|本站|刷新|导航|建议|重置|以下|⚠️|@|t\.me\/\+|\bexpire\b|\bhttps?:\/\/|\.com|\btraffic\b/iu;

// English comment
const blockForeignQuic = [
  'AND,((NETWORK,UDP),(DST-PORT,443),(NOT,((OR,((RULE-SET,cn_additional),(RULE-SET,cn_ip,no-resolve)))))),REJECT',
];

// English comment
const directProxies = [
  {
    name: '🇨🇳 直连 | 双栈',
    type: 'direct',
  },
  {
    name: '🇨🇳 直连 | IPv4优先',
    type: 'direct',
    'ip-version': 'ipv4-prefer',
  },
  {
    name: '🇨🇳 直连 | IPv6优先',
    type: 'direct',
    'ip-version': 'ipv6-prefer',
  },
  {
    name: '🇨🇳 直连 | 仅IPv4',
    type: 'direct',
    'ip-version': 'ipv4',
  },
  {
    name: '🇨🇳 直连 | 仅IPv6',
    type: 'direct',
    'ip-version': 'ipv6',
  },
];

// English comment
const regionDefinitions = [
  {
    name: '香港',
    flag: '🇭🇰',
    regex: /🇭🇰|香港|(?<![A-Za-z])HKG?(?![A-Za-z])|hong\s*kong/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png',
  },
  {
    name: '日本',
    flag: '🇯🇵',
    regex: /🇯🇵|日本|东京|大阪|京都|(?<![A-Za-z])JPN?(?![A-Za-z])|japan/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png',
  },
  {
    name: '美国',
    flag: '🇺🇸',
    regex:
      /🇺🇸|美国|纽约|洛杉矶|旧金山|芝加哥|休斯顿|迈阿密|西雅图|波士顿|华盛顿|拉斯维加斯|圣何塞|圣地亚哥|(?<![A-Za-z])USA?(?![A-Za-z])|america|united\s*states/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png',
  },
  {
    name: '新加坡',
    flag: '🇸🇬',
    regex: /🇸🇬|新加坡|狮城|(?<![A-Za-z])SGP?(?![A-Za-z])|singapore/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Singapore.png',
  },
  {
    name: '台湾省',
    flag: '🇹🇼',
    regex: /🇹🇼|台湾|台北|高雄|(?<![A-Za-z])TWN?(?![A-Za-z])|taiwan/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Taiwan.png',
  },
];

// English comment
const lowRateRegionName = '低倍率节点';
const highRateRegionName = '高倍率节点';

const rateRegionDefinitions = [
  {
    name: lowRateRegionName,
    regex: /^(?!.*(?:剩|期|客户端|软件)).*(?:(?<!\d)0\.[0-5]|下载|低倍)/,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Available_1.png',
  },
  {
    name: highRateRegionName,
    regex:
      /(?:[*×xX✕✖⨉]\s*(?:[2-9]\d*|[1-9]\d+)(?:\.\d+)?)|(?:(?<![\d.])(?:[2-9]\d*|[1-9]\d+)(?:\.\d+)?\s*(?:倍|[*×xX✕✖⨉]))/u,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Airport.png',
  },
];

// English comment
const allRegionDefinitions = [...regionDefinitions, ...rateRegionDefinitions];

// English comment
const ruleProviderCommonDomain = {
  type: 'http',
  format: 'mrs',
  interval: 86400,
  behavior: 'domain',
};
const ruleProviderCommonIpcidr = {
  type: 'http',
  format: 'mrs',
  interval: 86400,
  behavior: 'ipcidr',
};

// English comment
const baseRuleProviders = {
  // English comment

  private: {
    ...ruleProviderCommonDomain,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/private.mrs',
    path: './ruleset/private.mrs',
    'path-in-bundle': 'geo/geosite/private.mrs',
  },
  private_ip: {
    ...ruleProviderCommonIpcidr,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/private.mrs',
    path: './ruleset/private_ip.mrs',
    'path-in-bundle': 'geo/geoip/private.mrs',
  },
  games_cn: {
    ...ruleProviderCommonDomain,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/category-games@cn.mrs',
    path: './ruleset/category-games@cn.mrs',
    'path-in-bundle': 'geo/geosite/category-games@cn.mrs',
  },
  epicgames: {
    ...ruleProviderCommonDomain,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/epicgames.mrs',
    path: './ruleset/epicgames.mrs',
    'path-in-bundle': 'geo/geosite/epicgames.mrs',
  },
  nvidia_cn: {
    ...ruleProviderCommonDomain,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/nvidia@cn.mrs',
    path: './ruleset/nvidia@cn.mrs',
    'path-in-bundle': 'geo/geosite/nvidia@cn.mrs',
  },
  apple_cn: {
    ...ruleProviderCommonDomain,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/apple@cn.mrs',
    path: './ruleset/apple@cn.mrs',
    'path-in-bundle': 'geo/geosite/apple@cn.mrs',
  },
  microsoft_cn: {
    ...ruleProviderCommonDomain,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/microsoft@cn.mrs',
    path: './ruleset/microsoft@cn.mrs',
    'path-in-bundle': 'geo/geosite/microsoft@cn.mrs',
  },
  'geolocation-cn': {
    ...ruleProviderCommonDomain,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/geolocation-cn.mrs',
    path: './ruleset/geolocation-cn.mrs',
    'path-in-bundle': 'geo/geosite/geolocation-cn.mrs',
  },
  cn_ip: {
    ...ruleProviderCommonIpcidr,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/cn.mrs',
    path: './ruleset/cn_ip.mrs',
    'path-in-bundle': 'geo/geoip/cn.mrs',
  },

  // English comment

  gfw: {
    ...ruleProviderCommonDomain,
    url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/gfw.mrs',
    path: './ruleset/gfw.mrs',
    'path-in-bundle': 'geo/geosite/gfw.mrs',
  },

  // English comment

  fakeip_filter: {
    ...ruleProviderCommonDomain,
    url: 'https://fastly.jsdelivr.net/gh/wwqgtxx/clash-rules@release/fakeip-filter.mrs',
    path: './ruleset/fakeip-filter.mrs',
    'path-in-bundle': 'geo/geosite/private.mrs',
  },
  cn_additional: {
    ...ruleProviderCommonDomain,
    url: 'https://static-file-global.353355.xyz/rules/cn-additional-list.mrs',
    path: './ruleset/cn-additional-list.mrs',
    'path-in-bundle': 'geo/geosite/cn.mrs',
  },
  cn: {
    ...ruleProviderCommonDomain,
    url: 'https://fastly.jsdelivr.net/gh/wwqgtxx/clash-rules@release/direct.mrs',
    path: './ruleset/cn.mrs',
    'path-in-bundle': 'geo/geosite/cn.mrs',
  },
};

// English comment
const groupBaseOption = {
  interval: 600,
  timeout: 3000,
  url: 'https://g.cn/generate_204',
  lazy: true,
  'max-failed-times': 3,
  'empty-fallback': 'REJECT',
};

// English comment
const selectBaseOption = {
  ...groupBaseOption,
  type: 'select',
};

// English comment
const urlTestBaseOption = {
  ...groupBaseOption,
  type: 'url-test',
  tolerance: 50,
  'exclude-type': 'DIRECT',
  icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Auto.png',
  hidden: true,
};

// English comment
const loadBalanceBaseOption = {
  ...groupBaseOption,
  type: 'load-balance',
  strategy: 'sticky-sessions',
  'exclude-type': 'DIRECT',
  icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Round_Robin.png',
  hidden: true,
};

// English comment
const baseGroups = [
  {
    name: '手动选择',
    baseOption: selectBaseOption,
    includeAll: true,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Static.png',
  },
  {
    name: '自动选择',
    baseOption: urlTestBaseOption,
    includeAll: true,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Auto.png',
  },
  {
    name: '负载均衡',
    baseOption: loadBalanceBaseOption,
    includeAll: true,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Round_Robin.png',
  },
];

// English comment
const serviceConfigs = [
  ...baseGroups,
  {
    name: 'FCM',
    baseOption: selectBaseOption,
    direct: true,
    defaultSelected: '直连',
    providers: {
      googlefcm: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/googlefcm.mrs',
        path: './ruleset/googlefcm.mrs',
        'path-in-bundle': 'geo/geosite/googlefcm.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/MiToverG422/Qure@master/IconSet/Color/fcm.png',
    rules: ['RULE-SET,googlefcm,FCM'],
  },
  {
    name: 'YouTube',
    baseOption: selectBaseOption,
    providers: {
      youtube: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/youtube.mrs',
        path: './ruleset/youtube.mrs',
        'path-in-bundle': 'geo/geosite/youtube.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png',
    rules: ['RULE-SET,youtube,YouTube'],
  },
  {
    name: 'Google',
    baseOption: selectBaseOption,
    providers: {
      google: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/google.mrs',
        path: './ruleset/google.mrs',
        'path-in-bundle': 'geo/geosite/google.mrs',
      },
      google_ip: {
        ...ruleProviderCommonIpcidr,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/google.mrs',
        path: './ruleset/google_ip.mrs',
        'path-in-bundle': 'geo/geoip/google.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google_Search.png',
    rules: ['RULE-SET,google,Google', 'RULE-SET,google_ip,Google,no-resolve'],
  },
  {
    name: 'AI',
    baseOption: selectBaseOption,
    defaultSelected: '美国',
    providers: {
      ai: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/category-ai-!cn.mrs',
        path: './ruleset/ai.mrs',
        'path-in-bundle': 'geo/geosite/category-ai-!cn.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png',
    rules: ['RULE-SET,ai,AI'],
  },
  {
    name: 'Microsoft',
    baseOption: selectBaseOption,
    direct: true,
    providers: {
      github: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/github.mrs',
        path: './ruleset/github.mrs',
        'path-in-bundle': 'geo/geosite/github.mrs',
      },
      microsoft: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/microsoft.mrs',
        path: './ruleset/microsoft.mrs',
        'path-in-bundle': 'geo/geosite/microsoft.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Microsoft.png',
    rules: ['RULE-SET,github,默认代理', 'RULE-SET,microsoft,Microsoft'],
  },
  {
    name: 'Apple',
    baseOption: selectBaseOption,
    direct: true,
    providers: {
      apple: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/apple.mrs',
        path: './ruleset/apple.mrs',
        'path-in-bundle': 'geo/geosite/apple.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple.png',
    rules: ['RULE-SET,apple,Apple'],
  },
  {
    name: 'Telegram',
    baseOption: selectBaseOption,
    providers: {
      telegram: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/telegram.mrs',
        path: './ruleset/telegram.mrs',
        'path-in-bundle': 'geo/geosite/telegram.mrs',
      },
      telegram_ip: {
        ...ruleProviderCommonIpcidr,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/telegram.mrs',
        path: './ruleset/telegram_ip.mrs',
        'path-in-bundle': 'geo/geoip/telegram.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram.png',
    rules: ['RULE-SET,telegram,Telegram', 'RULE-SET,telegram_ip,Telegram,no-resolve'],
  },
  {
    name: 'Steam',
    baseOption: selectBaseOption,
    direct: true,
    providers: {
      steam: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/steam.mrs',
        path: './ruleset/steam.mrs',
        'path-in-bundle': 'geo/geosite/steam.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Steam.png',
    rules: ['RULE-SET,steam,Steam'],
  },
  {
    name: 'TikTok',
    baseOption: selectBaseOption,
    defaultSelected: '日本',
    providers: {
      tiktok: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/tiktok.mrs',
        path: './ruleset/tiktok.mrs',
        'path-in-bundle': 'geo/geosite/tiktok.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/TikTok.png',
    rules: ['RULE-SET,tiktok,TikTok'],
  },
  {
    name: 'Twitter',
    baseOption: selectBaseOption,
    providers: {
      twitter: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/twitter.mrs',
        path: './ruleset/twitter.mrs',
        'path-in-bundle': 'geo/geosite/twitter.mrs',
      },
      twitter_ip: {
        ...ruleProviderCommonIpcidr,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/twitter.mrs',
        path: './ruleset/twitter_ip.mrs',
        'path-in-bundle': 'geo/geoip/twitter.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Twitter.png',
    rules: ['RULE-SET,twitter,Twitter', 'RULE-SET,twitter_ip,Twitter,no-resolve'],
  },
  {
    name: 'Instagram',
    baseOption: selectBaseOption,
    providers: {
      instagram: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/instagram.mrs',
        path: './ruleset/instagram.mrs',
        'path-in-bundle': 'geo/geosite/instagram.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Instagram.png',
    rules: ['RULE-SET,instagram,Instagram'],
  },
  {
    name: 'Netflix',
    baseOption: selectBaseOption,
    providers: {
      netflix: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/netflix.mrs',
        path: './ruleset/netflix.mrs',
        'path-in-bundle': 'geo/geosite/netflix.mrs',
      },
      netflix_ip: {
        ...ruleProviderCommonIpcidr,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/netflix.mrs',
        path: './ruleset/netflix_ip.mrs',
        'path-in-bundle': 'geo/geoip/netflix.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Netflix.png',
    rules: ['RULE-SET,netflix,Netflix', 'RULE-SET,netflix_ip,Netflix,no-resolve'],
  },
  {
    name: 'Emby',
    baseOption: selectBaseOption,
    direct: true,
    providers: {
      emby: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/666OS/rules@release/mihomo/domain/Emby.mrs',
        path: './ruleset/emby.mrs',
        'path-in-bundle': 'geo/geosite/category-emby.mrs',
      },
      emos: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/binaryu/emos-proxy-rule@main/rules/emos-mihomo.mrs',
        path: './ruleset/emos.mrs',
        'path-in-bundle': 'geo/geosite/category-emby.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Emby.png',
    rules: [
      'RULE-SET,emby,Emby',
      'RULE-SET,emos,Emby',
      'DOMAIN-SUFFIX,mb3admin.com,Emby',
      'DOMAIN-SUFFIX,nubebelle.com,Emby',
      'DOMAIN-KEYWORD,emby,Emby',
      'PROCESS-NAME,com.mb.android,Emby',
      'PROCESS-NAME,tv.emby.embyatv,Emby',
      'PROCESS-NAME,com.hush.yamby,Emby',
      'PROCESS-NAME,com.jellycine.app,Emby',
      'PROCESS-NAME,com.mountains.hills,Emby',
      'PROCESS-NAME,RodelPlayer.App.exe,Emby',
      'PROCESS-NAME,com.feifeiduck.capyplayer,Emby',
    ],
  },
  {
    name: 'PikPak',
    baseOption: selectBaseOption,
    direct: true,
    providers: {
      pikpak: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/pikpak.mrs',
        path: './ruleset/pikpak.mrs',
        'path-in-bundle': 'geo/geosite/pikpak.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/lige47/QuanX-icon-rule@main/icon/03CNSoft/pikpak.png',
    rules: ['RULE-SET,pikpak,PikPak'],
  },
  {
    name: 'Spotify',
    baseOption: selectBaseOption,
    direct: true,
    providers: {
      spotify: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/spotify.mrs',
        path: './ruleset/spotify.mrs',
        'path-in-bundle': 'geo/geosite/spotify.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Spotify.png',
    rules: ['RULE-SET,spotify,Spotify'],
  },
  {
    name: 'Crypto',
    baseOption: selectBaseOption,
    defaultSelected: '日本',
    providers: {
      cryptocurrency: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/category-cryptocurrency.mrs',
        path: './ruleset/cryptocurrency.mrs',
        'path-in-bundle': 'geo/geosite/category-cryptocurrency.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/lige47/QuanX-icon-rule@main/icon/04ProxySoft/Bitcoin.png',
    rules: ['RULE-SET,cryptocurrency,Crypto'],
  },
  {
    name: 'EHentai',
    baseOption: selectBaseOption,
    defaultSelected: '美国',
    providers: {
      ehentai: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/ehentai.mrs',
        path: './ruleset/ehentai.mrs',
        'path-in-bundle': 'geo/geosite/ehentai.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/lige47/QuanX-icon-rule@main/icon/04ProxySoft/exhentai.png',
    rules: ['RULE-SET,ehentai,EHentai'],
  },
  {
    name: 'AdBlock',
    baseOption: selectBaseOption,
    reject: true,
    providers: {
      adblockmihomolite: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/217heidai/adblockfilters@main/rules/adblockmihomolite.mrs',
        path: './ruleset/adblockmihomolite.mrs',
        'path-in-bundle': 'geo/geosite/category-ads-all.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Advertising.png',
    rules: ['RULE-SET,adblockmihomolite,AdBlock'],
  },
];

// English comment

/**
 * English comment
 */
const regionMatchCache = new Map();
function getMatchedRegions(proxyName) {
  if (regionMatchCache.has(proxyName)) {
    return regionMatchCache.get(proxyName);
  }

  const regions = allRegionDefinitions.filter((region) => region.regex.test(proxyName));
  regionMatchCache.set(proxyName, regions);

  return regions;
}

/**
 * English comment
 */
const flagRegex = /[\u{1F1E6}-\u{1F1FF}]{2}/u;
function normalizeProxyName(proxy) {
  const originalName = proxy.name;

  // English comment
  const flag = originalName.match(flagRegex)?.[0];

  // English comment
  const nameWithoutFlag = (flag ? originalName.replace(flag, '') : originalName).replace(/\s+/g, ' ').trim();

  const matchedRegions = getMatchedRegions(originalName);

  // English comment
  // English comment
  const regionFlag = flag || matchedRegions.find((region) => region.flag)?.flag;
  const normalizedName = regionFlag ? `${regionFlag} ${nameWithoutFlag}` : nameWithoutFlag;

  // English comment
  if (normalizedName !== originalName) {
    regionMatchCache.set(normalizedName, matchedRegions);
  }

  return normalizedName === originalName ? proxy : { ...proxy, name: normalizedName };
}

/**
 * English comment
 */
function fixDialerProxy(proxy, renameMap, normalizedProxyNames) {
  const target = proxy['dialer-proxy'];
  if (!target) return proxy;

  // English comment
  if (renameMap.has(target)) {
    return { ...proxy, 'dialer-proxy': renameMap.get(target) };
  }

  // English comment
  if (normalizedProxyNames.has(target)) {
    return proxy;
  }

  // English comment
  const copy = { ...proxy };
  delete copy['dialer-proxy'];
  return copy;
}

/**
 * English comment
 * English comment
 */
function getIpVersionPreference() {
  const ipv4PreferEnabled = ruleOptionsEnable.代理IPV4优先;
  const ipv6PreferEnabled = ruleOptionsEnable.代理IPV6优先;

  if (ipv4PreferEnabled && !ipv6PreferEnabled) return 'ipv4-prefer';
  if (ipv6PreferEnabled && !ipv4PreferEnabled) return 'ipv6-prefer';
  return null;
}

/**
 * English comment
 */
function filterAndNormalizeProxies(config) {
  // English comment
  regionMatchCache.clear();

  const filterHighRateProxiesEnabled = ruleOptionsEnable.过滤高倍率节点;
  const filterNonRegionProxiesEnabled = ruleOptionsEnable.过滤非地区节点;

  const highRateRegex = filterHighRateProxiesEnabled
    ? rateRegionDefinitions.find((r) => r.name === highRateRegionName)?.regex
    : null;

  const originalProxies = config.proxies || [];

  // English comment
  const filteredRawProxies = originalProxies.filter((proxy) => {
    const type = String(proxy.type ?? '').toLowerCase();
    if (type === 'direct' || type === 'reject' || type === 'rematch') return false;

    if (highRateRegex?.test(proxy.name)) return false;

    if (!filterNonRegionProxiesEnabled) return true;

    const isRegionProxy = getMatchedRegions(proxy.name).some((region) => regionDefinitions.includes(region));

    return isRegionProxy || !excludeFilter.test(proxy.name);
  });

  // English comment
  const renameMap = new Map();

  // English comment
  const normalizedProxies = [];
  const uniqueNames = new Set();

  for (const rawProxy of filteredRawProxies) {
    const normalized = normalizeProxyName(rawProxy);
    if (normalized.name !== rawProxy.name) {
      renameMap.set(rawProxy.name, normalized.name);
    }
    if (!uniqueNames.has(normalized.name)) {
      uniqueNames.add(normalized.name);
      normalizedProxies.push(normalized);
    }
  }

  // English comment
  const normalizedProxyNames = new Set(normalizedProxies.map((p) => p.name));

  // English comment
  const filteredProxies = normalizedProxies.map((proxy) => fixDialerProxy(proxy, renameMap, normalizedProxyNames));

  // English comment
  if (!filteredProxies.length) {
    throw new Error('配置文件中未找到任何代理节点，请使用机场提供的配置文件进行覆写');
  }

  // English comment
  const ipVersionPreference = getIpVersionPreference();
  if (ipVersionPreference) {
    return filteredProxies.map((proxy) =>
      proxy['ip-version'] === ipVersionPreference ? proxy : { ...proxy, 'ip-version': ipVersionPreference },
    );
  }

  return filteredProxies;
}

// English comment

/**
 * English comment
 */
function createRegionGroup(name, icon, proxies) {
  const generateRegionAutoSelectEnabled = ruleOptionsEnable.生成地区自动选择组;
  const hideManualSelectGroupEnabled = ruleOptionsEnable.隐藏地区手动选择组;

  if (generateRegionAutoSelectEnabled) {
    const urlTestName = `${name}-自动选择`;
    return [
      {
        ...urlTestBaseOption,
        name: urlTestName,
        proxies,
      },
      {
        ...selectBaseOption,
        name,
        icon,
        proxies: [...proxies, urlTestName],
        hidden: hideManualSelectGroupEnabled,
      },
    ];
  }
  return [
    {
      ...selectBaseOption,
      name,
      icon,
      proxies,
      hidden: hideManualSelectGroupEnabled,
    },
  ];
}

/**
 * English comment
 */
function buildRegionGroups(filteredProxies, customProxies) {
  const generateRateGroupEnabled = ruleOptionsEnable.生成倍率组;

  // English comment
  const regionGroups = Object.fromEntries(allRegionDefinitions.map(({ name }) => [name, []]));
  const otherProxies = [];

  for (const proxy of [...filteredProxies, ...customProxies]) {
    const matchedRegions = getMatchedRegions(proxy.name);
    const isRegionProxy = matchedRegions.some((region) => regionDefinitions.includes(region));

    for (const region of matchedRegions) {
      regionGroups[region.name].push(proxy.name);
    }

    if (!isRegionProxy) {
      otherProxies.push(proxy.name);
    }
  }

  // English comment
  const generatedRegionGroups = allRegionDefinitions
    .filter((r) => regionGroups[r.name].length > 0 && (generateRateGroupEnabled || !rateRegionDefinitions.includes(r)))
    .flatMap((r) => createRegionGroup(r.name, r.icon, regionGroups[r.name]));

  if (otherProxies.length > 0) {
    generatedRegionGroups.push(
      ...createRegionGroup(
        '其他节点',
        'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/World_Map.png',
        otherProxies,
      ),
    );
  }

  return generatedRegionGroups;
}

// English comment

/**
 * English comment
 * English comment
 * English comment
 */
function buildCustomizeGroups(filteredProxies, customizeList = customizeProxies) {
  const chainEnabled = ruleOptionsEnable.链式代理;

  // English comment
  if (!customizeList.length) {
    if (chainEnabled) {
      throw new Error('启用失败，请在脚本中添加自定义节点后尝试');
    }
    return { customProxies: [], customProxyNames: [], customGroup: null };
  }

  // English comment
  const usedNames = new Set(filteredProxies.map((p) => p.name));

  // English comment
  const customPrefix = '自建-';

  // English comment
  const customProxies = [];
  for (const proxy of customizeList) {
    const normalized = normalizeProxyName(proxy);

    let name = normalized.name;

    // English comment
    // English comment
    while (usedNames.has(name)) {
      name = normalizeProxyName({ name: `${customPrefix}${name}` }).name.replace(`${customPrefix} `, customPrefix);
    }
    usedNames.add(name);

    let customProxy = name === normalized.name ? normalized : { ...normalized, name };
    // English comment
    if (chainEnabled && customProxy['dialer-proxy'] !== dialerProxyName) {
      customProxy = { ...customProxy, 'dialer-proxy': dialerProxyName };
    }
    customProxies.push(customProxy);
  }

  const customProxyNames = customProxies.map((p) => p.name);

  // English comment
  const customGroup = {
    ...selectBaseOption,
    name: chainEnabled ? '链式落地' : '自建节点',
    proxies: customProxyNames,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Server.png',
  };

  return {
    customProxies,
    customProxyNames,
    customGroup,
  };
}

// English comment

/**
 * English comment
 */
function buildFunctionalGroups(filteredProxies, generatedRegionGroups, customizeInfo) {
  const blockForeignQuicEnabled = ruleOptionsEnable.屏蔽国外QUIC;
  const addAllNodesToServiceGroupsEnabled = ruleOptionsEnable.分流组添加所有节点;
  const chainEnabled = ruleOptionsEnable.链式代理;
  const hideManualSelectGroupEnabled = ruleOptionsEnable.隐藏地区手动选择组;

  const functionalGroups = [];
  const functionalRules = [];
  const finalRuleProviders = { ...baseRuleProviders };

  // English comment
  if (!blockForeignQuicEnabled) {
    delete finalRuleProviders.cn_additional;
  }

  // English comment
  const { customProxyNames = [], customGroup = null } = customizeInfo || {};

  // English comment
  const filteredProxyNames = filteredProxies.map((p) => p.name);

  // English comment
  const allProxiesNames = [...customProxyNames, ...filteredProxyNames];

  // English comment
  const groupNamesOfSelect = generatedRegionGroups.filter((g) => g.type === 'select').map((g) => g.name);

  // English comment
  const baseGroupNames = baseGroups.filter((g) => ruleOptionsEnable[g.name]).map((g) => g.name);

  // English comment
  const customGroupNames = customGroup ? [customGroup.name] : [];

  functionalGroups.push({
    ...selectBaseOption,
    name: '默认代理',
    proxies: [...groupNamesOfSelect, ...baseGroupNames, ...customGroupNames],
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png',
  });

  // English comment
  const orderedServiceConfigs = [
    ...serviceConfigs.filter((svc) => svc.name === 'AdBlock'),
    ...serviceConfigs.filter((svc) => svc.name !== 'AdBlock'),
  ];
  for (const svc of orderedServiceConfigs) {
    if (!ruleOptionsEnable[svc.name]) continue;

    functionalRules.push(...(svc.rules || []));
    Object.assign(finalRuleProviders, svc.providers || {});
  }

  // English comment
  for (const svc of serviceConfigs) {
    if (!ruleOptionsEnable[svc.name]) continue;

    // English comment
    let groupProxies = [];
    if (svc.includeAll) {
      groupProxies = [...allProxiesNames];
    } else if (svc.reject) {
      groupProxies = ['REJECT', 'REJECT-DROP', 'PASS'];
    } else {
      groupProxies = !addAllNodesToServiceGroupsEnabled
        ? ['默认代理', ...customGroupNames, ...baseGroupNames, ...groupNamesOfSelect, ...(svc.direct ? ['直连'] : [])]
        : [
            '默认代理',
            ...customGroupNames,
            ...baseGroupNames,
            ...groupNamesOfSelect,
            ...allProxiesNames,
            ...(svc.direct ? ['直连'] : []),
          ];
    }

    functionalGroups.push({
      ...svc.baseOption,
      name: svc.name,
      icon: svc.icon,
      proxies: groupProxies,
      ...(svc.defaultSelected !== undefined && {
        'default-selected': svc.defaultSelected,
      }),
    });
  }

  // English comment
  functionalGroups.push({
    ...selectBaseOption,
    name: '漏网之鱼',
    proxies: ['默认代理', '直连', ...groupNamesOfSelect],
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Stack.png',
  });

  // English comment
  if (customGroup) {
    functionalGroups.push(customGroup);
  }

  // English comment
  // English comment
  const chainGroup =
    chainEnabled && customGroup
      ? {
          ...selectBaseOption,
          name: dialerProxyName,
          proxies: filteredProxyNames,
          icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Bypass.png',
        }
      : null;

  const directProxiesGroup = {
    ...selectBaseOption,
    name: '直连',
    proxies: [...directProxies.map((p) => p.name)],
    url: 'https://connectivitycheck.platform.hicloud.com/generate_204',
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/China_Map.png',
    hidden: hideManualSelectGroupEnabled,
  };

  // English comment
  const globalGroup = {
    ...selectBaseOption,
    name: 'GLOBAL',
    proxies: [
      ...functionalGroups.map((g) => g.name),
      ...(chainGroup ? [chainGroup.name] : []),
      directProxiesGroup.name,
      ...generatedRegionGroups.map((g) => g.name),
    ],
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Global.png',
  };

  return { globalGroup, functionalGroups, functionalRules, finalRuleProviders, chainGroup, directProxiesGroup };
}

// English comment

// English comment
const commonDnsList = [
  // English comment
  '223.5.5.5',
  '223.6.6.6',
  '119.29.29.29',
  '1.12.12.12',
  '120.53.53.53',
  '114.114.114.114',
  '180.76.76.76',
  '1.2.4.8',
  '116.116.116.116',
  '101.226.4.6',
  '123.125.81.6',
  '180.184.1.1',
  '180.184.2.2',

  // English comment
  '1.1.1.1',
  '1.0.0.1',
  '8.8.8.8',
  '8.8.4.4',
  '9.9.9.9',
  '149.112.112.112',
  '208.67.222.222',
  '208.67.220.220',
  '94.140.14.14',
  '94.140.15.15',
  '76.76.2.0',
  '76.76.10.0',
  '185.228.168.9',
  '185.228.169.9',
  '77.88.8.8',
  '77.88.8.1',
  '156.154.70.1',
  '156.154.71.1',

  // English comment
  'alidns',
  'doh.pub',
  'dot.pub',
  'dns.pub',
  'dnspod',
  'dns.baidu',

  // English comment
  'dns.google',
  'cloudflare',
  'quad9',
  'opendns',
  'nextdns',
  'adguard',

  // English comment
  'system',
];

// English comment
const commonDnsRegex = new RegExp(
  commonDnsList.map((dns) => dns.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'),
  'i',
);

// English comment
const chinaDNS = ['223.5.5.5', '119.29.29.29'];
const chinaDohDNS = ['https://223.5.5.5/dns-query#DIRECT', 'https://1.12.12.12/dns-query#DIRECT'];
const foreignDNS = ['https://cloudflare-dns.com/dns-query#默认代理', 'https://dns.google/dns-query#默认代理'];

/**
 * English comment
 */
function hostSpecificity(pattern) {
  if (pattern.startsWith('+.')) return 2;
  if (pattern.startsWith('.')) return 1;
  if (pattern.includes('*')) return 0;
  return 3;
}

/**
 * English comment
 */
function matchDomainPattern(pattern, domains) {
  pattern = pattern.toLowerCase();

  // English comment
  if (!pattern.includes('*') && !pattern.startsWith('+.') && !pattern.startsWith('.')) {
    return typeof domains === 'string'
      ? domains.toLowerCase() === pattern
      : [...domains].some((d) => d.toLowerCase() === pattern);
  }

  // English comment
  const domainList = typeof domains === 'string' ? [domains.toLowerCase()] : [...domains].map((d) => d.toLowerCase());

  // +.example.com
  if (pattern.startsWith('+.')) {
    const suffix = pattern.slice(2);
    return domainList.some((domain) => domain === suffix || domain.endsWith(`.${suffix}`));
  }

  // .example.com
  if (pattern.startsWith('.')) {
    const suffix = pattern.slice(1);
    return domainList.some((domain) => domain !== suffix && domain.endsWith(`.${suffix}`));
  }

  // English comment
  const patternParts = pattern.split('.');
  return domainList.some((domain) => {
    const domainParts = domain.split('.');
    return (
      patternParts.length === domainParts.length &&
      patternParts.every((part, index) => part === '*' || part === domainParts[index])
    );
  });
}

/**
 * English comment
 * English comment
 * English comment
 */
function applyHostsToProxies(proxies, hosts) {
  if (!hosts || typeof hosts !== 'object') return proxies;

  // English comment
  const hostEntries = Object.entries(hosts)
    .filter(
      ([, value]) => (typeof value === 'string' && value.length > 0) || (Array.isArray(value) && value.length > 0),
    )
    .sort((a, b) => hostSpecificity(b[0]) - hostSpecificity(a[0]));

  // English comment
  if (hostEntries.length === 0) return proxies;

  // English comment
  const targetOf = (value) => {
    if (Array.isArray(value)) value = value.find((v) => typeof v === 'string' && v.length > 0);
    return typeof value === 'string' && value.length > 0 ? value : null;
  };

  // English comment
  const resolveCache = new Map();

  // English comment
  const resolve = (server) => {
    const cached = resolveCache.get(server);
    if (cached !== undefined) return cached;

    const seen = new Set();
    let current = server.toLowerCase();
    let result = server;
    while (!seen.has(current)) {
      seen.add(current);
      const entry = hostEntries.find(([pattern]) => matchDomainPattern(pattern, current));
      const target = entry && targetOf(entry[1]);
      if (!target) break;
      result = target;
      current = target.toLowerCase();
    }
    resolveCache.set(server, result);
    return result;
  };

  return proxies.map((proxy) => {
    if (typeof proxy.server !== 'string') return proxy;
    const server = resolve(proxy.server);
    return server === proxy.server ? proxy : { ...proxy, server };
  });
}

/**
 * English comment
 * English comment
 */
function stripDnsSuffix(dns) {
  const str = String(dns);
  const hashIndex = str.indexOf('#');
  if (hashIndex === -1) return str;

  const suffix = str
    .slice(hashIndex + 1)
    .toLowerCase()
    .trim();
  if (suffix === 'direct' || suffix.startsWith('direct&')) return str;

  return str.slice(0, hashIndex);
}

/**
 * English comment
 */
function isIpAddress(server) {
  return /^\d{1,3}(\.\d{1,3}){3}$/.test(server) || server.includes(':');
}

/**
 * English comment
 */
function buildDnsAndHostsConfig(config, filteredProxies) {
  const originalDnsConfig = config.dns || {};

  // English comment
  // English comment
  // English comment
  const proxyServerNameservers = originalDnsConfig['proxy-server-nameserver'] || [];
  const listenValue = originalDnsConfig['listen'];

  const matchesLocalDnsListener =
    proxyServerNameservers.length === 1 &&
    typeof listenValue === 'string' &&
    listenValue.includes('0.0.0.0') &&
    proxyServerNameservers.some((dns) => String(dns).toLowerCase().includes('127.0.0.1'));

  const shouldRewriteByHosts =
    proxyServerNameservers.length === 1 &&
    typeof listenValue === 'string' &&
    listenValue.length > 0 &&
    (proxyServerNameservers.some((dns) => String(dns).toLowerCase().includes(listenValue.toLowerCase())) ||
      matchesLocalDnsListener);

  // English comment
  const mappedProxies = shouldRewriteByHosts ? applyHostsToProxies(filteredProxies, config.hosts) : filteredProxies;

  // English comment
  const proxyDomains = new Set(
    mappedProxies
      .filter((proxy) => typeof proxy.server === 'string')
      .map((proxy) => proxy.server.toLowerCase())
      .filter((server) => !isIpAddress(server)),
  );

  // English comment
  const privateProxyServerNameservers = shouldRewriteByHosts ? [] : proxyServerNameservers;

  const isCommonDns = (dns) => commonDnsRegex.test(String(dns));

  // English comment
  const privateDNS = [
    ...new Set(
      [...(originalDnsConfig['nameserver'] || []), ...privateProxyServerNameservers]
        .map(stripDnsSuffix)
        .filter((dns) => dns.length > 0 && !isCommonDns(dns)),
    ),
  ];

  // English comment
  const proxyServerPolicy = {};
  for (const [domain, dns] of Object.entries({
    ...originalDnsConfig['nameserver-policy'],
    ...originalDnsConfig['proxy-server-nameserver-policy'],
  })) {
    if (!matchDomainPattern(domain, proxyDomains)) continue;

    // English comment
    const value = Array.isArray(dns) ? dns.map(stripDnsSuffix).filter((d) => d.length > 0) : stripDnsSuffix(dns);
    if (Array.isArray(value) && value.length === 0) continue;

    proxyServerPolicy[domain] = value;
  }

  // English comment
  if (privateDNS.length > 0 && Object.keys(proxyServerPolicy).length === 0) {
    for (const domain of proxyDomains) {
      proxyServerPolicy[domain] = privateDNS;
    }
  }

  // English comment
  // English comment
  const originalFakeIpFilter = originalDnsConfig['fake-ip-filter'] || [];
  const proxyFakeIpFilter = originalFakeIpFilter.filter((pattern) => {
    const p = String(pattern);
    return matchDomainPattern(p, proxyDomains);
  });

  const dns = {
    enable: true,
    ipv6: true,
    'use-hosts': true,
    'cache-algorithm': 'arc',
    'use-system-hosts': true,
    'enhanced-mode': 'fake-ip',
    'fake-ip-range': '198.18.0.1/15',
    'fake-ip-range6': '2001:2::1/48',
    'fake-ip-filter': ['rule-set:private', 'rule-set:fakeip_filter', 'rule-set:geolocation-cn', ...proxyFakeIpFilter],
    'proxy-server-nameserver': chinaDohDNS,
    ...(Object.keys(proxyServerPolicy).length > 0 && {
      'proxy-server-nameserver-policy': proxyServerPolicy,
    }),
    'default-nameserver': chinaDNS,
    nameserver: foreignDNS,
    'nameserver-policy': {
      'rule-set:cn': chinaDNS,
    },
    'direct-nameserver': ['system', ...chinaDNS],
  };

  const hosts = {
    'cloudflare-dns.com': ['1.1.1.1', '1.0.0.1'],
    'dns.google': ['8.8.8.8', '8.8.4.4'],

    // English comment
    'services.googleapis.cn': ['services.googleapis.com'],

    // English comment
    '+.mcdn.bilivideo.com': ['0.0.0.0'],
    '+.mcdn.bilivideo.cn': ['0.0.0.0'],
    '+.edge.mountaintoys.cn': ['0.0.0.0'],
    '+.h2.smtcdns.net': ['0.0.0.0'],
  };

  return { dns, hosts, proxies: mappedProxies };
}

// English comment

/**
 * English comment
 */
function main(config) {
  const newConfig = {};

  // English comment
  const filteredProxies = filterAndNormalizeProxies(config);

  // English comment
  const { customProxies, customProxyNames, customGroup } = buildCustomizeGroups(filteredProxies);

  // English comment
  const generatedRegionGroups = buildRegionGroups(filteredProxies, customProxies);

  // English comment
  const { globalGroup, functionalGroups, functionalRules, finalRuleProviders, chainGroup, directProxiesGroup } =
    buildFunctionalGroups(filteredProxies, generatedRegionGroups, { customProxyNames, customGroup });

  // English comment
  const { dns, hosts, proxies: mappedProxies } = buildDnsAndHostsConfig(config, filteredProxies);

  newConfig['dns'] = dns;
  newConfig['hosts'] = hosts;
  newConfig['mixed-port'] = 7890;
  newConfig['allow-lan'] = true;
  newConfig['ipv6'] = true;
  newConfig['mode'] = 'rule';
  newConfig['log-level'] = 'info';
  newConfig['bind-address'] = '*';
  newConfig['unified-delay'] = true;
  newConfig['tcp-concurrent'] = true;
  newConfig['keep-alive-interval'] = 60;
  newConfig['find-process-mode'] = 'strict';

  newConfig['external-controller'] = '127.0.0.1:9090';
  newConfig['external-ui'] = 'ui';
  newConfig['external-ui-url'] = 'https://github.com/Zephyruso/zashboard/releases/latest/download/dist.zip';

  newConfig['profile'] = {
    'store-selected': true,
    'store-fake-ip': true,
  };

  newConfig['ntp'] = {
    enable: true,
    'write-to-system': false,
    server: 'ntp.aliyun.com',
    port: 123,
    interval: 60,
  };

  newConfig['tun'] = {
    enable: true,
    stack: 'system',
    'auto-route': true,
    'strict-route': true,
    'auto-redirect': true,
    'auto-detect-interface': true,
    'dns-hijack': ['any:53', 'tcp://any:53'],
  };

  newConfig['proxies'] = [...customProxies, ...mappedProxies, ...directProxies];
  newConfig['proxy-groups'] = [
    globalGroup,
    ...functionalGroups,
    ...(chainGroup ? [chainGroup] : []),
    directProxiesGroup,
    ...generatedRegionGroups,
  ];
  newConfig['rule-providers'] = finalRuleProviders;

  newConfig['rules'] = [
    ...prefixRules,
    ...(ruleOptionsEnable.屏蔽国外QUIC ? blockForeignQuic : []),
    ...functionalRules,

    // English comment
    'RULE-SET,gfw,默认代理',
    'RULE-SET,geolocation-cn,直连',
    'RULE-SET,cn_ip,直连',
    'RULE-SET,private_ip,直连',
    'MATCH,漏网之鱼',
  ];

  return newConfig;
}
