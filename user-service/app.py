from flask import Flask, request, jsonify
import psycopg2
import os
from events import publish_user_created_event

app = Flask(__name__)

def get_db_connection():
    conn = psycopg2.connect(
        host=os.getenv("DB_HOST", "user-service-db"),
        database=os.getenv("DB_NAME", "users"),
        user=os.getenv("DB_USER", "user_user"),
        password=os.getenv("DB_PASSWORD", "password")
    )
    return conn

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    name = data['name']
    email = data['email']
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('INSERT INTO users (name, email) VALUES (%s, %s) RETURNING id;', (name, email))
    user_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    # Publish user created event
    publish_user_created_event(user_id)

    return jsonify({"id": user_id}), 201

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3002)
