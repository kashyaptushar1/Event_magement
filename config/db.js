const mongoose = require('mongoose');

// Use 'localhost' or '127.0.0.1' instead of '0.0.0.0'
const connection = mongoose.connect('mongodb://0.0.0.0/Eventdata')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

module.exports = connection;
