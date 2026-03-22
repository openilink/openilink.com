# 指南

OpenILink 更像一个小型生态，而不是单一仓库。官网负责解释整体结构和入口关系，Hub 提供更直接的平台入口，SDK 仓库承担不同运行时的接入细节，渠道仓库则指向外部集成方向。

## 先理解几个入口

你可以把 OpenILink 理解成四个相互配合的表面：

1. 官网：`openilink.com`，负责讲清结构、入口和文档。
2. Hub：`hub.openilink.com`，负责承接更直接的平台入口。
3. SDK：6 个官方运行时仓库，负责具体接入。
4. 渠道与生态：Telegram 与 OpenClaw 相关仓库，负责把能力延伸到外部场景。

## 为什么首页强调 1:N

这里的 `1:N` 可以直接理解成：

- 1 个机器人
- 对多个渠道

一开始很多人只会把机器人理解成“收到一条消息，回复一条消息”。

但在真实场景里，机器人通常要面对：

- 飞书
- 钉钉
- Telegram
- WhatsApp
- 以及更多渠道的广播和分发动作

OpenILink 重点解决的就是这个阶段的问题，所以首页会先强调 `1:N`。

## Hub 和 SDK 的区别

Hub 和 SDK 不是同一个东西：

- Hub：偏平台入口，适合先看能力和分发表面
- SDK：偏代码接入，适合直接开发
- 官网：偏说明和导航，适合第一次了解

如果你只想记一句话：

- 想先看平台，去 [Hub](https://hub.openilink.com)
- 想直接写代码，去 [SDK 总览](/sdk/)
- 想先搞清楚结构，留在当前指南页继续看

## 核心模型

中心链路围绕 bot 接入展开：

1. 完成认证并建立可用会话。
2. 通过长轮询接收入站消息。
3. 发出响应消息与状态更新。
4. 缓存 context token 以支持主动触达。
5. 在同一套传输原语之上继续叠加更高层能力。

## 站点结构

站点被刻意拆成几个明确区域：

- `https://hub.openilink.com` 放平台入口
- `/guide/` 放概念与方向
- `/sdk/` 放 6 个运行时 SDK 的统一入口
- `/repositories` 放组织全部公开仓库索引
- `/roadmap` 放后续方向
- `/community` 放仓库和协作方式

## 仓库分层

目前可以把 `openilink` 组织理解成四层：

1. 官网层：`openilink.com`
2. 中枢层：`openilink-hub`
3. 渠道层：`openilink-tg`、`openclaw-channel-openilink`
4. SDK 层：`openilink-sdk-node`、`openilink-sdk-php`、`openilink-sdk-go`、`openilink-sdk-python`、`openilink-sdk-csharp`、`openilink-sdk-java`

## 实现原则

OpenILink 偏向保持窄而清晰的起始面：

- 不同语言 SDK 尽量保持方法和流程对齐。
- 请求和响应形态优先保持直白，而不是过度抽象。
- 示例要能直接映射到真实使用场景。
- 文档结构要便于随着生态增长持续扩展。

## 建议阅读顺序

- 第一次了解项目：先看 [Hub](https://hub.openilink.com) 和 [仓库页](/repositories)
- 要开始接入：先看 [SDK 总览](/sdk/)
- 已经确定运行时：进入对应 SDK 页面
- 想了解发展方向：看 [路线图](/roadmap)

## 下一步

如果你要开始接入，先进入 [SDK 总览](/sdk/)；如果你想先看平台表面，直接打开 [Hub](https://hub.openilink.com)。
