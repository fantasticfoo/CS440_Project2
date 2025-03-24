-- pet stats 
CREATE TABLE IF NOT EXISTS stats (
  pet_id INTEGER PRIMARY KEY,
  hunger INTEGER DEFAULT 5,
  mood TEXT DEFAULT 'neutral'
);
