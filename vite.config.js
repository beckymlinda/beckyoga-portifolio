import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync, readdirSync } from 'node:fs'

// Any video dropped into public/videos/ becomes the Koahkh Fit Gym class video.
const videoDir = 'public/videos'
const video = existsSync(videoDir)
  ? readdirSync(videoDir).find((f) => /\.(mp4|webm|mov|m4v)$/i.test(f))
  : undefined

export default defineConfig({
  plugins: [react()],
  define: {
    __GYM_VIDEO__: JSON.stringify(video ? `/videos/${encodeURIComponent(video)}` : ''),
  },
})
