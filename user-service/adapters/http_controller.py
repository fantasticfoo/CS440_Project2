from flask import Blueprint, request, jsonify
from app.service import create_user
import adapters.database_adapter as db_adapter

user_bp = Blueprint('user_bp', __name__)

@user_bp.route('/api/users', methods=['POST'])
def create_user_route():
    data = request.get_json()
    name = data['name']
    email = data['email']
    user_id = create_user(name, email, db_adapter)
    return jsonify({"id": user_id}), 201
