const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res) => {
    try {
        const { name, email, service, message } = req.body;

        // Validate
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Please provide all required fields' });
        }

        // Save to database
        const newContact = new Contact({
            name,
            email,
            service,
            message
        });

        await newContact.save();

        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({ error: 'Server error while submitting form' });
    }
});

module.exports = router;
