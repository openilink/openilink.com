'use client';

import { type ReactNode } from 'react';
import { ArrowRight, FileText, KeyRound, Clock, Image, Monitor, Plug } from 'lucide-react';
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
    desc: 'OpeniLink Hub 把 iLink 的原始能力包装成完整平台：一键安装零依赖、应用市场一键扩展、自动续期防掉线、消息链路追踪、AI 回复，开箱即用。',
  },
];

// 用户真实痛点 → OpeniLink Hub 的解法
const painPoints: { icon: ReactNode; pain: string; solution: string }[] = [
  {
    icon: <FileText className="h-5 w-5 text-neutral-400" />,
    pain: '没有官方文档，全靠社区逆向',
    solution: '完善中文文档 + 7 种语言 SDK，无需了解协议',
  },
  {
    icon: <KeyRound className="h-5 w-5 text-neutral-400" />,
    pain: 'context_token 复杂，消息经常发不出去',
    solution: 'SDK 自动处理 token，你只管收消息、发回复',
  },
  {
    icon: <Clock className="h-5 w-5 text-neutral-400" />,
    pain: '24 小时过期掉线，重要消息丢了',
    solution: '自动续期，提前续约不掉线；消息持久化不丢失',
  },
  {
    icon: <Image className="h-5 w-5 text-neutral-400" />,
    pain: '发张图片要处理 CDN 上传 + AES 加密',
    solution: '一行代码发图片、视频、文件，SDK 搞定加密',
  },
  {
    icon: <Monitor className="h-5 w-5 text-neutral-400" />,
    pain: '只能用命令行，管不了多个 Bot',
    solution: 'Web 控制台，扫码绑定、在线监控、消息追踪',
  },
  {
    icon: <Plug className="h-5 w-5 text-neutral-400" />,
    pain: '想接 AI + 转发 + 实时推送，得自己拼',
    solution: '三个通道开箱即用，装个 App 就能加新功能',
  },
];

// 与同类项目的核心差异
const comparisons = [
  { feature: '定位', hub: '完整消息管理平台', others: 'SDK / Agent 桥接器' },
  { feature: 'Web 管理后台', hub: '完整控制台 + 消息追踪', others: '无 / 仅配置面板' },
  { feature: '消息分发', hub: 'WebSocket + Webhook + AI 并行', others: '单一通道或无' },
  { feature: 'SDK 生态', hub: '7 种语言官方 SDK', others: '1~4 种语言' },
  { feature: '扩展能力', hub: '应用市场 + JS 插件引擎', others: '硬编码 / 无插件' },
  { feature: '部署方式', hub: '一行命令，内置 SQLite 零配置', others: '需要外部数据库或 Docker' },
  { feature: 'OpenClaw 依赖', hub: '完全独立（可选适配）', others: '部分强依赖 OpenClaw' },
  { feature: '开源协议', hub: 'MIT，无商业限制', others: '部分闭源或限制' },
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

        {/* 痛点 → 解法 */}
        <div className="mb-20">
          <h3 className="mb-3 text-xl font-bold text-white">
            用 iLink 开发遇到过这些问题吗？
          </h3>
          <p className="mb-8 text-sm text-neutral-500">Hub 帮你把这些坑都填了。</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((item, i) => (
              <FadeIn
                key={i}
                delay={i * 0.08}
                className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/80"
              >
                {/* 顶部图标 */}
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800/80 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                {/* 痛点 */}
                <p className="mb-3 text-sm leading-relaxed text-neutral-500">
                  <span className="mr-1 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-red-400/60" />
                  {item.pain}
                </p>
                {/* 分割线 */}
                <div className="mb-3 h-px bg-gradient-to-r from-[#07C160]/20 via-[#07C160]/5 to-transparent" />
                {/* 解法 */}
                <p className="text-sm font-medium leading-relaxed text-neutral-200">
                  <span className="mr-1 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-[#07C160]" />
                  {item.solution}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* 对比表格 */}
        <div className="mb-12 max-w-4xl">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-wider text-neutral-600">
            与同类开源项目对比
          </h3>
          <p className="mb-6 text-sm text-neutral-500">
            目前 GitHub 上有不少 iLink 相关项目（WeClaw、wechatbot、weixin-bot 等），
            但大多数只是 SDK 或 Agent 桥接工具。Hub 是目前唯一带<span className="text-neutral-300">管理后台 + 应用市场 + 多通道分发</span>的完整平台。
          </p>
          <div className="overflow-hidden rounded-xl border border-neutral-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-900/80">
                  <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-neutral-500">对比维度</th>
                  <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-[#07C160]">OpeniLink Hub</th>
                  <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-neutral-600">其他方案</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.feature} className="border-b border-neutral-800/50 last:border-0">
                    <td className="px-4 py-3 text-neutral-400">{row.feature}</td>
                    <td className="px-4 py-3 font-mono text-xs text-neutral-200">{row.hub}</td>
                    <td className="px-4 py-3 font-mono text-xs text-neutral-600">{row.others}</td>
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
