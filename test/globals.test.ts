import { expect, it } from 'vitest';
import { UserConfig } from 'vitest/config';
import config from '../vitest.config';
import 'vitest-environment-waves';

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
