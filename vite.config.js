import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'resources/js/easymde.js',
      name: 'EasyMDEPlugin',
      formats: ['iife'],
      fileName: 'easymde',
    },
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
});
