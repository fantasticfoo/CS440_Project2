from flask import Blueprint, request, jsonify
from services.user_service import create_user_service

user_bp = Blueprint('user_bp', __name__)

@user_bp.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    result = create_user_service(data)
    return jsonify(result), 201
