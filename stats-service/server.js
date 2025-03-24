// express server
const express = require('express');
const app = express();
const routes = require('./routes');
app.use(express.json());
app.use('/api/stats', routes);
app.listen(3003, () => console.log('Stats Service running on port 3003'));
