import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths for assets
  build: {
    outDir: 'dist', // Default output directory
  },
  server: {
    fs: {
      strict: false, // Allow reading from outside root for debugging
    },
  },
});
