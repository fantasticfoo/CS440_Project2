// require express
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
// include rate limit and middleware
const rateLimiter = require('./rateLimiter');
const authMiddleware = require('./authMiddleware');

const app = express();
app.use(express.json());
app.use(rateLimiter);

// define api routes
app.use('/api/pets', createProxyMiddleware({ target: 'http://pet-service:3001', changeOrigin: true }));
app.use('/api/stats', createProxyMiddleware({ target: 'http://stats-service:3003', changeOrigin: true }));
app.use('/api/users/:id', authMiddleware);
app.use('/api/users', createProxyMiddleware({ target: 'http://user-service:3002', changeOrigin: true }));

app.listen(5000, () => console.log('API Gateway running on port 5000'));
