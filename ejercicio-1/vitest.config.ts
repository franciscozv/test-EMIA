import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    
    reporters: ['verbose'],
    
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json'],
      exclude: [
        'node_modules/',
        'dist/',
        '**/*.config.ts',
        '**/*.test.ts',
      ],
    },
    
    testTimeout: 30000,

  },
});

