const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    FullName: {
        type: String,
        required: true,
    },

    Email: {
        type: String,
        required: true,
        unique: true,
    },

    Password: {
        type: String,
        required: true,
    },

    Role: String,

    Image: String,

})

const user = mongoose.model('user',userSchema);

module.exports = user;