const request = require('supertest');
const express = require('express');
const romanRoutes = require('@routes/romanRoutes');

const app = express();
app.use(express.json());
app.use('/', romanRoutes);

describe('Integration Tests for /romannumeral Endpoint', () => {
    test('Should return a valid Roman numeral for a valid input', async () => {
        const response = await request(app).get('/romannumeral?query=10');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ input: '10', output: 'X' });
    });

    test('Should handle invalid or missing query parameters', async () => {
        const response = await request(app).get('/romannumeral');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Invalid or missing query parameter. Please provide a valid integer.' });
    });

    test('Should handle non-numeric query parameters', async () => {
        const response = await request(app).get('/romannumeral?query=abc');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Invalid or missing query parameter. Please provide a valid integer.' });
    });

    test('Should handle out-of-range values (less than 1)', async () => {
        const response = await request(app).get('/romannumeral?query=0');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Input must be an integer between 1 and 3999.' });
    });

    test('Should handle out-of-range values (greater than 3999)', async () => {
        const response = await request(app).get('/romannumeral?query=4000');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Input must be an integer between 1 and 3999.' });
    });

    test('Should return a valid Roman numeral for the maximum allowed input', async () => {
        const response = await request(app).get('/romannumeral?query=3999');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ input: '3999', output: 'MMMCMXCIX' });
    });
});
