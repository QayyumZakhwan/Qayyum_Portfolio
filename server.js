import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve public static directory (assets, images, fonts)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));
app.use(express.static(__dirname));

// Project detail routes
app.get(['/ProjectDetail.dc.html', '/ProjectDetail.html', '/project-detail'], (req, res) => {
  res.sendFile(path.join(__dirname, 'ProjectDetail.html'));
});

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Qayyum Portfolio server running at http://0.0.0.0:${PORT}`);
});
