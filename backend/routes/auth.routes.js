const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// MVP static admin credentials - in a real app these would be in DB and hashed
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@techza.in';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key_for_development_techza';

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        // Generate a token valid for 24 hours
        const token = jwt.sign(
            { role: 'admin', email: ADMIN_EMAIL },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        return res.status(200).json({
            message: 'Login successful',
            token
        });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;
