import { fileURLToPath, URL } from 'node:url'
import { AliasOptions, ServerOptions } from 'vite'

export const alias: AliasOptions = {
  '@': fileURLToPath(new URL('../src', import.meta.url))
}

export const server: ServerOptions = {
  host: true
}
