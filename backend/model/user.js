const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    hospitalId: {
        required: true,
        type: String
    },
    count: {
        required: true,
        type: Number
    },
    slot:{
        required: true,
        type: String
    },
    total:{
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Users', dataSchema)