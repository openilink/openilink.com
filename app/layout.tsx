import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'OpeniLink — 微信 ClawBot iLink 协议开源消息管理平台',
    template: '%s | OpeniLink',
  },
  description:
    'OpeniLink Hub 是基于微信 ClawBot iLink 协议的开源消息管理平台。扫码绑定微信号，消息实时转发到你的服务。支持 WebSocket、Webhook、AI 自动回复三通道并行，7 种语言 SDK，JavaScript 插件引擎，Passkey 无密码登录。docker compose up -d 一键部署。',
  keywords: [
    'OpeniLink',
    'iLink',
    'WeChat Bot',
    'ClawBot',
    '微信机器人',
    '微信 Bot',
    '消息管理平台',
    '消息路由',
    'WebSocket',
    'Webhook',
    'AI 自动回复',
    '开源',
    'SDK',
    'iLink 协议',
    '智联协议',
  ],
  authors: [{ name: 'OpeniLink', url: 'https://openilink.com' }],
  creator: 'OpeniLink',
  metadataBase: new URL('https://openilink.com'),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://openilink.com',
    siteName: 'OpeniLink',
    title: 'OpeniLink — 微信 ClawBot iLink 协议开源消息管理平台',
    description:
      '扫码绑定微信号，消息实时转发到你的服务。支持 WebSocket / Webhook / AI 自动回复三通道并行。7 种语言 SDK，JS 插件引擎，docker compose up -d 一键部署。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OpeniLink — 开源微信消息管理平台',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpeniLink — 微信 ClawBot iLink 协议开源消息管理平台',
    description:
      '扫码绑定微信号，消息实时转发。WebSocket / Webhook / AI 三通道并行，7 种语言 SDK，一键 Docker 部署。',
    images: ['/og-image.png'],
  },
  icons: { icon: '/openilink.svg' },
  alternates: {
    canonical: 'https://openilink.com',
  },
};

// JSON-LD 结构化数据
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'OpeniLink Hub',
  description:
    'OpeniLink Hub 是基于微信 ClawBot iLink 协议的开源消息管理平台。支持多 Bot 集中管理、WebSocket/Webhook/AI 三通道消息分发、JavaScript 插件引擎、7 种语言 SDK。',
  url: 'https://openilink.com',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Linux, Docker',
  license: 'https://opensource.org/licenses/MIT',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  author: {
    '@type': 'Organization',
    name: 'OpeniLink',
    url: 'https://openilink.com',
  },
  codeRepository: 'https://github.com/openilink/openilink-hub',
  programmingLanguage: ['Go', 'TypeScript', 'JavaScript', 'Python', 'PHP', 'Java', 'C#', 'Lua'],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '什么是 OpeniLink Hub？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OpeniLink Hub 是基于微信 ClawBot iLink 协议的开源消息管理平台。2026 年 3 月微信推出 ClawBot 插件，底层协议叫 iLink（智联），首次官方开放个人号的 Bot API。OpeniLink Hub 把 iLink 的原始收发消息能力包装成完整的消息管理平台，支持多 Bot 集中管理、三通道消息分发（WebSocket/Webhook/AI）、JavaScript 插件引擎和 7 种语言 SDK。',
      },
    },
    {
      '@type': 'Question',
      name: '如何部署 OpeniLink Hub？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '只需一行命令：docker compose up -d。访问 http://localhost:9800，首个注册用户自动成为管理员。支持 PostgreSQL 数据库和 MinIO 对象存储。',
      },
    },
    {
      '@type': 'Question',
      name: 'OpeniLink Hub 支持哪些编程语言的 SDK？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OpeniLink 提供 7 种语言的官方 SDK：Go、Node.js、Python、PHP、Java、C# 和 Lua，统一 API 设计，完整类型定义。',
      },
    },
    {
      '@type': 'Question',
      name: 'OpeniLink Hub 和 OpenClaw 是什么关系？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OpenClaw 是一个 AI Agent Gateway 框架，专注 AI Agent。OpeniLink Hub 是独立的消息管理平台，专注消息管理和分发。两者可以通过 openclaw-channel-openilink 适配器打通，也可以完全独立使用。',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen max-w-[100vw] flex-col overflow-x-hidden bg-[#050505]">
        <RootProvider
          theme={{
            defaultTheme: 'dark',
            forcedTheme: 'dark',
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
