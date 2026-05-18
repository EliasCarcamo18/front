import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite que se acceda externamente en la red 
    port: 5173, // O el puerto que use tu frontend (ej: 80, 3000, 5173)
    proxy: {
      // 📦 Redirección para Despachos
      '/api/despacho': {
        target: 'http://10.0.136.18:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/despacho/, '')
      },
      // 💰 Redirección para Ventas
      '/api/venta': {
        target: 'http://10.0.136.18:5001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/venta/, '')
      }
    }
  }
})

