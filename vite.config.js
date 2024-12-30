import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures correct paths for deployment
  server: { port: 5173 }, // Port configuration
});
