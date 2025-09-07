import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite' // 引入 UnoCSS
import { execSync } from 'child_process';

const commitHash = execSync('git rev-parse --short HEAD').toString().trim();

export default defineConfig({
  plugins: [
    vue(),
    Unocss(), // 启用 UnoCSS
  ],
  define: {
    // 将 commit hash 定义为全局常量
    // 注意：Vite 会将值视为一个 JS 表达式，所以需要用 JSON.stringify 转换成字符串字面量
    '__APP_COMMIT_HASH__': JSON.stringify(commitHash),
  }
})