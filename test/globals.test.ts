import { expect, it } from 'vitest';

declare var TEST_VARIABLE: string;

it('Environment globals is accessible', () => {
  expect(TEST_VARIABLE).toBe('test value');
});
