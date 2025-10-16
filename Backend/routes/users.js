const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// @route   POST /api/users/register
// @desc    Register a new user
// @access  Public
router.post('/register', async (req, res) => {
    console.log('Received registration request with body:', req.body);
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields.' });
    }

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User with this email already exists.' });
        }

        user = new User({ name, email, password });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        
        console.log('User registered successfully:', user);
        res.status(201).json({
            msg: "User registered successfully!",
            user: { id: user.id, name: user.name, email: user.email }
        });
    } catch (err) {
        console.error('SERVER ERROR (POST /api/users/register):', err.message);
        res.status(500).send('Server Error');
    }
});

// --- NEWLY ADDED CODE ---
// @route   POST /api/users/login
// @desc    Authenticate user
// @access  Public
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields.' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials. User not found.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials. Password incorrect.' });
        }

        // On successful login, send user data back (excluding the password)
        res.status(200).json({
            msg: "Login successful!",
            user: { id: user.id, name: user.name, email: user.email }
        });

    } catch (err) {
        console.error('SERVER ERROR (POST /api/users/login):', err.message);
        res.status(500).send('Server Error');
    }
});
// --- END OF NEWLY ADDED CODE ---

module.exports = router;