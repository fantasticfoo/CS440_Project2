const express = require('express');
const router = express.Router();
const db = require('./db');
const jwt = require('jsonwebtoken');

// register user
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  await db.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password]);
  res.sendStatus(201);
});

// login user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const result = await db.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
  if (result.rows.length === 0) return res.sendStatus(401);
  const token = jwt.sign({ id: result.rows[0].id }, 'secretkey');
  res.json({ token });
});

// get user id
router.get('/:id', async (req, res) => {
  const result = await db.query('SELECT id, username FROM users WHERE id = $1', [req.params.id]);
  if (result.rows.length === 0) return res.sendStatus(404);
  res.json(result.rows[0]);
});

module.exports = router;
