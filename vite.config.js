import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    export default defineConfig({
      plugins: [react()],
      server: {
        port: 3452
      },
      preview: {
        port: 3452
      },
      build: {
        rollupOptions: {
          external: ['sqlite3', 'better-sqlite3']
        }
      },
      optimizeDeps: {
        exclude: ['sqlite3', 'better-sqlite3']
      }
    })
