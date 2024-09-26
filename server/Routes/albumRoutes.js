// routes/albumRoutes.js
const express = require('express');
const router = express.Router();
const albumController = require('../Controllers/albumController');
const auth = require('../Middleware/auth'); // Assuming authentication middleware

// Route to create a new album (Photographer)
router.post('/create-album', auth, albumController.createAlbum);

// Route to verify PIN and fetch album (Client)
router.post('/verify-pin', albumController.verifyPin);

// Route for clients to submit selected photos
router.post('/submit-selection', albumController.submitSelection);

// Route for photographers to view submitted selections
router.get('/selections/:albumId', auth, albumController.getSelections);

module.exports = router;
