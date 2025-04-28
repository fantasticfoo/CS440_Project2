import redis
import json

# Connect to Redis
redis_client = redis.Redis(host='redis', port=6379, decode_responses=True)

def handle_user_created(user_id):
    # add default stats in  database
    print(f"Handling UserCreated event for user_id: {user_id}")
    # connect to stats db and insert default stats 

def listen_to_user_events():
    pubsub = redis_client.pubsub()
    pubsub.subscribe('user_events')
    for message in pubsub.listen():
        if message['type'] == 'message':
            event_data = json.loads(message['data'])
            if event_data['event'] == 'UserCreated':
                handle_user_created(event_data['user_id'])
