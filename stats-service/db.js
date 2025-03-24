const { Pool } = require('pg');

const pool = new Pool({
  host: 'stats-service-db',
  port: 5432,
  user: 'stats_user',
  password: 'password',
  database: 'stats'
});

module.exports = pool;
