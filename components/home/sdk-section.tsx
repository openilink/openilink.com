'use client';

import { KeyRound, Puzzle, Container, ExternalLink } from 'lucide-react';
import { SiGo, SiNodedotjs, SiPython, SiPhp } from 'react-icons/si';
import { HyperText } from '@/components/ui/hyper-text';
import { FadeIn } from '@/components/ui/fade-in';
import Link from 'next/link';

const sdkList = [
  {
    lang: 'Go',
    icon: SiGo,
    command: 'go get github.com/openilink/openilink-sdk-go',
    url: 'https://github.com/openilink/openilink-sdk-go',
    ready: true,
  },
  {
    lang: 'Node.js',
    icon: SiNodedotjs,
    command: 'npm install @openilink/openilink-sdk-node',
    url: 'https://github.com/openilink/openilink-sdk-node',
    ready: true,
  },
  {
    lang: 'Python',
    icon: SiPython,
    command: 'pip install openilink-sdk-python',
    url: 'https://github.com/openilink/openilink-sdk-python',
    ready: true,
  },
  {
    lang: 'PHP',
    icon: SiPhp,
    command: 'composer require openilink/openilink-sdk-php',
    url: 'https://github.com/openilink/openilink-sdk-php',
    ready: true,
  },
];

const moreSDKs = [
  { lang: 'Java', status: '从源码构建' },
  { lang: 'C#', status: '开发中' },
  { lang: 'Lua', status: '从源码引入' },
];

const bonusFeatures = [
  {
    icon: KeyRound,
    title: 'Passkey 无密码登录',
    desc: '基于 WebAuthn 标准，支持指纹、Face ID、硬件密钥，告别密码。',
    color: '#07C160',
  },
  {
    icon: Puzzle,
    title: 'JavaScript 插件引擎',
    desc: '内置 goja JS 运行时，onRequest / onResponse 两阶段钩子，自定义消息处理。',
    color: '#D86A33',
  },
  {
    icon: Container,
    title: 'Docker 一键部署',
    desc: 'docker compose up -d 即可启动，首个注册用户自动成为管理员。',
    color: '#07C160',
  },
];

export function SDKSection() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#07C160]/3 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* 标题 */}
        <FadeIn className="mb-12">
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-wider text-[#D86A33]">
            SDK Ecosystem
          </span>
          <HyperText
            as="h2"
            className="mb-4 text-3xl font-black tracking-tight text-white md:text-4xl"
            duration={1000}
            startOnView
            animateOnHover
          >
            用你熟悉的语言接入
          </HyperText>
          <p className="max-w-2xl text-neutral-500">
            官方 SDK 提供统一的 API 设计和完整类型定义。一行命令安装，几分钟接入消息平台。
          </p>
        </FadeIn>

        {/* SDK 卡片 */}
        <div className="mb-6 grid gap-4 md:grid-cols-2">
          {sdkList.map((sdk, i) => {
            const Icon = sdk.icon;
            return (
              <FadeIn key={sdk.lang} delay={i * 0.1}>
              <Link
                href={sdk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 transition-colors hover:border-neutral-700"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#07C160]/10">
                  <Icon className="h-5 w-5 text-[#07C160]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="font-semibold text-white">{sdk.lang}</span>
                    <ExternalLink className="h-3 w-3 text-neutral-600 transition-colors group-hover:text-neutral-400" />
                  </div>
                  <code className="block overflow-x-auto rounded bg-neutral-950 px-3 py-2 font-mono text-xs text-neutral-400">
                    {sdk.command}
                  </code>
                </div>
              </Link>
              </FadeIn>
            );
          })}
        </div>

        {/* 更多 SDK */}
        <div className="mb-16 flex flex-wrap items-center gap-3">
          {moreSDKs.map((sdk) => (
            <span
              key={sdk.lang}
              className="rounded-md border border-neutral-800 bg-neutral-900/50 px-3 py-1.5 font-mono text-xs text-neutral-500"
            >
              {sdk.lang} <span className="text-neutral-700">— {sdk.status}</span>
            </span>
          ))}
        </div>

        {/* 补充特性 */}
        <div className="grid gap-4 md:grid-cols-3">
          {bonusFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-colors hover:border-neutral-700"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: feature.color }} />
                  </div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
