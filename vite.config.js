import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig( ({ command, mode })=> {
  // 获取各种环境下的对应的变量, mode默认开发,  process.cwd()为项目根目录
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    // vite下查找proxy，代理跨域
    server: {
      proxy: {
        // 关键词， 如'/api'
        [env.VITE_APP_BASE_API]: {
          // 获取数据的服务器地址设置
          target: env.VITE_SERVE,
          // 需要代理跨域
          changeOrigin: true,
          // 路径重写, mock有/api，真实没有,所以得去掉
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
