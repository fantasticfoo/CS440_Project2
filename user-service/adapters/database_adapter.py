import psycopg2
import os

def get_db_connection():
    return psycopg2.connect(
        host=os.getenv("DB_HOST", "user-service-db"),
        database=os.getenv("DB_NAME", "users"),
        user=os.getenv("DB_USER", "user_user"),
        password=os.getenv("DB_PASSWORD", "password")
    )

def insert_user(name, email):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('INSERT INTO users (name, email) VALUES (%s, %s) RETURNING id;', (name, email))
    user_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()
    return user_id
