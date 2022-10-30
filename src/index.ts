import type { Environment } from 'vitest';
import { create } from '@waves/node-api-js';

const DEFAULT_NODE_API_URL = 'http://localhost:6869';

declare global {
  var WavesNode: {
    api: ReturnType<typeof create>;
    url: string;
    networkByte: number;
  };
}

type WavesEnvironmentOptions = {
  nodeApiURL: string;
};

export default <Environment>{
  name: 'waves',
  async setup(global, options = {}) {
    const { nodeApiURL = DEFAULT_NODE_API_URL } =
      options as WavesEnvironmentOptions;

    const api = create(nodeApiURL);
    const networkByte = await api.tools.blocks.getNetworkByte();

    Object.assign(global, { WavesNode: { api, url: nodeApiURL, networkByte } });

    return {
      async teardown() {},
    };
  },
};
