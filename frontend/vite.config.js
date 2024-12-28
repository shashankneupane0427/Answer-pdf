// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@features': '/src/components/features', // Alias for components/features folder
    },
  },
});
