# SDK 总览

OpenILink 已经在多个运行时上展开 SDK 布局。当前组织下共有 6 个 SDK 仓库，覆盖 Node.js、PHP、Go、Python、C# 与 Java。它们的成熟度并不完全一致，但已经构成了统一的入口矩阵。

## SDK 列表

| 运行时 | 仓库 | 文档状态 | 备注 |
| --- | --- | --- | --- |
| Node.js | [openilink/openilink-sdk-node](https://github.com/openilink/openilink-sdk-node) | 已有独立页面 | npm 包名为 `openilink-sdk-node` |
| PHP | [openilink/openilink-sdk-php](https://github.com/openilink/openilink-sdk-php) | 已有独立页面 | Composer 包名为 `openilink/openilink-sdk-php` |
| Go | [openilink/openilink-sdk-go](https://github.com/openilink/openilink-sdk-go) | 已有独立入口 | 当前站点收录概览页 |
| Python | [openilink/openilink-sdk-python](https://github.com/openilink/openilink-sdk-python) | 已有独立入口 | 当前站点收录概览页 |
| C# | [openilink/openilink-sdk-csharp](https://github.com/openilink/openilink-sdk-csharp) | 已有独立入口 | 当前站点收录概览页 |
| Java | [openilink/openilink-sdk-java](https://github.com/openilink/openilink-sdk-java) | 已有独立入口 | 当前站点收录概览页 |

## 共同能力

官方 SDK 当前围绕同一组核心任务逐步对齐：

- 二维码登录流程
- 长轮询消息更新
- 文本消息发送
- 会话配置获取
- 打字状态更新
- 上传 URL 获取
- context token 缓存与主动推送

## 如何选择运行时

- 如果你的栈是 JavaScript 或 TypeScript，优先使用 [Node.js SDK](/sdk/node)。
- 如果你的栈是 PHP 或 Composer 项目，优先使用 [PHP SDK](/sdk/php)。
- 如果你的栈偏向 Go，可以先看 [Go SDK](/sdk/go)。
- 如果你的栈偏向 Python，可以先看 [Python SDK](/sdk/python)。
- 如果你的栈偏向 .NET，可以先看 [C# SDK](/sdk/csharp)。
- 如果你的栈偏向 Java，可以先看 [Java SDK](/sdk/java)。

## 文档覆盖范围

当前站点已经为全部 6 个 SDK 仓库提供入口，其中 Node.js 与 PHP 给出更细的接入说明，其余运行时先提供统一索引与定位说明，后续可随着仓库成熟度继续展开。
