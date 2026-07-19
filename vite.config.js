import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// تنظیم دقیق مسیر برای گیت‌هاب پیجز شما
export default defineConfig({
  plugins: [react()],
  base: '/my-new-portfolio/',
  build: {
    outDir: 'docs', // این خط باعث می‌شود کدهای نهایی دقیقاً وارد پوشه docs شوند
  }
})