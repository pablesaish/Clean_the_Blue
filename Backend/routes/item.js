// backend/routes/items.js
const express = require('express');
const router = express.Router();
const Item = require('../models/Item'); // Make sure the path to Item model is correct

// @route   GET /api/items
// @desc    Get all items
// @access  Public
router.get('/', async (req, res) => {
    try {
        const items = await Item.find().sort({ createdAt: -1 }); // Sort by newest first
        res.json(items);
    } catch (err) {
        console.error('SERVER ERROR (GET /api/items):', err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST /api/items
// @desc    Create a new item
// @access  Public
router.post('/', async (req, res) => {
    // --- IMPROVEMENT #1: Better Logging ---
    // Log the incoming request body. This is the BEST way to debug.
    console.log('Received POST request to /api/items with body:', req.body);

    // --- IMPROVEMENT #2: Explicit Input Validation ---
    // Check if the required fields are present and have the correct type.
    const { name, quantity } = req.body;

    if (!name || typeof name !== 'string') {
        return res.status(400).json({ msg: 'Please provide a valid name (string) for the item.' });
    }
    
    // Check if quantity is a number. 0 is a valid quantity.
    if (quantity === undefined || typeof quantity !== 'number') {
        return res.status(400).json({ msg: 'Please provide a valid quantity (number) for the item.' });
    }

    try {
        // Now that we've validated, create the new item
        const newItem = new Item({
            name,
            quantity
        });

        const savedItem = await newItem.save();
        
        console.log('Item saved successfully:', savedItem);
        res.status(201).json(savedItem); // 201 Created

    } catch (err) {
        // This catch block will now mostly handle database-level errors,
        // since our validation above handles simple input mistakes.
        console.error('SERVER ERROR (POST /api/items):', err.message);
        
        // Mongoose validation error (e.g., quantity is negative)
        if (err.name === 'ValidationError') {
            return res.status(400).json({ msg: err.message });
        }
        
        // Generic server error
        res.status(500).send('Server Error');
    }
});

module.exports = router;