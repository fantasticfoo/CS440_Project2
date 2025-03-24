-- pet table
CREATE TABLE IF NOT EXISTS pets (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  hunger INTEGER DEFAULT 5
);

-- seed data
INSERT INTO pets (name, type, hunger)
VALUES
  ('Fuzzy', 'ferret', 5),
  ('Nibbles', 'hamster', 3),
  ('Spiky', 'hedgehog', 4);