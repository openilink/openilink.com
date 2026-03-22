import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "OpenILink",
  description: "OpenILink official website and documentation.",
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: "https://openilink.com"
  },
  themeConfig: {
    logo: "/mark.svg",
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "SDK", link: "/sdk/" },
      { text: "Roadmap", link: "/roadmap" },
      { text: "Community", link: "/community" }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/openilink" }
    ],
    search: {
      provider: "local"
    },
    footer: {
      message: "Open tooling for conversational systems.",
      copyright: "Copyright © 2026 OpenILink"
    },
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "Overview", link: "/guide/" }
          ]
        }
      ],
      "/sdk/": [
        {
          text: "SDK",
          items: [
            { text: "Overview", link: "/sdk/" },
            { text: "Node.js SDK", link: "/sdk/node" },
            { text: "PHP SDK", link: "/sdk/php" }
          ]
        }
      ]
    }
  }
});
