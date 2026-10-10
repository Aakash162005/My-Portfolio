import { defineConfig, type ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import contactHandler from './api/contact.js'
import dotenv from 'dotenv'

// Load environment variables for local development
dotenv.config()

// Custom Vite plugin to handle Vercel API routes locally
const vercelApiMock = () => ({
  name: 'vercel-api-mock',
  configureServer(server: ViteDevServer) {
    server.middlewares.use((req: any, res: any, next: any) => {
      if (req.url === '/api/contact' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk: Buffer | string) => { body += chunk.toString() });
        req.on('end', async () => {
          try {
            req.body = JSON.parse(body);
          } catch (e) {
            req.body = {};
          }
          // Mock res.status() and res.json() which Vercel provides
          res.status = (code: number) => {
            res.statusCode = code;
            return res;
          };
          res.json = (data: unknown) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
          };
          await contactHandler(req, res);
        });
      } else {
        next();
      }
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vercelApiMock()],
})
