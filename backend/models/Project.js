const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    techStack: [{
        type: String
    }],
    image: {
        type: String, // URL or base64
        required: true,
    },
    liveLink: {
        type: String,
        required: false,
    }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
