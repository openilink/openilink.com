'use client';

import { Globe } from '@/components/ui/globe';
import { HyperText } from '@/components/ui/hyper-text';
import { FadeIn } from '@/components/ui/fade-in';

export function GlobeSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* 左侧文案 */}
          <FadeIn direction="left">
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-wider text-[#07C160]">
              Connect Everything
            </span>
            <HyperText
              as="h2"
              className="mb-6 text-3xl font-black uppercase tracking-tight text-white md:text-4xl"
              duration={1000}
              startOnView
              animateOnHover
            >
              连接一切终端
            </HyperText>
            <p className="mb-6 max-w-lg text-neutral-500">
              无论你的服务部署在哪里，OpeniLink Hub
              都能将微信消息实时送达。WebSocket、Webhook、AI
              三通道并行，7 种语言 SDK 覆盖主流技术栈。
            </p>
            <ul className="space-y-3 font-mono text-sm text-neutral-400">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#07C160]" />
                WeChat iLink 协议原生接入
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#07C160]" />
                WebSocket / Webhook / AI 多通道分发
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#07C160]" />
                Go · Node.js · Python · PHP · Java · C# · Lua
              </li>
            </ul>
          </FadeIn>

          {/* 右侧地球 */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[400px] w-[400px] md:h-[500px] md:w-[500px]">
              <Globe className="top-0 left-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
