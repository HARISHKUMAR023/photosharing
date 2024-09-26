// models/Album.js
const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  photographerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Photographer', required: true },
  clientName: { type: String, required: true },
  eventName: { type: String, required: true },
  photos: [
    {
      photoUrl: { type: String, required: true },
      photoId: { type: String, required: true }
    }
  ],
  pin: { type: String, required: true }, // Encrypted
  link: { type: String, required: true }
});

module.exports = mongoose.model('Album', albumSchema);
