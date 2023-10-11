import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import setupAutoImport from './auto-imports'
import setupComponents from './components'

export default function setupVitePlugins(
  viteEnv: Record<string, string>,
  isBuild: boolean
): PluginOption[] {
  // plugin
  const plugins: PluginOption[] = [vue(), vueJsx()]
  plugins.push(setupAutoImport())
  plugins.push(setupComponents())

  if (isBuild) {
    console.log('setupVitePlugins')
  }
  return plugins
}
