import redis
import json

# Connect to Redis
redis_client = redis.Redis(host='redis', port=6379, decode_responses=True)

def publish_user_created_event(user_id):
    event = {
        'event': 'UserCreated',
        'user_id': user_id
    }
    redis_client.publish('user_events', json.dumps(event))
