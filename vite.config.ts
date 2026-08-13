import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
        rewrite: (path) => path,
        ws: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
    // Source maps for production error tracking
    sourcemap: process.env.NODE_ENV !== 'production',
    // Optimize build size
    minify: 'terser',
    // Show build analysis
    reportCompressedSize: true,
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
  // Environment variable validation
  define: {
    'process.env.VITE_API_BASE_URL': JSON.stringify(
      process.env.VITE_API_BASE_URL || '/api'
    ),
  },
})

