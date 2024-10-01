const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS
const albumRoutes = require('./Routes/albumRoutes');
const photographerRoutes = require('./Routes/photographerRoutes');

const app = express();
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// Routes
app.use('/api/albums', albumRoutes);
app.use('/api/auth', photographerRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
