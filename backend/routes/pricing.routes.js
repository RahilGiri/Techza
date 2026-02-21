const express = require('express');
const router = express.Router();
const PricingPlan = require('../models/PricingPlan');
const authMiddleware = require('../middleware/auth.middleware');

// @route   GET /api/pricing
// @desc    Get all pricing plans
// @access  Public
router.get('/', async (req, res) => {
    try {
        // Find existing or seed defaults if empty
        let plans = await PricingPlan.find().sort({ createdAt: 1 });

        if (plans.length === 0) {
            // Seed initial data if DB is empty to match the current UI
            const seedData = [
                {
                    name: "Strategy",
                    price: "$2,999",
                    timeline: "2-4 Weeks",
                    promise: "Comprehensive tech roadmap.",
                    action: "Start Planning",
                    highlight: false
                },
                {
                    name: "MVP Build",
                    price: "$14,999",
                    timeline: "8-12 Weeks",
                    promise: "Market-ready product launch.",
                    action: "Build Your MVP",
                    highlight: true
                },
                {
                    name: "Scale",
                    price: "Custom",
                    timeline: "Ongoing",
                    promise: "Dedicated engineering team.",
                    action: "Scale With Us",
                    highlight: false
                }
            ];
            await PricingPlan.insertMany(seedData);
            plans = await PricingPlan.find().sort({ createdAt: 1 });
        }

        res.json(plans);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT /api/pricing/:id
// @desc    Update a pricing plan
// @access  Private (Admin)
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        let plan = await PricingPlan.findById(req.params.id);
        if (!plan) return res.status(404).json({ message: 'Pricing plan not found' });

        plan = await PricingPlan.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.json(plan);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
