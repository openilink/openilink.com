# 指南

OpenILink 更像一个小型生态，而不是单一仓库。官网负责解释整体结构和入口关系，SDK 仓库承担不同运行时的接入细节，`hub` 与 `tg` 仓库则指向更高层的平台与渠道扩展方向。

## 核心模型

中心链路围绕 bot 接入展开：

1. 完成认证并建立可用会话。
2. 通过长轮询接收入站消息。
3. 发出响应消息与状态更新。
4. 缓存 context token 以支持主动触达。
5. 在同一套传输原语之上继续叠加更高层能力。

## 站点结构

站点被刻意拆成几个明确区域：

- `/guide/` 放概念与方向
- `/sdk/` 放 6 个运行时 SDK 的统一入口
- `/repositories` 放组织全部公开仓库索引
- `/roadmap` 放后续方向
- `/community` 放仓库和协作方式

## 仓库分层

目前可以把 `openilink` 组织理解成三层：

1. 官网层：`openilink.com`
2. SDK 层：`openilink-sdk-node`、`openilink-sdk-php`、`openilink-sdk-go`、`openilink-sdk-python`、`openilink-sdk-csharp`、`openilink-sdk-java`
3. 生态层：`openilink-hub`、`openilink-tg`

## 实现原则

OpenILink 偏向保持窄而清晰的起始面：

- 不同语言 SDK 尽量保持方法和流程对齐。
- 请求和响应形态优先保持直白，而不是过度抽象。
- 示例要能直接映射到真实使用场景。
- 文档结构要便于随着生态增长持续扩展。

## 建议阅读顺序

- 第一次了解项目：先看 [仓库页](/repositories)
- 要开始接入：先看 [SDK 总览](/sdk/)
- 已经确定运行时：进入对应 SDK 页面
- 想了解发展方向：看 [路线图](/roadmap)

## 下一步

如果你要开始接入，直接进入 [SDK 总览](/sdk/)。
