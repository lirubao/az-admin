import { defineConfig, loadEnv } from 'vite'
import { alias, server } from './vite'
import setupVitePlugins from './vite/plugins'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: setupVitePlugins(env, command === 'build'),
    server,
    resolve: {
      alias
    }
  }
})
