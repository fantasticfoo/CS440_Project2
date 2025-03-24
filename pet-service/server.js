// express server 
const express = require('express');
const app = express();
const routes = require('./routes');
app.use(express.json());
app.use('/api/pets', routes);
app.listen(3001, () => console.log('Pet Service running on port 3001'));
