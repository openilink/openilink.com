'use client';

import { ArrowRight } from 'lucide-react';
import { HyperText } from '@/components/ui/hyper-text';
import { FadeIn } from '@/components/ui/fade-in';
import Link from 'next/link';

const steps = [
  {
    step: '01',
    title: '微信开放 Bot API',
    desc: '2026 年 3 月，微信推出 ClawBot 插件，底层协议叫 iLink（智联），首次官方开放个人号的 Bot API。',
  },
  {
    step: '02',
    title: 'iLink 只是通道',
    desc: 'iLink 只做一件事：收发消息。但真正用起来，你还需要管理多个 Bot、路由消息、配置过滤规则……',
  },
  {
    step: '03',
    title: 'Hub 包装一切',
    desc: 'OpeniLink Hub 把 iLink 的原始能力包装成完整平台：扫码绑定、多通道分发、AI 回复、插件引擎，开箱即用。',
  },
];

const comparisons = [
  { feature: '部署方式', hub: 'docker compose up -d', traditional: '复杂依赖配置' },
  { feature: '多 Bot 管理', hub: '扫码绑定，集中管理', traditional: '通常只支持单个' },
  { feature: '消息下发', hub: 'WebSocket + Webhook + AI 并行', traditional: '单一通道' },
  { feature: '可扩展性', hub: 'JS 插件 + 7 种 SDK', traditional: '硬编码' },
  { feature: '开源协议', hub: 'MIT，无商业限制', traditional: '部分闭源' },
];

export function IntroSection() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* 标题 */}
        <FadeIn className="mb-16 max-w-3xl">
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-wider text-[#07C160]">
            What is OpeniLink Hub?
          </span>
          <HyperText
            as="h2"
            className="mb-6 text-3xl font-black tracking-tight text-white md:text-4xl"
            duration={1000}
            startOnView
            animateOnHover
          >
            让微信 Bot 接入变简单
          </HyperText>
          <p className="text-lg leading-relaxed text-neutral-400">
            如果你想让程序<span className="text-neutral-200">合法地</span>收发微信消息，
            OpeniLink Hub 是最简单的方式。不需要逆向工程，不需要复杂配置，
            <span className="text-[#07C160]">一行命令</span>即可启动。
          </p>
        </FadeIn>

        {/* 三步理解 */}
        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {steps.map((item, i) => (
            <FadeIn
              key={item.step}
              delay={i * 0.15}
              className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-colors hover:border-neutral-700"
            >
              <div className="mb-4 font-mono text-3xl font-black text-[#07C160]/20">
                {item.step}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-500">{item.desc}</p>
            </FadeIn>
          ))}
        </div>

        {/* 对比表格 */}
        <div className="mb-12 max-w-3xl">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-wider text-neutral-600">
            为什么选择 OpeniLink Hub？
          </h3>
          <div className="overflow-hidden rounded-xl border border-neutral-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-900/80">
                  <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-neutral-500">特性</th>
                  <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-[#07C160]">OpeniLink Hub</th>
                  <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-neutral-600">传统方案</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.feature} className="border-b border-neutral-800/50 last:border-0">
                    <td className="px-4 py-3 text-neutral-400">{row.feature}</td>
                    <td className="px-4 py-3 font-mono text-xs text-neutral-200">{row.hub}</td>
                    <td className="px-4 py-3 font-mono text-xs text-neutral-600">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Link
          href="/docs"
          className="inline-flex items-center gap-2 font-mono text-sm text-[#07C160] transition-colors hover:underline"
        >
          阅读完整文档
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
