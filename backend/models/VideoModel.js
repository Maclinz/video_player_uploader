const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
    },
    videoUrl: {
        type: String,
        trim: true,
        required: true,
    },
    filename: {
        type: String,
        trim: true,
    }
}, {timestamps: true})

module.exports = mongoose.model('MyVideos', VideoSchema)