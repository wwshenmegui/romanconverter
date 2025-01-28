const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
const { integerToRoman } = require('./services/romanService');
const romanRoutes = require('./routes/romanRoutes');

// Enable CORS for all domains
app.use(cors());

// Use the Roman numeral routes
app.use('/', romanRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
