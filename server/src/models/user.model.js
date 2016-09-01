const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean
});

module.exports = mongoose.model('User', userSchema); 