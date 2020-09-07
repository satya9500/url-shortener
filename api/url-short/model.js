const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    extendedUrl: {
        type: String,
        required: [true, 'Please provide your name'],
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    shortUrl: {
        type: String
    },
    expirationTime: {
        type: Date
    }
});

module.exports = mongoose.model('Url', userSchema);
