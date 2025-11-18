import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 3000;
const BASE = '/ablaze-prototypes';

// Serve static files from dist/public under the BASE path
app.use(BASE, express.static(path.join(__dirname, 'dist', 'public')));

// Always return index.html for SPA routes under BASE
app.get(BASE, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'public', 'index.html'));
});
app.get(`${BASE}/*`, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serving site at http://localhost:${PORT}${BASE}/`);
});
