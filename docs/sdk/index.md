# SDK 总览

OpenILink 已经在多个运行时上展开 SDK 布局。当前网站先对接入最直接的 Node.js 与 PHP 提供独立说明，同时把其余官方仓库一并纳入统一入口。

## 可用包

| 运行时 | 包名 | 仓库 |
| --- | --- | --- |
| Node.js | `openilink-sdk-node` | [openilink/openilink-sdk-node](https://github.com/openilink/openilink-sdk-node) |
| PHP | `openilink/openilink-sdk-php` | [openilink/openilink-sdk-php](https://github.com/openilink/openilink-sdk-php) |
| Go | `openilink-sdk-go` | [openilink/openilink-sdk-go](https://github.com/openilink/openilink-sdk-go) |
| Python | `openilink-sdk-python` | [openilink/openilink-sdk-python](https://github.com/openilink/openilink-sdk-python) |
| C# | `openilink-sdk-csharp` | [openilink/openilink-sdk-csharp](https://github.com/openilink/openilink-sdk-csharp) |

## 共同能力

官方 SDK 目前围绕同一组核心任务对齐：

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
- 如果你的栈偏向 Go、Python 或 .NET，可以先直接进入对应仓库查看当前进展。

## 当前文档覆盖

当前站点已经补齐：

- Node.js SDK
- PHP SDK
- 组织级 SDK 总览入口

其余运行时仓库已收录在 [仓库页](/repositories) 中，会随着实现成熟逐步补充独立说明。
