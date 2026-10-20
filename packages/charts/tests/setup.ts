import { afterEach, vi } from 'vitest';

afterEach(() => {
  vi.useRealTimers();
  document.body.innerHTML = '';
});
