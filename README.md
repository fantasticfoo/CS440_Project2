# CS440 Project 2 – Microservices Architecture

## Overview

This project refactors the original virtual pet system from a monolithic design into a microservices-based architecture. Each service operates independently with its own database, enabling separation of concerns, scalability, and maintainability.

## Architecture

```
virtual-pet-microservices/
│
├── api-gateway/         # Routes requests, handles auth and rate limiting
├── pet-service/         # Manages pet creation, updates, and deletion
├── user-service/        # Handles user registration, login, and profile
├── stats-service/       # Tracks pet stats like hunger and mood
└── docker-compose.yml   # Spins up all services and their databases
```

## Technologies Used

- Node.js + Express
- PostgreSQL
- Docker & Docker Compose
- JWT for authentication
- express-rate-limit (rate limiting)
- http-proxy-middleware (API Gateway routing)
- opossum (circuit breaker)

## Microservices

### Pet Service
- **Port**: 3001
- **Route**: `/api/pets`
- **Responsibilities**: Create, retrieve, update, delete pets

### User Service
- **Port**: 3002
- **Route**: `/api/users`
- **Responsibilities**: Register, login, get user profile (JWT-based auth)

### Stats Service
- **Port**: 3003
- **Route**: `/api/stats`
- **Responsibilities**: Update and retrieve stats for pets

### API Gateway
- **Port**: 5000
- **Responsibilities**: Unified entry point with routing, JWT auth, rate limiting

## Running the Project

### Prerequisites
- Docker
- Docker Compose

### Steps
1. From the project root, run:
   ```bash
   docker-compose down -v
   docker-compose up --build
   ```

2. Open a browser and test:
   - `http://localhost:5000/api/pets`
   - `http://localhost:5000/api/stats/1`

3. Use Postman or curl for POST/PUT/DELETE routes

## Example Endpoints

```http
POST /api/users/register
POST /api/users/login
GET /api/users/:id   # Requires Bearer token

POST /api/pets
PUT /api/pets/feed/:id

GET /api/stats/:petId
PUT /api/stats/:petId
```


