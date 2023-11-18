const mongoose = require('mongoose');

const ResultSchema = mongoose.Schema({

    Name: {
        type: String,
        required: true,
    },

    Roll: {
        type: Number,
        required: true,
    },

    Shift: {
        type: String,
        required: true,
    },

    Class: {
        type: Number,
        required: true,
    },

    Sub: {
        type: Object,
        default: {},
    },

    cgpa: String,
    Total: Number,

})

const Results = mongoose.model('Result', ResultSchema);

module.exports = Results;