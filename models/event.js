const mongoose = require('mongoose');

// Define the event schema
const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Full name is required
        minlength: 3, // Minimum length for the name
    },
    phoneno: {
        type: String,
        required: true, // Phone number is required
        match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'], // Phone number validation
    },
    eventtype: {
        type: String,
        required: true, // Event type is required
        enum: ['wedding', 'party', 'conference', 'other'], // Limit to specific event types
    },
    message: {
        type: String,
        required: false, // Message is optional
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create the event model
const eventModel = mongoose.model('Event', eventSchema);

module.exports = eventModel;
