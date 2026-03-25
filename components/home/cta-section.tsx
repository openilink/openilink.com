'use client';

import { ArrowRight, ExternalLink } from 'lucide-react';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { HyperText } from '@/components/ui/hyper-text';
import { FadeIn } from '@/components/ui/fade-in';
import Link from 'next/link';

// 生态项目
const ecoProjects = [
  {
    name: 'openilink-tg',
    desc: 'Telegram 集成 — 将微信消息桥接到 Telegram。',
    url: 'https://github.com/openilink/openilink-tg',
  },
  {
    name: 'openilink-webhook-plugins',
    desc: '官方插件仓库 — Webhook 处理逻辑和 JS 插件模板。',
    url: 'https://github.com/openilink/openilink-webhook-plugins',
  },
  {
    name: 'openclaw-channel-openilink',
    desc: 'OpenClaw 适配器 — 让 OpenClaw 通过 OpeniLink 收发消息。',
    url: 'https://github.com/nicepkg/openclaw-channel-openilink',
  },
];

export function CTASection() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* CTA 主区域 */}
        <FadeIn className="mb-16 flex flex-col items-center text-center">
          <HyperText
            as="h2"
            className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            duration={1200}
            startOnView
            animateOnHover
          >
            开始连接你的第一个微信 Bot
          </HyperText>

          {/* 描述文字 + pill 链接 */}
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
            通过{' '}
            <Link
              href="https://hub.openilink.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-[#07C160]/20 bg-[#07C160]/5 px-2.5 py-0.5 text-sm font-medium text-[#07C160] transition-colors hover:bg-[#07C160]/10"
            >
              Hub 控制台
              <ExternalLink className="h-3 w-3" />
            </Link>{' '}
            管理 Bot，用 SDK 接入消息，读{' '}
            <Link
              href="/docs"
              className="inline-flex items-center gap-1 rounded-full border border-[#D86A33]/20 bg-[#D86A33]/5 px-2.5 py-0.5 text-sm font-medium text-[#D86A33] transition-colors hover:bg-[#D86A33]/10"
            >
              指南
              <ArrowRight className="h-3 w-3" />
            </Link>{' '}
            了解全貌。
          </p>

          {/* 按钮组 */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="https://hub.openilink.com" target="_blank" rel="noopener noreferrer">
              <ShimmerButton
                shimmerColor="#07C160"
                background="rgba(7, 193, 96, 0.9)"
                borderRadius="8px"
                className="px-8 py-3 text-sm font-medium"
              >
                立即开始
                <ArrowRight className="ml-2 h-4 w-4" />
              </ShimmerButton>
            </Link>
            <Link
              href="https://github.com/openilink/openilink-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-8 py-3 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-800"
            >
              GitHub
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        {/* 生态项目 3 列卡片 */}
        <FadeIn className="mb-16" delay={0.2}>
          <h3 className="mb-6 text-center text-sm tracking-widest text-neutral-600 uppercase">
            生态项目
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {ecoProjects.map((project) => (
              <Link
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 transition-colors hover:border-neutral-700"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-mono text-sm font-semibold text-white">
                    {project.name}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-neutral-600 transition-colors group-hover:text-neutral-400" />
                </div>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {project.desc}
                </p>
              </Link>
            ))}
          </div>
        </FadeIn>

        {/* Footer */}
        <footer className="border-t border-neutral-800/50 pt-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <img
              src="/logo-white.svg"
              alt="OpeniLink"
              className="h-6 opacity-60"
            />
            <p className="text-sm text-neutral-600">
              开放接口，连接下一代会话系统。
            </p>
            <p className="text-xs text-neutral-700">
              &copy; {new Date().getFullYear()} OpeniLink. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
