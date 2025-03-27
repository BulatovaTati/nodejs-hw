# Contact App

## Overview
This Contact App provides a RESTful API for managing a contact list. Users can create, retrieve, update, and delete contacts efficiently. The API is documented using Swagger for easy exploration and testing.

## Features
- CRUD operations for managing contacts
- User authentication and authorization
- OAuth support for authentication
- Swagger documentation for API endpoints
- Error handling and validation

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Swagger (OpenAPI 3.1)
- JWT for authentication
- OAuth integration

## API Documentation
The API is documented using Swagger. Once the server is running, access the Swagger UI at:
```
https://nodejs-hw-nq50.onrender.com/api-docs
```

### Available Endpoints
Here are the key API endpoints:

#### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - Log in user
- `POST /auth/logout` - Log out user
- `POST /auth/refresh` - Refresh user session
- `POST /auth/send-reset-email` - Send reset password email
- `POST /auth/reset-pwd` - Reset user's password
- `GET /auth/get-oauth-url` - Get OAuth URL
- `POST /auth/confirm-oauth` - Confirm authentication via Google OAuth code

#### Contacts
- `GET /contacts` - Get list of contacts
- `POST /contacts` - Create a new contact
- `GET /contacts/{contactId}` - Get contact by ID
- `PATCH /contacts/{contactId}` - Update contact details
- `DELETE /contacts/{contactId}` - Remove a contact

## Usage
- Use tools like Postman or Swagger UI to test API requests.
- Include the JWT token in requests for protected routes.
- Ensure the database is running before making requests.
