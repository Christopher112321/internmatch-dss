// ============================================================
// InternMatch DSS - Vercel Serverless Function Handler
// ============================================================
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const perusahaanRoutes = require('./routes/perusahaanRoutes');
const hasilRoutes = require('./routes/hasilRoutes');
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Support both /api/... and /...
app.use('/api/auth', authRoutes);
app.use('/auth', authRoutes);
app.use('/api/perusahaan', perusahaanRoutes);
app.use('/perusahaan', perusahaanRoutes);
app.use('/api/hasil', hasilRoutes);
app.use('/hasil', hasilRoutes);
app.use('/api/mahasiswa', mahasiswaRoutes);
app.use('/mahasiswa', mahasiswaRoutes);

app.get(['/api', '/'], (req, res) => {
  res.json({ message: 'InternMatch DSS API is running 🚀' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
});

module.exports = app;
