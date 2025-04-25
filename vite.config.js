import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/cp5/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
});
