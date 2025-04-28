from flask import Flask
from controllers.user_controller import user_bp

app = Flask(__name__)
app.register_blueprint(user_bp)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3002)
