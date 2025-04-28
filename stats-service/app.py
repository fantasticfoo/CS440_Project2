from flask import Flask
import threading
from subscriber import listen_to_user_events

app = Flask(__name__)

# Start listening to user events in background thread
listener_thread = threading.Thread(target=listen_to_user_events)
listener_thread.start()

@app.route('/')
def home():
    return "Stats Service Running", 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3003)
