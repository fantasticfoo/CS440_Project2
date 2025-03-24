// initialize rate limit
const rateLimit = require('express-rate-limit');
module.exports = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 30,
  message: 'Too many requests, please try again later.'
});
