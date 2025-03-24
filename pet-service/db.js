const { Pool } = require('pg');

const pool = new Pool({
  host: 'pet-service-db',
  port: 5432,
  user: 'pet_user',
  password: 'password',
  database: 'pets'
});

module.exports = pool;
