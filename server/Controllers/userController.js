const Photographer = require('../Models/Auth.Model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new photographer
exports.registerPhotographer = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if photographer already exists
        const existingPhotographer = await Photographer.findOne({ email });
        if (existingPhotographer) {
            return res.status(400).json({ error: 'Photographer already exists' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new photographer
        const newPhotographer = new Photographer({
            name,
            email,
            password: hashedPassword
        });

        await newPhotographer.save();

        res.status(201).json({ message: 'Photographer registered successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error', details: err.message });
    }
};

// Login a photographer
exports.loginPhotographer = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if photographer exists
        const photographer = await Photographer.findOne({ email });
        if (!photographer) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, photographer.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { photographerId: photographer._id, email: photographer.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        res.status(500).json({ error: 'Server error', details: err.message });
    }
};

// Get all albums of the photographer
exports.getPhotographerAlbums = async (req, res) => {
    try {
        const photographerId = req.photographerId; // Assuming middleware has set photographerId in the request

        const photographer = await Photographer.findById(photographerId).populate('albums');
        if (!photographer) {
            return res.status(404).json({ error: 'Photographer not found' });
        }

        res.status(200).json(photographer.albums);
    } catch (err) {
        res.status(500).json({ error: 'Server error', details: err.message });
    }
};

// Delete photographer
exports.deletePhotographer = async (req, res) => {
    try {
        const { photographerId } = req.params;

        const photographer = await Photographer.findByIdAndDelete(photographerId);
        if (!photographer) {
            return res.status(404).json({ error: 'Photographer not found' });
        }

        res.status(200).json({ message: 'Photographer deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error', details: err.message });
    }
};
