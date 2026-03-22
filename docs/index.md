---
layout: home

hero:
  name: OpenILink
  text: 面向会话系统的开放连接层
  tagline: 为机器人、智能体与消息驱动产品提供统一接入面。OpenILink 目前公开维护 9 个仓库，覆盖官网、平台中枢、Telegram 集成以及 6 个不同运行时的 SDK。
  image:
    src: /mark.svg
    alt: OpenILink
  actions:
    - theme: brand
      text: 查看接入指南
      link: /guide/
    - theme: alt
      text: 浏览 SDK
      link: /sdk/

features:
  - icon: ◎
    title: 统一 SDK 接口层
    details: Node.js、PHP、Go、Python、C#、Java 六条 SDK 线路正在形成统一接入面，优先围绕登录、轮询、发消息和上下文管理对齐。
  - icon: ▣
    title: 面向真实交付
    details: 官网把项目定位、仓库矩阵、SDK 入口和接入文档收拢到同一个表面，减少在多个仓库和零散说明之间来回切换的成本。
  - icon: ⇢
    title: 适合生态扩展
    details: 除 SDK 外，组织中已经存在 hub 与 tg 两条生态仓库，后续可继续向 API 参考、部署手册和集成配方扩展。
---

## 为什么是 OpenILink

OpenILink 不是单一仓库，而是一套围绕会话接入构建的公开工程表面。它把最常用的开发动作压缩成一条清晰链路：登录、收消息、回消息、维护上下文、再往上叠加中枢能力和第三方渠道集成。目标很直接，让团队先看到一条可执行的接入路径，而不是先被过重的概念层淹没。

## 你可以在这里找到什么

- 项目定位与整体结构
- 组织全部公开仓库入口
- 6 个运行时 SDK 的接入说明与状态
- 面向实际接入的快速开始
- 路线图与扩展方向
- 社区与仓库链接

## 接入原则

OpenILink 倾向于保持窄入口、强一致性和低理解成本：

- 对外接口尽量对齐不同语言 SDK
- 文档贴近真实实现，不写空泛概念页
- 示例以“可以直接改成自己项目”为目标
- 允许生态逐步扩展，而不是一开始就设计过重

## 当前公开仓库矩阵

- 官网：`openilink.com`
- 平台与生态：`openilink-hub`、`openilink-tg`
- SDK：`openilink-sdk-node`、`openilink-sdk-php`、`openilink-sdk-go`、`openilink-sdk-python`、`openilink-sdk-csharp`、`openilink-sdk-java`

## 快速入口

- [接入指南](/guide/)
- [SDK 总览](/sdk/)
- [组织仓库](/repositories)
- [社区页面](/community)
