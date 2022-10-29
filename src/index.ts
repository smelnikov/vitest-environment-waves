import type { Environment } from 'vitest';
import { create } from '@waves/node-api-js';

const DEFAULT_NODE_API_URL = 'http://localhost:6869';

interface WavesEnvOptions {
  nodeApiURL: string;
}

export default <Environment>{
  name: 'waves',
  async setup(global, options: WavesEnvOptions) {
    const nodeApiURL = options?.nodeApiURL || DEFAULT_NODE_API_URL;

    let api = create(nodeApiURL);
    const networkByte = await api.tools.blocks.getNetworkByte();

    Object.assign(global, { WavesNode: { api, url: nodeApiURL, networkByte } });

    return {
      teardown() {},
    };
  },
};
