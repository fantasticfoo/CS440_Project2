const express = require('express');
const router = express.Router();
const db = require('./db');

// select from pets 
router.get('/', async (req, res) => {
  const result = await db.query('SELECT * FROM pets');
  res.json(result.rows);
});

// insert into pets
router.post('/', async (req, res) => {
  const { name, type } = req.body;
  const result = await db.query('INSERT INTO pets (name, type, hunger) VALUES ($1, $2, 5) RETURNING *', [name, type]);
  res.status(201).json(result.rows[0]);
});

// update pets hunger
router.put('/feed/:id', async (req, res) => {
  const result = await db.query('UPDATE pets SET hunger = GREATEST(hunger - 1, 0) WHERE id = $1 RETURNING *', [req.params.id]);
  if (result.rows.length === 0) return res.sendStatus(404);
  res.json(result.rows[0]);
});

// delete when necessary
router.delete('/:id', async (req, res) => {
  await db.query('DELETE FROM pets WHERE id = $1', [req.params.id]);
  res.sendStatus(204);
});

module.exports = router;
