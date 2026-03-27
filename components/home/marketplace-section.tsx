'use client';

import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import { HyperText } from '@/components/ui/hyper-text';
import { FadeIn } from '@/components/ui/fade-in';
import Link from 'next/link';

const builtinApps = [
  {
    icon: '🔗',
    name: 'Bridge',
    slug: 'bridge',
    desc: '双向桥接 Bot 与外部系统，通过 Webhook 或 WebSocket 接收和发送消息。',
    tag: '内置',
  },
  {
    icon: '🦞',
    name: 'OpenClaw',
    slug: 'openclaw',
    desc: '通过 OpenClaw 协议接入 Bot，实现跨平台 AI Agent 消息互通。',
    tag: '内置',
  },
];

const marketplaceApps = [
  {
    icon: '⚡',
    name: 'Command Service',
    slug: 'command-service',
    desc: '动态命令服务，支持 HP 查询、AI 对话、图片生成等 20+ 命令。',
    version: 'v1.0.0',
    commands: 20,
  },
  {
    icon: '🔊',
    name: 'Echo',
    slug: 'echo',
    desc: '回显消息和命令的测试 App，适合作为开发起步模板。',
    version: 'v1.0.0',
    commands: 3,
  },
];

const highlights = [
  {
    title: '一键安装',
    desc: '浏览应用市场，点击安装即可为 Bot 添加新能力，无需写代码。',
  },
  {
    title: 'OAuth PKCE 授权',
    desc: 'App 通过标准 OAuth 流程获取权限，安全可控，随时可撤销。',
  },
  {
    title: '开发者友好',
    desc: '提供完整的 App 开发文档和示例模板，支持 Webhook 和 WebSocket 两种接入方式。',
  },
];

export function MarketplaceSection() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D86A33]/3 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* 标题 */}
        <FadeIn className="mb-16">
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-wider text-[#D86A33]">
            App Marketplace
          </span>
          <HyperText
            as="h2"
            className="mb-4 text-3xl font-black tracking-tight text-white md:text-4xl"
            duration={1000}
            startOnView
            animateOnHover
          >
            应用市场
          </HyperText>
          <p className="max-w-2xl text-neutral-400">
            扫码绑定 Bot 后，在引导流程中一键安装你需要的应用。
            内置应用开箱即用，社区应用持续扩展。也可以开发自己的 App 并上架到市场。
          </p>
        </FadeIn>

        {/* 两列布局：内置应用 + 推荐应用 */}
        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          {/* 内置应用 */}
          <FadeIn>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-neutral-500">
              内置应用
            </h3>
            <div className="space-y-3">
              {builtinApps.map((app) => (
                <div
                  key={app.slug}
                  className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 transition-colors hover:border-neutral-700"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800 text-xl">
                      {app.icon}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{app.name}</span>
                        <span className="rounded-full bg-[#07C160]/10 px-2 py-0.5 font-mono text-[10px] font-medium text-[#07C160]">
                          {app.tag}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-neutral-600">{app.slug}</span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-500">{app.desc}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-md border border-neutral-700 bg-neutral-800/50 px-3 py-1.5 font-mono text-xs text-neutral-400">
                      <Download className="h-3 w-3" />
                      安装
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* 推荐应用 */}
          <FadeIn delay={0.15}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-neutral-500">
              推荐应用
            </h3>
            <div className="space-y-3">
              {marketplaceApps.map((app) => (
                <div
                  key={app.slug}
                  className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 transition-colors hover:border-neutral-700"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800 text-xl">
                      {app.icon}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{app.name}</span>
                        <span className="rounded-full bg-neutral-800 px-2 py-0.5 font-mono text-[10px] text-neutral-400">
                          {app.version}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-neutral-600">{app.commands} 个命令</span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-500">{app.desc}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-md border border-[#07C160]/30 bg-[#07C160]/10 px-3 py-1.5 font-mono text-xs text-[#07C160]">
                      <Download className="h-3 w-3" />
                      安装
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* 三个亮点 */}
        <FadeIn delay={0.2}>
          <div className="mb-10 grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-5"
              >
                <h4 className="mb-2 font-semibold text-white">{item.title}</h4>
                <p className="text-sm leading-relaxed text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 链接 */}
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/docs/hub/apps"
              className="inline-flex items-center gap-2 font-mono text-sm text-[#D86A33] transition-colors hover:underline"
            >
              App 开发文档
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/openilink/openilink-app-echo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-neutral-500 transition-colors hover:text-neutral-300"
            >
              查看示例 App
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
