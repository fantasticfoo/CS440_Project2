// express server
const express = require('express');
const app = express();
const routes = require('./routes');
app.use(express.json());
app.use('/api/users', routes);
app.listen(3002, () => console.log('User Service running on port 3002'));
