import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const SERVER_URL = 'http://localhost:3000'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '^/api/.*': {    
        target: SERVER_URL,      
        changeOrigin: true,     
        secure: false,
      },
      '/img':{
              target: SERVER_URL,
              changeOrigin: true,
              secure: false,
      }
    },}
});
