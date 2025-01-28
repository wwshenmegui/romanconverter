const express = require('express');
const router = express.Router();
const { integerToRoman } = require('../services/romanService');
const logger = require('../utils/logger');


// Endpoint to handle the conversion
router.get('/romannumeral', (req, res) => {
    const query = req.query.query;

    if (!query || isNaN(query)) {
        logger.warn(`Invalid request: ${req.originalUrl}`);
        return res.status(400).json({ error: 'Invalid or missing query parameter. Please provide a valid integer.' });
    }

    const num = parseInt(query, 10);

    if (num < 1 || num > 3999) {
        logger.warn(`Out of range: ${req.originalUrl}`);
        return res.status(400).json({ error: 'Input must be an integer between 1 and 3999.' });
    }

    const romanNumeral = integerToRoman(num);
    logger.info(`Converted ${num} to ${romanNumeral}`);
    res.json({ input: num.toString(), roman: romanNumeral });
});

// health check to monitor server status
router.get('/health', (req, res) => {
    res.status(200).json({ status: "ok", uptime: process.uptime() });
});

module.exports = router;
