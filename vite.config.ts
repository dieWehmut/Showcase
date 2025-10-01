import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
function readGithubPagesFlag(): boolean {
  try {
    // 在大多数 Node/Vite 运行时，globalThis.process.env 可用；我们做一次安全读取
    // 使用索引访问避免对 process 的静态类型依赖
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const p = (globalThis as any).process
    return !!(p && p.env && p.env['GITHUB_PAGES'] === 'true')
  } catch {
    return false
  }
}

const isGithubPages = readGithubPagesFlag()
const base = isGithubPages ? '/Showcase/' : '/'

const assetsPath = '/src/assets' 

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': assetsPath
    }
  },
  base,
  build: {
    sourcemap: false,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]' // 确保图片/音频等静态资源路径正确
      }
    }
  }
})
