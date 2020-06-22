const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    timestamp: {
        type: Date,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    },
})

// create model from the schema.
const envModel = mongoose.model('data', schema, 'data');

module.exports = { envModel };