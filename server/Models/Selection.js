// models/Selection.js
const mongoose = require('mongoose');

const selectionSchema = new mongoose.Schema({
  albumId: { type: mongoose.Schema.Types.ObjectId, ref: 'Album', required: true },
  clientName: { type: String, required: true },
  selectedPhotos: [{ type: String }]
});

module.exports = mongoose.model('Selection', selectionSchema);
