import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/vikuverse/' : '/',
  optimizeDeps: {
    include: ['react-slick', 'slick-carousel', 'react', 'react-dom'],
    exclude: ['react-awesome-slider'], // Exclude problematic dependency
    force: true, // Clear stale cache
  },
  server: {
    watch: {
      usePolling: true, // Improve file watching
    },
    hmr: true,
    port: 5173,
    host: 'localhost',
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});