const express = require('express');
const router = express.Router();
const db = require('./db');

// select from stats
router.get('/:petId', async (req, res) => {
  const result = await db.query('SELECT * FROM stats WHERE pet_id = $1', [req.params.petId]);
  if (result.rows.length === 0) return res.json({ hunger: 5, mood: 'neutral' });
  res.json(result.rows[0]);
});

// insert stats
router.put('/:petId', async (req, res) => {
  const { hunger, mood } = req.body;
  const result = await db.query(
    'INSERT INTO stats (pet_id, hunger, mood) VALUES ($1, $2, $3) ON CONFLICT (pet_id) DO UPDATE SET hunger = $2, mood = $3 RETURNING *',
    [req.params.petId, hunger, mood]
  );
  res.json(result.rows[0]);
});

module.exports = router;
