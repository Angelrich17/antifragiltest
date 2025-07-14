import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';
import type { ViteDevServer } from 'vite';
import type { IncomingMessage, ServerResponse } from 'http';

// Custom plugin to serve static files before SPA fallback
const staticFilePlugin = () => ({
  name: 'static-file-plugin',
  configureServer(server: ViteDevServer) {
    server.middlewares.use('/sitemap.xml', (req: IncomingMessage, res: ServerResponse, next: () => void) => {
      const filePath = path.join(__dirname, 'public', 'sitemap.xml');
      if (fs.existsSync(filePath)) {
        res.setHeader('Content-Type', 'application/xml');
        res.end(fs.readFileSync(filePath, 'utf8'));
      } else {
        next();
      }
    });
    
    server.middlewares.use('/robots.txt', (req: IncomingMessage, res: ServerResponse, next: () => void) => {
      const filePath = path.join(__dirname, 'public', 'robots.txt');
      if (fs.existsSync(filePath)) {
        res.setHeader('Content-Type', 'text/plain');
        res.end(fs.readFileSync(filePath, 'utf8'));
      } else {
        next();
      }
    });
  }
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Configure middleware to serve static files before SPA
    middlewareMode: false,
    fs: {
      strict: false
    }
  },
  plugins: [
    staticFilePlugin(),
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
