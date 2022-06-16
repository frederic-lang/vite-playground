import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { autoEditPlugin } from 'vite-plugin-autoedit'

export default defineConfig({
  plugins: [
    autoEditPlugin(),
    react()
  ],
})
