'use client';

import { useRef } from 'react';
import {
  QrCode,
  Route,
  Zap,
  Code,
  MessageCircle,
  Bot,
  Webhook,
  Cpu,
  Activity,
} from 'lucide-react';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { AnimatedBeam } from '@/components/ui/animated-beam';
import { HyperText } from '@/components/ui/hyper-text';
import { FadeIn } from '@/components/ui/fade-in';

// 消息流架构示意图：iLink → Hub → 三通道输出
function IntegrationBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ilinkRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const wsRef = useRef<HTMLDivElement>(null);
  const webhookRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full items-center justify-center px-6 py-8"
    >
      {/* 左：iLink 输入 */}
      <div className="flex flex-col items-center gap-2">
        <div ref={ilinkRef} className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#07C160]/30 bg-[#07C160]/10">
          <MessageCircle className="h-5 w-5 text-[#07C160]" />
        </div>
        <span className="font-mono text-[10px] text-neutral-600">iLink</span>
      </div>

      {/* 中：Hub */}
      <div className="mx-14 flex flex-col items-center gap-2">
        <div
          ref={hubRef}
          className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#07C160]/30 bg-[#07C160]/10 shadow-[0_0_20px_rgba(7,193,96,0.1)]"
        >
          <img src="/icon-white.svg" alt="Hub" className="h-7 w-7" />
        </div>
        <span className="font-mono text-[10px] text-neutral-600">Hub</span>
      </div>

      {/* 右：三通道输出 */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-1">
          <div ref={wsRef} className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800/80">
            <Cpu className="h-4 w-4 text-neutral-400" />
          </div>
          <span className="font-mono text-[10px] text-neutral-600">WebSocket</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div ref={webhookRef} className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800/80">
            <Webhook className="h-4 w-4 text-neutral-400" />
          </div>
          <span className="font-mono text-[10px] text-neutral-600">Webhook</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div ref={aiRef} className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800/80">
            <Bot className="h-4 w-4 text-neutral-400" />
          </div>
          <span className="font-mono text-[10px] text-neutral-600">AI</span>
        </div>
      </div>

      {/* iLink → Hub */}
      <AnimatedBeam containerRef={containerRef} fromRef={ilinkRef} toRef={hubRef} duration={4} pathColor="rgba(7,193,96,0.15)" />

      {/* Hub → 三通道 */}
      <AnimatedBeam containerRef={containerRef} fromRef={hubRef} toRef={wsRef} curvature={-30} duration={4} delay={0.3} pathColor="rgba(7,193,96,0.15)" />
      <AnimatedBeam containerRef={containerRef} fromRef={hubRef} toRef={webhookRef} duration={4} delay={0.7} pathColor="rgba(7,193,96,0.15)" />
      <AnimatedBeam containerRef={containerRef} fromRef={hubRef} toRef={aiRef} curvature={30} duration={4} delay={1.1} pathColor="rgba(7,193,96,0.15)" />
    </div>
  );
}

