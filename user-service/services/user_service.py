from repositories.user_repository import save_user

def create_user_service(user_data):
    # Example business logic (could add validation here later)
    return save_user(user_data)
