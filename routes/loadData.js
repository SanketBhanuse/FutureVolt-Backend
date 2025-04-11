const express = require('express');
const router = express.Router();
const LoadData = require('../models/LoadData');
const FutureData = require('../models/FutureData');

// Helper function to check if date is in future (DD-MM-YYYY format)
function isFutureDate(dateString) {
    const [day, month, year] = dateString.split('-').map(Number);
    const inputDate = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return inputDate > today;
}

// Get data for specific date (works for both past and future)
router.get('/:date', async (req, res) => {
    try {
        const date = req.params.date;

        if (isFutureDate(date)) {
            // Fetch from FutureData collection (same schema structure)
            const data = await FutureData.find({ Date: date }).sort({ Time: 1 });
            res.json(data);
        } else {
            // Fetch from original data collection
            const data = await LoadData.find({ Date: date }).sort({ Time: 1 });
            res.json(data);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;