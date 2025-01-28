const express = require('express');
const router = express.Router();
const { integerToRoman } = require('../services/romanService');


// Endpoint to handle the conversion
router.get('/romannumeral', (req, res) => {
    const query = req.query.query;

    if (!query || isNaN(query)) {
        return res.status(400).json({ error: 'Invalid or missing query parameter. Please provide a valid integer.' });
    }

    const num = parseInt(query, 10);

    if (num < 1 || num > 3999) {
        return res.status(400).json({ error: 'Input must be an integer between 1 and 3999.' });
    }

    const romanNumeral = integerToRoman(num);
    res.json({ input: num.toString(), roman: romanNumeral });
});

module.exports = router;
