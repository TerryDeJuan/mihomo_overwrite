#!/usr/bin/env node
/**
 * Generate the personal Mihomo override from the repository configuration template.
 * The YAML file is the source of truth for providers, proxy groups, filters, and routing order.
 * Subscription nodes remain dynamic: only usable proxy nodes from the incoming configuration are retained.
 */

const TEMPLATE = {
  "rule-providers": {
    "private": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "domain",
      "url": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/private.mrs",
      "path": "./ruleset/private.mrs",
      "path-in-bundle": "geo/geosite/private.mrs"
    },
    "fakeip_filter": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "domain",
      "url": "https://fastly.jsdelivr.net/gh/wwqgtxx/clash-rules@release/fakeip-filter.mrs",
      "path": "./ruleset/fakeip_filter.mrs"
    },
    "cn": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "domain",
      "url": "https://fastly.jsdelivr.net/gh/wwqgtxx/clash-rules@release/direct.mrs",
      "path": "./ruleset/cn.mrs"
    },
    "github": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "domain",
      "url": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/github.mrs",
      "path": "./ruleset/github.mrs",
      "path-in-bundle": "geo/geosite/github.mrs"
    },
    "docker": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "domain",
      "url": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/docker.mrs",
      "path": "./ruleset/docker.mrs",
      "path-in-bundle": "geo/geosite/docker.mrs"
    },
    "matrix": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "domain",
      "url": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/matrix.mrs",
      "path": "./ruleset/matrix.mrs",
      "path-in-bundle": "geo/geosite/matrix.mrs"
    },
    "twitter": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "domain",
      "url": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/twitter.mrs",
      "path": "./ruleset/twitter.mrs",
      "path-in-bundle": "geo/geosite/twitter.mrs"
    },
    "meta": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "domain",
      "url": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/meta.mrs",
      "path": "./ruleset/meta.mrs",
      "path-in-bundle": "geo/geosite/meta.mrs"
    },
    "discord": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "domain",
      "url": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/discord.mrs",
      "path": "./ruleset/discord.mrs",
      "path-in-bundle": "geo/geosite/discord.mrs"
    },
    "signal": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "domain",
      "url": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/signal.mrs",
      "path": "./ruleset/signal.mrs",
      "path-in-bundle": "geo/geosite/signal.mrs"
    },
    "line": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "domain",
      "url": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/line.mrs",
      "path": "./ruleset/line.mrs",
      "path-in-bundle": "geo/geosite/line.mrs"
    },
    "bahamut": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "domain",
      "url": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/bahamut.mrs",
      "path": "./ruleset/bahamut.mrs",
      "path-in-bundle": "geo/geosite/bahamut.mrs"
    },
    "dmm": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "domain",
      "url": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/dmm.mrs",
      "path": "./ruleset/dmm.mrs",
      "path-in-bundle": "geo/geosite/dmm.mrs"
    },
    "steam": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "domain",
      "url": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/steam.mrs",
      "path": "./ruleset/steam.mrs",
      "path-in-bundle": "geo/geosite/steam.mrs"
    },
    "steam_asn": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "ipcidr",
      "url": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/asn/AS32590.mrs",
      "path": "./ruleset/steam_asn.mrs",
      "path-in-bundle": "asn/AS32590.mrs"
    },
    "games_cn": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "domain",
      "url": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/category-games@cn.mrs",
      "path": "./ruleset/category-games@cn.mrs",
      "path-in-bundle": "geo/geosite/category-games@cn.mrs"
    },
    "epicgames": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "domain",
      "url": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/epicgames.mrs",
      "path": "./ruleset/epicgames.mrs",
      "path-in-bundle": "geo/geosite/epicgames.mrs"
    },
    "nvidia_cn": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "domain",
      "url": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/nvidia.mrs",
      "path": "./ruleset/nvidia.mrs",
      "path-in-bundle": "geo/geosite/nvidia.mrs"
    },
    "apple_cn": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "domain",
      "url": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/apple.mrs",
      "path": "./ruleset/apple.mrs",
      "path-in-bundle": "geo/geosite/apple.mrs"
    },
    "microsoft_cn": {
      "type": "http",
      "format": "mrs",
      "interval": 86400,
      "behavior": "domain",
      "url": "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/microsoft.mrs",
      "path": "./ruleset/microsoft.mrs",
      "path-in-bundle": "geo/geosite/microsoft.mrs"
    },
    "legacy_local_domains": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/legacy/custom/local_domains.list",
      "path": "./ruleset/legacy_local_domains.list"
    },
    "legacy_localareanetwork": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/legacy/LocalAreaNetwork.list",
      "path": "./ruleset/legacy_localareanetwork.list"
    },
    "legacy_msservices": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/legacy/custom/MSServices.list",
      "path": "./ruleset/legacy_msservices.list"
    },
    "legacy_unbreak": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/legacy/DivineEngine/Surge/Ruleset/Unbreak.list",
      "path": "./ruleset/legacy_unbreak.list"
    },
    "bm_advertisinglite": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/AdvertisingLite/AdvertisingLite.list",
      "path": "./ruleset/bm_advertisinglite.list"
    },
    "bm_netflix": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Netflix/Netflix.list",
      "path": "./ruleset/bm_netflix.list"
    },
    "legacy_streaming_media": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/legacy/custom/Streaming_Media_Custom.list",
      "path": "./ruleset/legacy_streaming_media.list"
    },
    "bm_deezer": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Deezer/Deezer.list",
      "path": "./ruleset/bm_deezer.list"
    },
    "bm_disney": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Disney/Disney.list",
      "path": "./ruleset/bm_disney.list"
    },
    "bm_hbo": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/HBO/HBO.list",
      "path": "./ruleset/bm_hbo.list"
    },
    "bm_youtube": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/YouTube/YouTube.list",
      "path": "./ruleset/bm_youtube.list"
    },
    "legacy_ai": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/legacy/custom/AI.list",
      "path": "./ruleset/legacy_ai.list"
    },
    "bm_openai": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI.list",
      "path": "./ruleset/bm_openai.list"
    },
    "bm_claude": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Claude/Claude.list",
      "path": "./ruleset/bm_claude.list"
    },
    "bm_gemini": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Gemini/Gemini.list",
      "path": "./ruleset/bm_gemini.list"
    },
    "legacy_social_media": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/legacy/custom/Social_Media.list",
      "path": "./ruleset/legacy_social_media.list"
    },
    "bm_tiktok": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/TikTok/TikTok.list",
      "path": "./ruleset/bm_tiktok.list"
    },
    "bm_bilibili": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/BiliBili/BiliBili.list",
      "path": "./ruleset/bm_bilibili.list"
    },
    "bm_iqiyi": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/iQIYI/iQIYI.list",
      "path": "./ruleset/bm_iqiyi.list"
    },
    "bm_letv": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/LeTV/LeTV.list",
      "path": "./ruleset/bm_letv.list"
    },
    "acl_moo": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/MOO.list",
      "path": "./ruleset/acl_moo.list"
    },
    "acl_tencent_video": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/TencentVideo.list",
      "path": "./ruleset/acl_tencent_video.list"
    },
    "bm_youku": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Youku/Youku.list",
      "path": "./ruleset/bm_youku.list"
    },
    "legacy_cn_media": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/legacy/custom/CN_Media_Custom.list",
      "path": "./ruleset/legacy_cn_media.list"
    },
    "bm_telegram": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Telegram/Telegram.list",
      "path": "./ruleset/bm_telegram.list"
    },
    "legacy_telegram": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/legacy/custom/Telegram.list",
      "path": "./ruleset/legacy_telegram.list"
    },
    "legacy_singapore": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/legacy/custom/Singapore.list",
      "path": "./ruleset/legacy_singapore.list"
    },
    "legacy_jp_kr": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/legacy/custom/JP_KR.list",
      "path": "./ruleset/legacy_jp_kr.list"
    },
    "legacy_im_services": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/legacy/custom/IM_Services.list",
      "path": "./ruleset/legacy_im_services.list"
    },
    "legacy_vps_play_ground": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/legacy/custom/VPS_Play_Ground.list",
      "path": "./ruleset/legacy_vps_play_ground.list"
    },
    "legacy_gaming": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/legacy/custom/Gaming.list",
      "path": "./ruleset/legacy_gaming.list"
    },
    "legacy_work_sus": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/legacy/custom/work_sus.list",
      "path": "./ruleset/legacy_work_sus.list"
    },
    "legacy_work": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/legacy/custom/work.list",
      "path": "./ruleset/legacy_work.list"
    },
    "bm_apple": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Apple/Apple.list",
      "path": "./ruleset/bm_apple.list"
    },
    "legacy_download": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/legacy/custom/Download.list",
      "path": "./ruleset/legacy_download.list"
    },
    "home_block": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/Home_Block.list",
      "path": "./ruleset/home_block.list"
    },
    "bm_china": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/China/China.list",
      "path": "./ruleset/bm_china.list"
    },
    "acl_chinacompanyip": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/ChinaCompanyIp.list",
      "path": "./ruleset/acl_chinacompanyip.list"
    },
    "acl_chinadomain": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/ChinaDomain.list",
      "path": "./ruleset/acl_chinadomain.list"
    },
    "legacy_personaldomains": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/legacy/custom/personaldomains.list",
      "path": "./ruleset/legacy_personaldomains.list"
    },
    "bm_global": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Global/Global.list",
      "path": "./ruleset/bm_global.list"
    },
    "legacy_global": {
      "type": "http",
      "format": "text",
      "interval": 86400,
      "behavior": "classical",
      "url": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/rules/legacy/custom/Global.list",
      "path": "./ruleset/legacy_global.list"
    }
  },
  "proxy-groups": [
    {
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "Proxy",
      "proxies": [
        "US_Select",
        "US_Auto",
        "Auto_All",
        "Media_Auto",
        "Media_Select",
        "Direct",
        "JP_KR_Auto",
        "TW_SG_Auto",
        "EU_Auto",
        "HK_Auto",
        "DMCA_Auto",
        "JP_KR_Select",
        "TW_SG_Select",
        "EU_Select",
        "HK_Select",
        "DMCA_Select",
        "Block"
      ],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Global.png"
    },
    {
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "Streaming_Media",
      "proxies": [
        "Media_Select",
        "Media_Auto",
        "Proxy",
        "US_Auto",
        "US_Select",
        "JP_KR_Auto",
        "JP_KR_Select",
        "Auto_All",
        "TW_SG_Auto",
        "EU_Auto",
        "HK_Auto",
        "TW_SG_Select",
        "EU_Select",
        "HK_Select",
        "Direct",
        "Block"
      ],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ForeignMedia.png"
    },
    {
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "AI",
      "proxies": [
        "Media_Select",
        "US_Select",
        "Media_Auto",
        "Proxy",
        "US_Auto",
        "Direct",
        "Auto_All",
        "JP_KR_Auto",
        "TW_SG_Auto",
        "EU_Auto",
        "HK_Auto",
        "JP_KR_Select",
        "TW_SG_Select",
        "EU_Select",
        "HK_Select",
        "Block"
      ],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png"
    },
    {
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "Microsoft",
      "proxies": [
        "Proxy",
        "US_Auto",
        "Auto_All",
        "US_Select",
        "TW_SG_Auto",
        "TW_SG_Select",
        "Direct",
        "Block"
      ],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Microsoft.png"
    },
    {
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "Telegram",
      "proxies": [
        "TW_SG_Select",
        "TW_SG_Auto",
        "US_Auto",
        "Proxy",
        "US_Select",
        "JP_KR_Auto",
        "EU_Auto",
        "HK_Auto",
        "JP_KR_Select",
        "EU_Select",
        "HK_Select",
        "Block"
      ],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram.png"
    },
    {
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "Social_Media",
      "proxies": [
        "TW_SG_Select",
        "Proxy",
        "US_Auto",
        "JP_KR_Auto",
        "TW_SG_Auto",
        "EU_Auto",
        "HK_Auto",
        "US_Select",
        "JP_KR_Select",
        "EU_Select",
        "HK_Select",
        "Direct",
        "Block"
      ],
      "icon": "https://fastly.jsdelivr.net/gh/NX211/homer-icons@master/png/mastodon.png"
    },
    {
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "IM_Service",
      "proxies": [
        "JP_KR_Select",
        "JP_KR_Auto",
        "Proxy",
        "US_Auto",
        "US_Select",
        "TW_SG_Select",
        "TW_SG_Auto",
        "HK_Auto",
        "HK_Select",
        "Auto_All",
        "EU_Auto",
        "EU_Select",
        "Direct",
        "Block"
      ],
      "icon": "https://fastly.jsdelivr.net/gh/NX211/homer-icons@master/png/signal.png"
    },
    {
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "Gaming",
      "proxies": [
        "JP_KR_Select",
        "JP_KR_Auto",
        "Direct",
        "US_Auto",
        "US_Select",
        "Proxy",
        "Auto_All",
        "TW_SG_Auto",
        "HK_Auto",
        "TW_SG_Select",
        "HK_Select",
        "Block"
      ],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Game.png"
    },
    {
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "Remaining",
      "proxies": [
        "Proxy",
        "Media_Auto",
        "Media_Select",
        "Direct",
        "Auto_All",
        "US_Auto",
        "JP_KR_Auto",
        "TW_SG_Auto",
        "EU_Auto",
        "HK_Auto",
        "DMCA_Auto",
        "US_Select",
        "JP_KR_Select",
        "TW_SG_Select",
        "EU_Select",
        "HK_Select",
        "DMCA_Select",
        "Block"
      ],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Stack.png"
    },
    {
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "Play_Ground",
      "proxies": [
        "Proxy",
        "Direct",
        "Block"
      ],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Lab.png"
    },
    {
      "filter": "(?i:\\bUS[A]?\\b|广美|美|\\bUS|纽约|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|🇨🇦|\\bCA|Canada|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|🇺🇸|United States|UnitedStates|America|United.*?States|美国|[^-]美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|\\bLAS|\\bSEA|\\bLAX|\\bSJC|\\bSFO|\\bMIA|\\bBOS|\\bDFW|Default|\\bSLC)",
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "US_Select",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png"
    },
    {
      "filter": "(?i:\\bJP[N]?\\b|广日|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|🇯🇵|Japan|Japan|Tokyo|Osaka|Saitama|日本|东京|大阪|埼玉|[^-]日|NRT|广韩|韩国|\\bKR|首尔|春川|🇰🇷|Korea)",
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "JP_KR_Select",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png"
    },
    {
      "filter": "(?i:\\bTW[N]?\\b|Taiwan|新北|彰化|\\bCHT\\b|台湾|[^-]台|\\bHINET\\b|广台|台湾|Tai Wan|TaiWan|\\bTPE|Taipei|广台|台湾|\\bTW|Tai Wan|🇹🇼|TaiWan|\\bTPE|Taipei|广新|新加坡|\\bSG|坡|狮城|🇸🇬|Singapore|Singapore|新加坡|狮城|[^-]新|\\bSIN)",
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "TW_SG_Select",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Taiwan.png"
    },
    {
      "filter": "(美|\\bUS|纽约|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|🇨🇦|\\bCA|Canada|🇺🇸|United States|UnitedStates|解锁|\\bNF|Netflix|奈飞|\\bLAS|\\bSEA|\\bLAX|\\bSJC|\\bSFO|\\bMIA|\\bBOS|\\bDFW|Default|\\bSLC|\\bJP|Japan|Tokyo|Osaka|Saitama|🇯🇵|日本|东京|大阪|埼玉|[^-]日|NRT)",
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "Media_Select",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ForeignMedia.png"
    },
    {
      "filter": "(🇪🇺|也纳|克兰|比利时|尔兰|立陶宛|冰岛|秘鲁|耳其|利亚|埃及|希腊|斯洛伐克|芬兰|英国|德国|意大|法国|罗斯|瑞士|瑞典|荷兰|比亚|班牙|🇮🇹|🇫🇷|Ita|Fran|🇰🇿|Kaz|🇩🇪|Ger|🇬🇧|Kin|^UK|Brit|Tur|🇹🇷|🇵🇰|Paki|🇦🇺|Aus|🇨🇭|Swi|🇷🇺|Rus|Ukr|🇺🇦|Est|🇪🇪|Neth|🇳🇱|\\bRU|\\bFR|France|Paris|巴黎|CDG|^ES|🇪🇸|^IL|🇮🇱|^SE|🇸🇪|🇬🇷|i:\\bGR[P]?\\b)",
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "EU_Select",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Europe.png"
    },
    {
      "filter": "(HKBN|港|广港|香港|\\bHK|Hong Kong|🇭🇰|HongKong|i:\\bHK[G]?\\b|Hong.*?Kong|\\bHKT\\b|\\bHKBN\\b|\\bHGC\\b|\\bWTT\\b|\\bCMI\\b|[^-]港)",
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "HK_Select",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png"
    },
    {
      "filter": "(Neth|🇳🇱|Lux|罗斯|🇷🇺|Rus|广新|新加坡|坡|狮城|🇸🇬|Singapore|Mala|马来|立陶宛|利亚|Bul|瑞典|荷兰|比亚|Kaz|Paki|Swi|Est|🇪🇪|\\bRU\\b|新加坡|\\bSG|坡|狮城|🇸🇬|Singapore|i:\\bSG[P]?\\b|Singapore|新加坡|狮城|[^-]新|\\bSIN|🇪🇸|i:\\bES[P]?\\b|i:\\bDE[U]?\\b|🇩🇪)",
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "DMCA_Select",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Pirate_Nation.png"
    },
    {
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "Work",
      "proxies": [
        "Telegram",
        "Direct",
        "Block",
        "Proxy"
      ],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Work.png"
    },
    {
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "Work_Sus",
      "proxies": [
        "Block",
        "Direct",
        "Proxy",
        "Work"
      ],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Null_Nation.png"
    },
    {
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "CN_Service",
      "proxies": [
        "Direct",
        "Block",
        "HK_Auto",
        "HK_Select"
      ],
      "icon": "https://fastly.jsdelivr.net/gh/TerryDeJuan/mihomo_overwrite@main/assets/icons/five_color_flag.svg"
    },
    {
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "Apple",
      "proxies": [
        "Proxy",
        "Direct",
        "Auto_All",
        "US_Auto",
        "HK_Auto",
        "US_Select",
        "HK_Select"
      ],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple.png"
    },
    {
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "Ads",
      "proxies": [
        "Block",
        "Direct",
        "Proxy"
      ],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Advertising.png"
    },
    {
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "Home_Block",
      "proxies": [
        "Block",
        "Direct"
      ],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Reject.png"
    },
    {
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "Torrent",
      "proxies": [
        "DMCA_Select",
        "DMCA_Auto",
        "Proxy",
        "Direct",
        "Auto_All",
        "US_Auto",
        "JP_KR_Auto",
        "TW_SG_Auto",
        "EU_Auto",
        "HK_Auto",
        "US_Select",
        "JP_KR_Select",
        "TW_SG_Select",
        "EU_Select",
        "HK_Select",
        "Block"
      ],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Pirate_Nation.png"
    },
    {
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "Direct",
      "proxies": [
        "DIRECT"
      ],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/China_Map.png"
    },
    {
      "type": "select",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "name": "Block",
      "proxies": [
        "REJECT",
        "DIRECT"
      ],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Reject.png"
    },
    {
      "type": "url-test",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "tolerance": 150,
      "include-all": true,
      "exclude-type": "DIRECT",
      "name": "Auto_All",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Auto.png"
    },
    {
      "filter": "(?i:\\bUS[A]?\\b|广美|美|\\bUS|纽约|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|🇨🇦|\\bCA|Canada|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|🇺🇸|United States|UnitedStates|America|United.*?States|美国|[^-]美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|\\bLAS|\\bSEA|\\bLAX|\\bSJC|\\bSFO|\\bMIA|\\bBOS|\\bDFW|Default|\\bSLC)",
      "type": "url-test",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "tolerance": 150,
      "include-all": true,
      "exclude-type": "DIRECT",
      "name": "US_Auto",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png"
    },
    {
      "filter": "(?i:\\bJP[N]?\\b|广日|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|🇯🇵|Japan|Japan|Tokyo|Osaka|Saitama|日本|东京|大阪|埼玉|[^-]日|NRT|广韩|韩国|\\bKR|首尔|春川|🇰🇷|Korea)",
      "type": "url-test",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "tolerance": 150,
      "include-all": true,
      "exclude-type": "DIRECT",
      "name": "JP_KR_Auto",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png"
    },
    {
      "filter": "(?i:\\bTW[N]?\\b|Taiwan|新北|彰化|\\bCHT\\b|台湾|[^-]台|\\bHINET\\b|广台|台湾|Tai Wan|TaiWan|\\bTPE|Taipei|广台|台湾|\\bTW|Tai Wan|🇹🇼|TaiWan|\\bTPE|Taipei|广新|新加坡|\\bSG|坡|狮城|🇸🇬|Singapore|Singapore|新加坡|狮城|[^-]新|\\bSIN)",
      "type": "url-test",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "tolerance": 150,
      "include-all": true,
      "exclude-type": "DIRECT",
      "name": "TW_SG_Auto",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Taiwan.png"
    },
    {
      "filter": "(美|\\bUS|纽约|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|🇨🇦|\\bCA|Canada|🇺🇸|United States|UnitedStates|解锁|\\bNF|Netflix|奈飞|\\bLAS|\\bSEA|\\bLAX|\\bSJC|\\bSFO|\\bMIA|\\bBOS|\\bDFW|Default|\\bSLC|\\bJP|Japan|Tokyo|Osaka|Saitama|🇯🇵|日本|东京|大阪|埼玉|[^-]日|NRT)",
      "type": "url-test",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "tolerance": 150,
      "include-all": true,
      "exclude-type": "DIRECT",
      "name": "Media_Auto",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ForeignMedia.png"
    },
    {
      "filter": "(🇪🇺|也纳|克兰|比利时|尔兰|立陶宛|冰岛|秘鲁|耳其|利亚|埃及|希腊|斯洛伐克|芬兰|英国|德国|意大|法国|罗斯|瑞士|瑞典|荷兰|比亚|班牙|🇮🇹|🇫🇷|Ita|Fran|🇰🇿|Kaz|🇩🇪|Ger|🇬🇧|Kin|^UK|Brit|Tur|🇹🇷|🇵🇰|Paki|🇦🇺|Aus|🇨🇭|Swi|🇷🇺|Rus|Ukr|🇺🇦|Est|🇪🇪|Neth|🇳🇱|\\bRU|\\bFR|France|Paris|巴黎|CDG|^ES|🇪🇸|^IL|🇮🇱|^SE|🇸🇪|🇬🇷|i:\\bGR[P]?\\b)",
      "type": "url-test",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "tolerance": 150,
      "include-all": true,
      "exclude-type": "DIRECT",
      "name": "EU_Auto",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Europe.png"
    },
    {
      "filter": "(HKBN|港|广港|香港|\\bHK|Hong Kong|🇭🇰|HongKong|i:\\bHK[G]?\\b|Hong.*?Kong|\\bHKT\\b|\\bHKBN\\b|\\bHGC\\b|\\bWTT\\b|\\bCMI\\b|[^-]港)",
      "type": "url-test",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "tolerance": 150,
      "include-all": true,
      "exclude-type": "DIRECT",
      "name": "HK_Auto",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png"
    },
    {
      "filter": "(Neth|🇳🇱|Lux|罗斯|🇷🇺|Rus|广新|新加坡|坡|狮城|🇸🇬|Singapore|Mala|马来|立陶宛|利亚|Bul|瑞典|荷兰|比亚|Kaz|Paki|Swi|Est|🇪🇪|\\bRU\\b|新加坡|\\bSG|坡|狮城|🇸🇬|Singapore|i:\\bSG[P]?\\b|Singapore|新加坡|狮城|[^-]新|\\bSIN|🇪🇸|i:\\bES[P]?\\b|i:\\bDE[U]?\\b|🇩🇪)",
      "type": "url-test",
      "interval": 300,
      "timeout": 3000,
      "max-failed-times": 3,
      "empty-fallback": "REJECT",
      "url": "https://www.gstatic.com/generate_204",
      "lazy": true,
      "tolerance": 150,
      "include-all": true,
      "exclude-type": "DIRECT",
      "name": "DMCA_Auto",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Pirate_Nation.png"
    }
  ],
  "rules": [
    "RULE-SET,legacy_local_domains,Direct",
    "RULE-SET,legacy_localareanetwork,Direct",
    "RULE-SET,legacy_personaldomains,Direct",
    "RULE-SET,private,Direct",
    "RULE-SET,home_block,Home_Block",
    "RULE-SET,legacy_work_sus,Work_Sus",
    "RULE-SET,legacy_work,Work",
    "RULE-SET,legacy_vps_play_ground,Play_Ground",
    "RULE-SET,legacy_unbreak,Direct",
    "RULE-SET,games_cn,CN_Service",
    "RULE-SET,epicgames,CN_Service",
    "RULE-SET,nvidia_cn,CN_Service",
    "RULE-SET,apple_cn,CN_Service",
    "RULE-SET,microsoft_cn,CN_Service",
    "RULE-SET,bm_bilibili,CN_Service",
    "RULE-SET,bm_iqiyi,CN_Service",
    "RULE-SET,bm_letv,CN_Service",
    "RULE-SET,acl_moo,CN_Service",
    "RULE-SET,acl_tencent_video,CN_Service",
    "RULE-SET,bm_youku,CN_Service",
    "RULE-SET,legacy_cn_media,CN_Service",
    "RULE-SET,bm_advertisinglite,Ads",
    "RULE-SET,github,Proxy",
    "RULE-SET,docker,Proxy",
    "RULE-SET,matrix,IM_Service",
    "RULE-SET,legacy_msservices,Microsoft",
    "RULE-SET,bm_netflix,Streaming_Media",
    "RULE-SET,legacy_streaming_media,Streaming_Media",
    "RULE-SET,bm_deezer,Streaming_Media",
    "RULE-SET,bm_disney,Streaming_Media",
    "RULE-SET,bm_hbo,Streaming_Media",
    "RULE-SET,bm_youtube,Streaming_Media",
    "RULE-SET,legacy_ai,AI",
    "RULE-SET,bm_openai,AI",
    "RULE-SET,bm_claude,AI",
    "RULE-SET,bm_gemini,AI",
    "RULE-SET,twitter,Social_Media",
    "RULE-SET,meta,Social_Media",
    "RULE-SET,legacy_social_media,Social_Media",
    "RULE-SET,bm_tiktok,Social_Media",
    "RULE-SET,bm_telegram,Telegram",
    "RULE-SET,legacy_telegram,Telegram",
    "RULE-SET,legacy_singapore,TW_SG_Select",
    "RULE-SET,bahamut,TW_SG_Select",
    "RULE-SET,dmm,JP_KR_Select",
    "RULE-SET,legacy_jp_kr,JP_KR_Select",
    "RULE-SET,discord,IM_Service",
    "RULE-SET,signal,IM_Service",
    "RULE-SET,line,IM_Service",
    "RULE-SET,legacy_im_services,IM_Service",
    "RULE-SET,legacy_gaming,Gaming",
    "RULE-SET,steam,Gaming",
    "RULE-SET,steam_asn,Gaming",
    "RULE-SET,bm_apple,Apple",
    "RULE-SET,legacy_download,Torrent",
    "RULE-SET,bm_global,Proxy",
    "RULE-SET,legacy_global,Proxy",
    "RULE-SET,bm_china,Direct",
    "RULE-SET,acl_chinacompanyip,Direct",
    "RULE-SET,acl_chinadomain,Direct",
    "RULE-SET,cn,Direct",
    "GEOIP,CN,Direct,no-resolve",
    "MATCH,Remaining"
  ]
};

