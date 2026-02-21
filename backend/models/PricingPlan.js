const mongoose = require('mongoose');

const pricingPlanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    timeline: {
        type: String,
        required: true,
    },
    promise: {
        type: String,
        required: true,
    },
    action: {
        type: String,
        required: true,
    },
    highlight: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

module.exports = mongoose.model('PricingPlan', pricingPlanSchema);
