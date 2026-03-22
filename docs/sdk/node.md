# Node.js SDK

The Node.js SDK is intended for modern server runtimes and TypeScript-friendly workflows.

## Package

```bash
npm install openilink-sdk-node
```

Repository:

[openilink/openilink-sdk-node](https://github.com/openilink/openilink-sdk-node)

## Highlights

- ESM-first package layout
- TypeScript source with generated declarations
- Built on native `fetch` in Node.js 18+
- Helper exports for common message parsing

## Typical Flow

```ts
import { Client, extractText } from "openilink-sdk-node";

const client = new Client("");

const result = await client.loginWithQr({
  on_qrcode: (url) => console.log(url)
});

if (!result.connected) {
  throw new Error(result.message);
}

await client.monitor(async (message) => {
  const text = extractText(message);
  if (!text) return;

  await client.sendText(
    String(message.from_user_id),
    `Received: ${text}`,
    String(message.context_token)
  );
});
```

## Recommended Use

Choose the Node.js SDK when you want:

- fast iteration in TypeScript
- simple build integration in Node services
- shared code patterns across server and tooling layers
