import { expect, it } from 'vitest';
import { create } from '@waves/node-api-js';

declare var WavesNode: { api: ReturnType<typeof create>; networkByte: number };

it('Waves node api is accessible', async () => {
  await expect(WavesNode.api.blocks.fetchHeadersLast()).resolves;
});

it('Network byte is fetched', async () => {
  expect(WavesNode.networkByte).toBe(
    await WavesNode.api.tools.blocks.getNetworkByte()
  );
});
