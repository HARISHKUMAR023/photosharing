const express = require('express');
const mongoose = require('mongoose');
const albumRoutes = require('./Routes/albumRoutes');
const PhotographerRoutes = require('./Routes/photographerRoutes')
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/photoshare')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/api/albums', albumRoutes);
app.use('/api/auth', PhotographerRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
