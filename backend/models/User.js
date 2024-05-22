const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    list :[{
        type: mongoose.Types.ObjectId,
        ref: 'Manga'
    }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;