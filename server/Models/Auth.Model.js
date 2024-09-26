// models/Photographer.js
const mongoose = require('mongoose');

const photographerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  albums: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }]
});

module.exports = mongoose.model('Photographer', photographerSchema);
