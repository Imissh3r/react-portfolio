import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Sree Dev Portfolio',
        short_name: 'SreePortfolio',
        description: 'My personal React developer portfolio',
        theme_color: '#121212',
        background_color: '#121212',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/favicon.ico',
            sizes: '64x64',
            type: 'image/x-icon'
          },
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
