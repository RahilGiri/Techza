const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());

// Routes
const contactRoutes = require('./routes/contact');
const authRoutes = require('./routes/auth.routes');
const projectRoutes = require('./routes/projects.routes');
const pricingRoutes = require('./routes/pricing.routes');

app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/pricing', pricingRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

// Database Connection
const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/devflow-clone';

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
