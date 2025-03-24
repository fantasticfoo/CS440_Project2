const { Pool } = require('pg');

const pool = new Pool({
  host: 'user-service-db',
  port: 5432,
  user: 'user_user',
  password: 'password',
  database: 'users'
});

module.exports = pool;
