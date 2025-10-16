const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: './config/config.env' }); // Make sure this path is correct!
const itemsRouter = require('./routes/item');
const usersRouter = require('./routes/users');

console.log('Server starting...'); // Log 1

const app = express();
const PORT = process.env.PORT || 5000;

console.log('Middleware setup...'); // Log 2
app.use(cors());
app.use(express.json());

app.use('/api/item', itemsRouter);
app.use('/api/users', usersRouter);

console.log('Attempting to connect to MongoDB...'); // Log 3
console.log('MONGO_URI from .env:', process.env.MONGO_URI ? '***** (URI is present)' : 'ERROR: MONGO_URI is NOT set!'); // Log 4

// Adding useNewUrlParser and useUnifiedTopology back, and increasing timeout for debugging
mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 30000 
})
.then(() => {
    console.log('SUCCESS: Connected to MongoDB Atlas!'); // Log 5
    app.listen(PORT, () => {
        console.log(`Backend server is running on http://localhost:${PORT}`);
    });
})
.catch(err => {
    console.error('FATAL ERROR: Could not connect to MongoDB Atlas.', err); // Log 6 - This is the crucial one!
    process.exit(1); // Ensure process exits so nodemon detects the crash
});