'use client';

import { type ReactNode } from 'react';
import { ArrowRight, ExternalLink, TrendingUp, Paintbrush, MessageSquare, Forward, Terminal } from 'lucide-react';
import { HyperText } from '@/components/ui/hyper-text';
import { FadeIn } from '@/components/ui/fade-in';
import Link from 'next/link';

// 用实际能力来展示，而不是抽象的技术描述
const apps: { icon: ReactNode; name: string; desc: string; commands: string[]; from: string }[] = [
  {
    icon: <TrendingUp className="h-5 w-5 text-[#D86A33]" />,
    name: '股票查询',
    desc: '发送 /s 600519 查实时股价，支持 A 股、港股、美股、数字货币。',
    commands: ['/s', '/ss', '/sus', '/shk', '/dp', '/b'],
    from: 'Command Service',
  },
  {
    icon: <Paintbrush className="h-5 w-5 text-[#D86A33]" />,
    name: 'AI 图片生成',
    desc: '发送 /gi 赛博朋克城市 即可生成图片，Bot 直接回复到微信。',
    commands: ['/gi'],
    from: 'Command Service',
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-[#D86A33]" />,
    name: 'AI 对话',
    desc: '发送 /a 帮我写一封邮件，Bot 调用大模型回答问题。',
    commands: ['/a'],
    from: 'Command Service',
  },
  {
    icon: <Forward className="h-5 w-5 text-[#D86A33]" />,
    name: '消息转发',
    desc: '微信消息自动转发到 Telegram、飞书、Slack 或自己的服务器。',
    commands: [],
    from: 'Bridge',
  },
  {
    icon: <span className="text-lg">🦞</span>,
    name: 'OpenClaw 接入',
    desc: '让 OpenClaw AI Agent 直接通过微信对话，无需额外开发。',
    commands: [],
    from: 'OpenClaw',
  },
  {
    icon: <Terminal className="h-5 w-5 text-[#D86A33]" />,
    name: '自定义命令',
    desc: '开发自己的 App 上架到市场，别人也能一键安装你的功能。',
    commands: ['/echo', '/ping'],
    from: 'Echo（开发模板）',
  },
];

export function MarketplaceSection() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D86A33]/3 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* 标题 */}
        <FadeIn className="mb-6">
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
            一键给 Bot 加功能
          </HyperText>
          <p className="max-w-2xl text-lg text-neutral-400">
            不用写代码。扫码绑定微信号后，在应用市场里点一下「安装」，
            你的 Bot 就能查股票、生成图片、转发消息到 Telegram……
          </p>
        </FadeIn>

        {/* 流程说明 */}
        <FadeIn className="mb-12">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/50 px-4 py-2.5 text-sm text-neutral-400">
            <span className="text-white">扫码绑定</span>
            <span className="text-neutral-600">→</span>
            <span className="text-white">打开应用市场</span>
            <span className="text-neutral-600">→</span>
            <span className="text-white">点击安装</span>
            <span className="text-neutral-600">→</span>
            <span className="text-[#07C160]">Bot 立刻获得新能力</span>
          </div>
        </FadeIn>

        {/* App 卡片网格 */}
        <div className="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, i) => (
            <FadeIn key={app.name} delay={i * 0.08}>
              <div className="group h-full rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 transition-colors hover:border-[#D86A33]/30">
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800">
                      {app.icon}
                    </span>
                    <span className="font-semibold text-white">{app.name}</span>
                  </div>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-neutral-400">{app.desc}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {app.commands.length > 0 && app.commands.slice(0, 3).map((cmd) => (
                    <span
                      key={cmd}
                      className="rounded bg-neutral-800 px-1.5 py-0.5 font-mono text-[10px] text-neutral-400"
                    >
                      {cmd}
                    </span>
                  ))}
                  <span className="ml-auto font-mono text-[10px] text-neutral-600">
                    {app.from}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 底部提示 */}
        <FadeIn delay={0.3}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <p className="text-sm text-neutral-500">
              市场里的应用持续增加中。你也可以开发自己的 App 并上架。
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/docs/guide/use-cases"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#D86A33] transition-colors hover:underline"
              >
                查看使用案例
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="https://github.com/openilink/openilink-app-echo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-300"
              >
                开发模板
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
