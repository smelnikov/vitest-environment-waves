import type { Environment } from 'vitest';

export default <Environment>{
  name: 'waves',
  async setup(global, options) {
    Object.assign(global, options.globals);

    return {
      teardown() {},
    };
  },
};
