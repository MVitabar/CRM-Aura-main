import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: '16px',
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          plugins: [
            "sortAttrs",
            {
              name: "convertColors",
              params: { currentColor: true, }
            },
            {
              name: "removeAttrs",
              params: { attrs: ['stroke-width'], }
            }
          ]
        }
      },
    })],
})