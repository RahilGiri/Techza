const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

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

        // Nodemailer: Send Email Notification
        // In production, these should be securely stored in your .env file
        const senderEmail = process.env.EMAIL_USER;
        const senderPass = process.env.EMAIL_PASS;

        if (senderEmail && senderPass) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: senderEmail,
                    pass: senderPass
                }
            });

            const mailOptions = {
                from: senderEmail,
                to: ['rahilgiri1316@gmail.com', 'bhanushalideep24@gmail.com'],
                subject: `New Techza Inquiry from ${name}`,
                html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email (Client):</strong> ${email}</p>
                    <p><strong>Interested Service:</strong> ${service || 'None specified'}</p>
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${message}</p>
                `
            };

            await transporter.sendMail(mailOptions);
            console.log("Email notification dispatched successfully.");
        } else {
            console.log("Email dispatch skipped: 'EMAIL_USER' & 'EMAIL_PASS' environment variables not configured.");
        }

        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({ error: 'Server error while submitting form' });
    }
});

module.exports = router;
