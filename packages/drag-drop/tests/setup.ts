import { afterEach, vi } from 'vitest';

// dnd-kit measures elements after finishing their animations, which happy-dom does not implement
document.getAnimations ??= () => [];
Element.prototype.getAnimations ??= () => [];

afterEach(() => {
  vi.useRealTimers();
  document.body.innerHTML = '';
});