const features = [
  {
    Icon: Route,
    name: '多协议消息路由',
    description: 'WeChat、Telegram、Webhook 等来源统一路由到 WebSocket、AI、SDK。',
    href: '/docs',
    cta: '了解架构',
    background: <IntegrationBeamDemo />,
    className: 'md:col-span-2 lg:col-span-2',
  },
  {
    Icon: Zap,
    name: 'WebSocket 实时推送',
    description: '毫秒级消息投递，全双工通信，支持断线自动重连。',
    href: '/docs',
    cta: '了解更多',
    background: (
      <div className="flex h-full items-center justify-center p-6">
        <div className="w-full max-w-xs rounded-lg border border-neutral-800 bg-neutral-950/80 p-4">
          <div className="mb-3 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#07C160] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#07C160]" />
            </span>
            <span className="font-mono text-xs text-neutral-500">已连接</span>
          </div>
          <code className="block font-mono text-xs text-neutral-400">
            <span className="text-neutral-600">ws://</span>
            <span className="text-[#07C160]">hub.openilink.com</span>
            <span className="text-neutral-600">/channel/ws</span>
          </code>
          <div className="mt-3 space-y-1.5">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-neutral-600">&darr;</span>
              <span className="rounded bg-[#07C160]/10 px-1.5 py-0.5 font-mono text-[#07C160]">msg.text</span>
              <span className="text-neutral-500">&quot;你好！&quot;</span>
            </div>
          </div>
        </div>
      </div>
    ),
    className: '',
  },
  {
    Icon: Code,
    name: 'Webhook + JS 插件',
    description: 'HTTP 回调对接任意服务，内置 JavaScript 插件引擎。',
    href: '/docs',
    cta: '了解更多',
    background: (
      <div className="flex h-full items-center justify-center p-6">
        <div className="w-full max-w-xs rounded-lg border border-neutral-800 bg-neutral-950/80 p-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
          </div>
          <pre className="overflow-x-auto font-mono text-xs leading-5">
            <code>
              <span className="text-neutral-500">{'// webhook.js'}</span>
              {'\n'}
              <span className="text-[#D86A33]">export default</span>
              <span className="text-neutral-300">{' (msg) => {'}</span>
              {'\n  '}
              <span className="text-[#07C160]">fetch</span>
              <span className="text-neutral-300">{'('}</span>
              <span className="text-yellow-300">{`'https://...'`}</span>
              <span className="text-neutral-300">{', {'}</span>
              {'\n    '}
              <span className="text-neutral-300">{'body: '}</span>
              <span className="text-[#07C160]">JSON</span>
              <span className="text-neutral-300">{'.stringify(msg)'}</span>
              {'\n  '}
              <span className="text-neutral-300">{'})'}</span>
              {'\n'}
              <span className="text-neutral-300">{'}'}</span>
            </code>
          </pre>
        </div>
      </div>
    ),
    className: '',
  },
  {
    Icon: Activity,
    name: '消息链路追踪',
    description: '完整的消息追踪时间线，从接收到投递每一步清晰可见，快速定位问题。',
    href: '/docs/hub/tracing',
    cta: '了解更多',
    background: (
      <div className="flex h-full items-center justify-center p-6">
        <div className="w-full max-w-md rounded-lg border border-neutral-800 bg-neutral-950/80 p-4">
          <div className="mb-3 font-mono text-xs text-neutral-500">Trace Timeline</div>
          <div className="space-y-2">
            {[
              { name: 'process_message', width: '65%', time: '2.86s' },
              { name: 'store', width: '5%', time: '<1ms' },
              { name: 'POST command-se...', width: '48%', time: '2.10s', offset: '17%' },
              { name: 'send_reply', width: '12%', time: '', offset: '52%' },
              { name: 'Bot API send_reply', width: '8%', time: '', offset: '85%' },
            ].map((span) => (
              <div key={span.name} className="flex items-center gap-2">
                <span className="w-32 shrink-0 truncate text-right font-mono text-[10px] text-neutral-500">{span.name}</span>
                <div className="relative h-4 flex-1 rounded-sm bg-neutral-900">
                  <div
                    className="absolute top-0 h-full rounded-sm bg-[#07C160]/30"
                    style={{ width: span.width, left: span.offset || '0%' }}
                  />
                  {span.time && (
                    <span className="absolute top-0.5 font-mono text-[9px] leading-3 text-neutral-300" style={{ left: `calc(${span.offset || '0%'} + 4px)` }}>{span.time}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    className: 'md:col-span-2 lg:col-span-2',
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Section 标题 */}
        <FadeIn className="mb-12">
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-wider text-[#07C160]">
            消息管理平台
          </span>
          <HyperText
            as="h2"
            className="mb-4 text-3xl font-black uppercase tracking-tight text-white md:text-4xl"
            duration={1000}
            startOnView
            animateOnHover
          >
            一站式管理微信 Bot
          </HyperText>
          <p className="max-w-2xl text-neutral-500">
            从扫码绑定到消息分发，OpeniLink Hub
            提供完整的管理面板、应用市场、消息链路追踪和多通道消息路由。
          </p>
        </FadeIn>

        <BentoGrid className="auto-rows-[22rem] lg:grid-cols-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
