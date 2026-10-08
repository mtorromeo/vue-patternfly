import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config.mts';

export default mergeConfig(viteConfig, defineConfig({
  test: {
    environment: 'happy-dom',
    include: ['tests/**/*.spec.ts'],
    setupFiles: ['./tests/setup.ts'],
    restoreMocks: true,
    server: {
      deps: {
        // react-styles modules import their .css files, so they must go through vite
        inline: [/@patternfly\/react-styles/],
      },
    },
  },
}));
