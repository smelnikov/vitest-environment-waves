import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'waves',
    environmentOptions: {
      globals: { TEST_VARIABLE: 'test value' },
    },
  },
});
