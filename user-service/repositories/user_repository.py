import psycopg2
import os

def get_db_connection():
    return psycopg2.connect(
        host=os.getenv("DB_HOST", "user-service-db"),  
        database=os.getenv("DB_NAME", "userdb"),
        user=os.getenv("DB_USER", "postgres"),
        password=os.getenv("DB_PASSWORD", "postgres")
    )


def save_user(user_data):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO users (name, email) VALUES (%s, %s) RETURNING id;",
        (user_data['name'], user_data['email'])
    )
    user_id = cursor.fetchone()[0]
    conn.commit()
    cursor.close()
    conn.close()
    return {"id": user_id}
