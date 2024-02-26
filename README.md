# User Authentication System with Node.js, Express, EJS, JWT, and MySQL

## Overview
This project aims to develop a robust and scalable user authentication system utilizing Node.js, Express, EJS (Embedded JavaScript templates), JSON Web Tokens (JWT), and MySQL database. The system facilitates user registration, login, and secure authentication processes.

## Key Features:

- **User Registration:** Users can create accounts by providing essential information like username, email, and password. Passwords undergo secure hashing before storage in the database to ensure confidentiality.

- **User Login:** Registered users can log in to their accounts using their credentials. Upon successful authentication, users receive a JWT token enabling access to protected routes and resources.

- **JWT Token Generation:** Upon successful authentication, the server generates a JWT token containing user-specific information and a secret key. This token is transmitted to the client and must be included in subsequent requests for authentication.

- **Protected Routes:** Certain routes and resources within the application are protected and accessible only to authenticated users. Middleware functions verify JWT tokens and grant access to authorized users.

- **Session Management:** The system securely and efficiently manages user sessions using JWT tokens, which include expiration times to mitigate security risks associated with long-lived tokens.

- **Error Handling:** Robust error handling mechanisms are implemented to manage various scenarios, including invalid credentials, expired tokens, database errors, and server-side exceptions.

- **User Profile Management:** Authenticated users can manage their profiles, update personal information, and securely change passwords.

- **Database Integration:** The application integrates with a MySQL database to store user accounts, authentication tokens, and relevant information, utilizing SQL queries for database interactions.

## Project Structure:

- **index.js:** Entry point of the application. Configures Express middleware, routes, and server settings.

- **routes:** Contains route handlers for different endpoints such as user authentication, registration, profile management, etc.

- **controllers:** Implements the business logic for various functionalities such as user authentication, registration, etc.

- **views:** Contains EJS templates for rendering dynamic HTML content.

- **public:** Static assets such as CSS, JavaScript, and images.

- **middlewares:** Custom middleware functions for handling authentication, error handling, etc.

- **.env (you should include):** Configuration file for setting up environment variables, database connection, JWT secret key, etc.

## Dependencies:

- **Express.js:** Web framework for Node.js

- **EJS:** Templating engine for generating dynamic HTML content

- **JSON Web Token (jsonwebtoken):** Library for generating and verifying JWT tokens

- **MySQL:** Database management system for storing user data securely

- **bcryptjs:** Library for hashing passwords securely

- **Sequelize (Optional):** ORM library for interacting with MySQL database

## Joel Dejene, January, 2024.
