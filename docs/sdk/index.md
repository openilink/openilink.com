# SDK Overview

OpenILink maintains official SDKs for the most common backend runtimes.

## Available Packages

| Runtime | Package | Repository |
| --- | --- | --- |
| Node.js | `openilink-sdk-node` | [openilink/openilink-sdk-node](https://github.com/openilink/openilink-sdk-node) |
| PHP | `openilink/openilink-sdk-php` | [openilink/openilink-sdk-php](https://github.com/openilink/openilink-sdk-php) |

## Shared Capabilities

The official SDKs align around the same core tasks:

- QR login flow
- Long-poll message updates
- Text message sending
- Session configuration lookup
- Typing status updates
- Upload URL retrieval
- Context token caching and proactive push

## Choose a Runtime

- Use [Node.js SDK](/sdk/node) if your stack is JavaScript or TypeScript.
- Use [PHP SDK](/sdk/php) if your stack is PHP-based or Composer-driven.
