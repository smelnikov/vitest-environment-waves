import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'waves',
    environmentOptions: {
      nodeApiURL: 'http://localhost:6869',
    },
  },
});
