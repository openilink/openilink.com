# PHP SDK

The PHP SDK is intended for PHP applications that want a direct integration layer without heavy dependencies.

## Package

```bash
composer require openilink/openilink-sdk-php
```

Repository:

[openilink/openilink-sdk-php](https://github.com/openilink/openilink-sdk-php)

## Highlights

- Minimal dependency surface
- Native cURL-based HTTP transport
- Simple associative-array request and response model
- Long-poll monitoring loop with callback hooks

## Typical Flow

```php
<?php

declare(strict_types=1);

use OpenILink\Client;
use OpenILink\MessageHelper;

$client = new Client('');
$result = $client->loginWithQr([
    'on_qrcode' => static fn (string $url) => print($url . PHP_EOL),
]);

if (!($result['connected'] ?? false)) {
    throw new RuntimeException((string) ($result['message'] ?? 'Login failed'));
}

$client->monitor(static function (array $message) use ($client): void {
    $text = MessageHelper::extractText($message);
    if ($text === '') {
        return;
    }

    $client->sendText(
        (string) $message['from_user_id'],
        'Received: ' . $text,
        (string) $message['context_token'],
    );
});
```

## Recommended Use

Choose the PHP SDK when you want:

- direct integration into existing PHP systems
- Composer-based dependency management
- a thin SDK layer that stays close to the wire format
