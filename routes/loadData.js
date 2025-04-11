const express = require('express');
const router = express.Router();
const LoadData = require('../models/LoadData');

// Get all load data
router.get('/', async (req, res) => {
    try {
        const data = await LoadData.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:date', async (req, res) => {
    try {
        const date = req.params.date; // e.g. "01-01-2010"
        const data = await LoadData.find({ Date: date }).sort({ Time: 1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
