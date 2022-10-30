# `vitest-environment-waves`

Vitest testing module for Waves blockchain.

## Setup

The Waves environment isn't installed by default, install it and Vitest with npm:

```sh
npm install -D vitest-environment-waves vitest
```

or yarn:

```sh
npm install -D vitest-environment-waves vitest
```

To enable the Waves environment, set the environment option in your Vitest configuration:

```javascript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'waves',
  },
});
```

By default, the waves node api url is set to `http://localhost:6869`,
you can specify your own value via `environmentOptions`:

```javascript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'waves',
    environmentOptions: {
      nodeApiURL: 'http://nodes-testnet.wavesnodes.com',
    },
  },
});
```

## Writing and Running Tests

The Waves environment allows us to use the global WavesNode object, which contains the following parameters:

```typescript
import { create } from '@waves/node-api-js';

declare global {
  var WavesNode: {
    api: ReturnType<typeof create>;
    url: string;
    networkByte: number;
  };
}
```

Here some samples using global WavesNode object:

```typescript
import 'vitest-environment-waves';
import { UserConfig } from 'vitest/config';
import config from '../vitest.config';

it('Waves node api url is the same as in the configuration', async () => {
  await expect(WavesNode.url).toBe(
    (config as UserConfig).test!.environmentOptions!.nodeApiURL
  );
});

it('Waves node api is accessible', async () => {
  await WavesNode.api.blocks.fetchHeadersLast();
});

it('Network byte is fetched correctly', async () => {
  await expect(WavesNode.api.tools.blocks.getNetworkByte()).resolves.toBe(
    WavesNode.networkByte
  );
});
```
