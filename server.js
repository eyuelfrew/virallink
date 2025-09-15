// server.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// We assume NODE_ENV=production is set by cPanel
const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // Parse URL to handle dynamic routes
    const parsedUrl = parse(req.url, true);
    
    // Handle all requests via Next.js
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});