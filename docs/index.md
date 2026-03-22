---
layout: home

hero:
  name: OpenILink
  text: 面向会话系统的开放连接层
  tagline: 为机器人、智能体与消息驱动产品提供统一接入面。OpenILink 当前公开 10 个仓库，覆盖官网、Hub、中枢与渠道集成，以及 6 个官方 SDK。
  image:
    src: /mark.svg
    alt: OpenILink
  actions:
    - theme: brand
      text: 进入 Hub
      link: https://hub.openilink.com
    - theme: alt
      text: 查看接入指南
      link: /guide/
    - theme: alt
      text: 浏览 SDK
      link: /sdk/

features:
  - icon: ◎
    title: 6 条官方 SDK 线路
    details: Node.js、PHP、Go、Python、C#、Java 六条 SDK 线路持续对齐，优先覆盖登录、轮询、发消息和上下文管理等核心动作。
  - icon: ▣
    title: Hub 与文档双入口
    details: Hub 提供更直接的平台入口，官网负责解释仓库矩阵、SDK 状态与接入路径，减少在多个仓库间来回切换的成本。
  - icon: ⇢
    title: 面向生态扩展
    details: 除 Hub 外，组织中还公开维护 Telegram 与 OpenClaw 渠道相关仓库，后续可继续向 API 参考、部署手册与集成配方扩展。
---

## 为什么是 OpenILink

OpenILink 不是单一仓库，而是一套围绕会话接入构建的公开工程表面。它把最常用的动作压缩成一条清晰链路：登录、收消息、回消息、维护上下文，再往上叠加 Hub 能力和第三方渠道集成。目标很直接，让团队先看到一条可执行的接入路径，而不是先被过重的概念层淹没。

## 你可以在这里找到什么

- 项目定位与整体结构
- Hub 入口与平台表面
- 组织全部公开仓库入口
- 6 个运行时 SDK 的接入说明与状态
- 面向实际接入的快速开始
- 路线图与扩展方向
- 社区与仓库链接

## 推荐起步路径

- 想先进入平台表面：直接打开 [Hub](https://hub.openilink.com)
- 想理解项目结构：先看 [仓库页](/repositories)
- 想开始做接入：进入 [SDK 总览](/sdk/)
- 想看方向和约束：阅读 [指南](/guide/)

## 接入原则

OpenILink 倾向于保持窄入口、强一致性和低理解成本：

- 对外接口尽量对齐不同语言 SDK
- 文档贴近真实实现，不写空泛概念页
- 示例以“可以直接改成自己项目”为目标
- 允许生态逐步扩展，而不是一开始就设计过重

## 当前公开仓库矩阵

- 官网：`openilink.com`
- 中枢：`openilink-hub`
- 渠道与生态：`openilink-tg`、`openclaw-channel-openilink`
- SDK：`openilink-sdk-node`、`openilink-sdk-php`、`openilink-sdk-go`、`openilink-sdk-python`、`openilink-sdk-csharp`、`openilink-sdk-java`

## 快速入口

- [Hub 平台](https://hub.openilink.com)
- [接入指南](/guide/)
- [SDK 总览](/sdk/)
- [组织仓库](/repositories)
- [社区页面](/community)
