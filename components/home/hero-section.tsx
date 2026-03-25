'use client';

import { useState } from 'react';
import { ArrowRight, Check, Copy, ExternalLink } from 'lucide-react';
import { SiGo, SiReact, SiPostgresql, SiDocker, SiTypescript, SiPython, SiNodedotjs, SiPhp } from 'react-icons/si';
import { ParticleEffect } from './particle-effect';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { HyperText } from '@/components/ui/hyper-text';
import Link from 'next/link';

const stats = [
  { value: '7', label: 'SDK 语言' },
  { value: '3', label: '消息通道' },
  { value: 'MIT', label: '开源协议' },
];

const techStack = [
  { name: 'Go', icon: SiGo },
  { name: 'React', icon: SiReact },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Docker', icon: SiDocker },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Python', icon: SiPython },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'PHP', icon: SiPhp },
];

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const command = 'docker compose up -d';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 静默处理复制失败
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505]">
      {/* Three.js 粒子背景 */}
      <ParticleEffect />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-20 md:px-10 md:pt-28 lg:pt-32">
        {/* 标签 */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#07C160]/20 bg-[#07C160]/5 px-4 py-1.5 font-mono text-xs text-[#07C160]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#07C160]" />
          Universal Message Relay — 基于 iLink 协议
        </div>

        {/* 超大标题 + HyperText 动画，I 用绿色强调 */}
        <div className="mb-6 flex font-mono text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-[0.9] tracking-tighter">
          <HyperText
            as="span"
            className="text-white"
            duration={1200}
            startOnView
            animateOnHover
          >
            OPEN
          </HyperText>
          <HyperText
            as="span"
            className="text-[#07C160]"
            duration={600}
            delay={300}
            startOnView
            animateOnHover
          >
            I
          </HyperText>
          <HyperText
            as="span"
            className="text-white"
            duration={1000}
            delay={500}
            startOnView
            animateOnHover
          >
            LINK
          </HyperText>
        </div>

        {/* 副标题 */}
        <p className="mb-4 max-w-2xl text-xl font-medium text-neutral-300 md:text-2xl">
          微信 ClawBot iLink 协议的开源消息管理平台
        </p>

        {/* 描述 */}
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-neutral-500 md:text-base">
          扫码绑定微信号，消息实时转发到你的服务。支持 WebSocket、Webhook、AI 自动回复三通道并行。
        </p>
        <div className="mb-10 flex flex-wrap gap-3">
          {['多 Bot 管理', 'JS 插件引擎', '7 种语言 SDK', 'Passkey 登录'].map((tag) => (
            <span key={tag} className="rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-1 font-mono text-xs text-neutral-400">
              {tag}
            </span>
          ))}
        </div>

        {/* 按钮组 */}
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <Link href="/docs">
            <ShimmerButton
              shimmerColor="#07C160"
              background="rgba(7, 193, 96, 0.9)"
              borderRadius="8px"
              className="px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider"
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              立即部署
            </ShimmerButton>
          </Link>
          <Link
            href="https://github.com/openilink/openilink-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg border border-neutral-700 bg-neutral-900/80 px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-neutral-300 backdrop-blur transition-colors hover:border-neutral-600 hover:bg-neutral-800"
          >
            <ExternalLink className="h-4 w-4" />
            GitHub
          </Link>
        </div>

        {/* 命令框 */}
        <div className="mb-12 flex w-full max-w-md items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950/80 px-4 py-3 font-mono text-sm backdrop-blur">
          <span className="text-neutral-600">$</span>
          <span className="flex-1 text-neutral-400">{command}</span>
          <button
            onClick={handleCopy}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded text-neutral-600 transition-colors hover:text-neutral-300"
            aria-label="复制命令"
          >
            {copied ? (
              <Check className="h-4 w-4 text-[#07C160]" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* 数据统计 */}
        <div className="mb-16 flex gap-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-black text-white md:text-3xl">{stat.value}</div>
              <div className="font-mono text-xs uppercase tracking-wider text-neutral-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 技术栈滚动条 */}
        <div className="overflow-hidden border-t border-neutral-800/50 pt-8">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-neutral-700">
            Tech Stack
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-[#050505] to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-[#050505] to-transparent" />
            <div className="flex animate-[scroll_25s_linear_infinite] gap-10">
              {[...techStack, ...techStack].map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <span
                    key={`${tech.name}-${i}`}
                    className="flex shrink-0 items-center gap-2 font-mono text-sm text-neutral-600"
                  >
                    <Icon className="h-4 w-4" />
                    {tech.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
