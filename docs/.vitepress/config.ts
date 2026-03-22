import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "OpenILink",
  description: "OpenILink 官方网站与文档中心。",
  head: [["link", { rel: "icon", href: "/mark.svg" }]],
  base: "/openilink.com/",
  cleanUrls: true,
  lastUpdated: true,
  appearance: false,
  sitemap: {
    hostname: "https://openilink.com"
  },
  themeConfig: {
    logo: "/mark.svg",
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "SDK", link: "/sdk/" },
      { text: "仓库", link: "/repositories" },
      { text: "路线图", link: "/roadmap" },
      { text: "社区", link: "/community" }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/openilink" }
    ],
    search: {
      provider: "local"
    },
    footer: {
      message: "开放接口，连接下一代会话系统。",
      copyright: "Copyright © 2026 OpenILink"
    },
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "概览", link: "/guide/" }
          ]
        }
      ],
      "/sdk/": [
        {
          text: "SDK",
          items: [
            { text: "总览", link: "/sdk/" },
            { text: "Node.js SDK", link: "/sdk/node" },
            { text: "PHP SDK", link: "/sdk/php" }
          ]
        }
      ]
    }
  }
});
