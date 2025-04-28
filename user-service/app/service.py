# Core business logic (NO Flask, NO SQL)

def create_user(name, email, db_adapter):
    return db_adapter.insert_user(name, email)
