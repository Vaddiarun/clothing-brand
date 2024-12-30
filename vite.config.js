import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' if deployed at the root, or '/subdirectory/' if in a subdirectory
});
