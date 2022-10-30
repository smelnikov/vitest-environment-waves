import { expect, it } from 'vitest';
import { UserConfig } from 'vitest/config';
import { create } from '@waves/node-api-js';
import config from '../vitest.config';

declare var WavesNode: {
  api: ReturnType<typeof create>;
  url: string;
  networkByte: number;
};

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