const GLOBAL_CONFIG = {
  "mixed-port": 7890,
  "allow-lan": true,
  ipv6: true,
  mode: 'rule',
  "log-level": 'info',
  "bind-address": '*',
  "unified-delay": true,
  "tcp-concurrent": true,
  "keep-alive-idle": 600,
  "keep-alive-interval": 60,
  "find-process-mode": 'strict',
  "external-controller": '127.0.0.1:9090',
  "external-ui": 'ui',
  "external-ui-url": 'https://github.com/Zephyruso/zashboard/releases/latest/download/dist.zip',
  profile: { "store-selected": true, "store-fake-ip": true },
  ntp: { enable: true, "write-to-system": false, server: 'ntp.aliyun.com', port: 123, interval: 60 },
  tun: {
    enable: true,
    stack: 'system',
    "auto-route": true,
    "strict-route": true,
    "auto-redirect": true,
    "auto-detect-interface": true,
    "dns-hijack": ['any:53', 'tcp://any:53'],
  },
  dns: {
    enable: true,
    ipv6: true,
    "use-hosts": true,
    "cache-algorithm": 'arc',
    "use-system-hosts": true,
    "enhanced-mode": 'fake-ip',
    "fake-ip-range": '198.18.0.1/16',
    "fake-ip-filter": ['rule-set:private', 'rule-set:fakeip_filter'],
    "proxy-server-nameserver": ['https://dns.alidns.com/dns-query#DIRECT', 'https://doh.pub/dns-query#DIRECT'],
    "default-nameserver": ['223.5.5.5', '119.29.29.29'],
    nameserver: ['https://dns.cloudflare.com/dns-query#Proxy', 'https://dns.google/dns-query#Proxy'],
    "nameserver-policy": { "rule-set:cn": ['https://dns.alidns.com/dns-query#DIRECT', 'https://doh.pub/dns-query#DIRECT'] },
    "direct-nameserver": ['system', '223.5.5.5', '119.29.29.29'],
  },
  hosts: {
    'dns.alidns.com': ['223.5.5.5', '223.6.6.6'],
    'doh.pub': ['1.12.12.12', '120.53.53.53'],
    'dns.cloudflare.com': ['1.1.1.1', '1.0.0.1'],
    'dns.google': ['8.8.8.8', '8.8.4.4'],
    'services.googleapis.cn': ['services.googleapis.com'],
    '+.mcdn.bilivideo.com': ['0.0.0.0'],
    '+.mcdn.bilivideo.cn': ['0.0.0.0'],
    '+.edge.mountaintoys.cn': ['0.0.0.0'],
    '+.h2.smtcdns.net': ['0.0.0.0'],
  },
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function usableSubscriptionProxies(config) {
  const proxies = Array.isArray(config.proxies) ? config.proxies : [];
  const names = new Set();
  return proxies.filter((proxy) => {
    const type = String(proxy?.type ?? '').toLowerCase();
    if (!proxy || typeof proxy.name !== 'string' || !proxy.name || ['direct', 'reject', 'rematch'].includes(type)) return false;
    if (names.has(proxy.name)) return false;
    names.add(proxy.name);
    return true;
  });
}

function main(config) {
  const output = {
    ...clone(GLOBAL_CONFIG),
    proxies: usableSubscriptionProxies(config),
    'rule-providers': clone(TEMPLATE['rule-providers']),
    'proxy-groups': clone(TEMPLATE['proxy-groups']),
    rules: [...TEMPLATE.rules],
  };

  return output;
}
