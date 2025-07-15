import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';
import { fileURLToPath } from 'url';
import type { ViteDevServer } from 'vite';
import type { IncomingMessage, ServerResponse } from 'http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Custom plugin to serve static files before SPA fallback
const staticFilePlugin = () => ({
  name: 'static-file-plugin',
  configureServer(server: ViteDevServer) {
    // Intercept requests for static files before they reach the SPA fallback
    server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: () => void) => {
      if (req.url === '/sitemap.xml') {
        const filePath = path.resolve(__dirname, 'public', 'sitemap.xml');
        if (fs.existsSync(filePath)) {
          res.setHeader('Content-Type', 'application/xml');
          res.setHeader('Cache-Control', 'public, max-age=3600');
          res.end(fs.readFileSync(filePath, 'utf8'));
          return;
        }
      }
      
      if (req.url === '/robots.txt') {
        const filePath = path.resolve(__dirname, 'public', 'robots.txt');
        if (fs.existsSync(filePath)) {
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Cache-Control', 'public, max-age=86400');
          res.end(fs.readFileSync(filePath, 'utf8'));
          return;
        }
      }
      
      next();
    });
  }
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    middlewareMode: false,
    fs: { strict: false }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lucide-react', 'clsx', 'tailwind-merge']
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'sitemap.xml' || assetInfo.name === 'robots.txt') {
            return '[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
  plugins: [
    staticFilePlugin(),
    react(),
    mode === 'development' && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
