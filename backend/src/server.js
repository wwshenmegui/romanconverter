const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
const { integerToRoman } = require('./services/romanService');
const romanRoutes = require('./routes/romanRoutes');
const logger = require('./utils/logger');
const client = require('prom-client');

// Enable CORS for all domains
app.use(cors());

//log
app.use((req, res, next) => {
    const startTime = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - startTime;
        logger.info(`[${req.method}] ${req.originalUrl} - ${res.statusCode} (${duration}ms)`);
    });

    next();
});

// metrics
const httpRequestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status_code'],
});

const httpRequestDuration = new client.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Request duration in seconds',
    labelNames: ['method', 'route', 'status_code'],
    buckets: [0.1, 0.3, 0.5, 1, 3, 5], // Buckets for response times
});

app.use((req, res, next) => {
    const start = process.hrtime(); // Start timer

    res.on('finish', () => {
        const duration = process.hrtime(start);
        const durationInSeconds = duration[0] + duration[1] / 1e9;

        httpRequestCounter.inc({ method: req.method, route: req.path, status_code: res.statusCode });
        httpRequestDuration.observe({ method: req.method, route: req.path, status_code: res.statusCode }, durationInSeconds);
    });

    next();
});

// Use the Roman numeral routes
app.use('/', romanRoutes);

// Expose metrics endpoint
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
