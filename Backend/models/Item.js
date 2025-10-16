const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name for the item'], // Added custom error message
        trim: true // Removes whitespace from both ends of a string
    },
    quantity: {
        type: Number,
        required: [true, 'Please add a quantity for the item'], // Added custom error message
        min: [0, 'Quantity cannot be negative'], // Ensures quantity is not negative
        default: 0 // Optional: A default value if not provided
    },
    // Optional: Add a timestamp for creation and update
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Item', ItemSchema);