const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const authMiddleware = require('../middleware/auth.middleware');

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST /api/projects
// @desc    Create a project
// @access  Private (Admin)
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { title, category, description, techStack, image } = req.body;

        const newProject = new Project({
            title,
            category,
            description,
            techStack,
            image
        });

        const project = await newProject.save();
        res.json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT /api/projects/:id
// @desc    Update a project
// @access  Private (Admin)
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        let project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: 'Project not found' });

        project = await Project.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE /api/projects/:id
// @desc    Delete a project
// @access  Private (Admin)
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: 'Project not found' });

        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: 'Project removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
