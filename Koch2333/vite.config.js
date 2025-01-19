import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite' // 引入 UnoCSS

export default defineConfig({
  plugins: [
    vue(),
    Unocss(), // 启用 UnoCSS
  ],
})