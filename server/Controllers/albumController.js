// controllers/albumController.js
const Album = require('../Models/Album');
const Selection = require('../Models/Selection');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

// Create Album
exports.createAlbum = async (req, res) => {
  try {
    const { clientName, eventName, photos, pin } = req.body;

    // Generate album link
    const albumId = crypto.randomBytes(6).toString('hex');
    const link = `https://photoshare.com/client/${albumId}`;

    // Encrypt PIN
    const salt = await bcrypt.genSalt(10);
    const hashedPin = await bcrypt.hash(pin, salt);

    // Create Album
    const album = new Album({
      photographerId: req.user.id, // Assuming the photographer is authenticated
      clientName,
      eventName,
      photos,
      pin: hashedPin,
      link
    });

    await album.save();
    res.status(201).json({ message: 'Album created', link });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Verify PIN and Fetch Album
exports.verifyPin = async (req, res) => {
  try {
    const { albumId, pin } = req.body;

    const album = await Album.findOne({ _id: albumId });
    if (!album) return res.status(404).json({ error: 'Album not found' });

    // Verify PIN
    const isMatch = await bcrypt.compare(pin, album.pin);
    if (!isMatch) return res.status(401).json({ error: 'Invalid PIN' });

    res.status(200).json({ album });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Submit Selected Photos
exports.submitSelection = async (req, res) => {
  try {
    const { albumId, clientName, selectedPhotos } = req.body;

    const selection = new Selection({
      albumId,
      clientName,
      selectedPhotos
    });

    await selection.save();
    res.status(201).json({ message: 'Photos submitted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Fetch Submitted Selections
exports.getSelections = async (req, res) => {
  try {
    const { albumId } = req.params;

    const selections = await Selection.find({ albumId });
    if (!selections) return res.status(404).json({ error: 'No selections found' });

    res.status(200).json({ selections });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
