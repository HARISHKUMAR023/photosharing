const express = require('express');
const router = express.Router();
const photographerController = require('../Controllers/userController');
const authMiddleware = require('../Middleware/auth'); // Assuming JWT middleware for protecting routes

// Photographer registration
router.post('/register', photographerController.registerPhotographer);

// Photographer login
router.post('/login', photographerController.loginPhotographer);

// Get all albums of the photographer (protected route)
router.get('/albums', authMiddleware, photographerController.getPhotographerAlbums);

// Delete photographer by ID
router.delete('/:photographerId', photographerController.deletePhotographer);

module.exports = router;
