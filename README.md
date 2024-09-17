# Task Management API (Backend NestJS)

## Overview

The **Task Management API** is a backend system built using [NestJS](https://nestjs.com/) that allows users to create, update, and manage tasks within projects. Users can be assigned different roles such as Admin, Project Manager, or Team Member, each with different permissions. The API also supports real-time task updates using WebSockets and email notifications for task assignment and status changes.

## Features

- **User Authentication**: Register, login, and manage user sessions using JWT-based authentication.
- **Role-Based Access Control (RBAC)**: Admins, Project Managers, and Team Members with different access levels.
- **Task Management**: Create, update, delete, and assign tasks to users within projects.
- **Project Management**: Organize tasks into projects for better task categorization.
- **Real-time Notifications**: Get notified of task updates (e.g., status changes) in real-time using WebSockets.
- **Email Notifications**: Receive email notifications when tasks are assigned or updated.
- **Scalable Architecture**: **Neon (PostgreSQL)**
    * **Neon offers a free PostgreSQL database with 10,000 requests** per month, 3 GB of data storage, and free scaling.
    Setup Steps:
        * Sign up for Neon.
        * Create a new PostgreSQL database instance.
        * Get the connection string from Neon, and use it in your .env file (DATABASE_URL).



## Technologies

- **NestJS**: Node.js framework for building efficient, scalable applications.
- **TypeORM**: ORM for database interactions with support for PostgreSQL or MySQL.
- **Passport.js**: Authentication middleware for handling JWT-based auth.
- **WebSockets**: Real-time communication for task updates.
- **Nodemailer**: For sending email notifications.
- **Deployment** for Backend (NestJS API)


### CI/CD Pipeline
This project uses a continuous integration and continuous deployment (CI/CD) pipeline to ensure code quality, test coverage, and seamless deployments.

#### Pipeline Overview
1. GitHub Actions:
    * Triggers on every push or pull request to the main branch.
    * Runs the following checks:
    * Linting: Ensures code consistency with ESLint.
    * Unit Tests: Runs unit tests and uploads coverage reports to
 CodeCov.
 
**2. SonarCloud:** 
   * Analyzes code for potential bugs, vulnerabilities,     * and maintainability issues.
   *  Build & Deploy: Builds the application and deploys it to the production environment.

**3. SonarCloud:**
   * Integrates with GitHub Actions to perform static code analysis.
   * Enforces quality gates to ensure high code quality.
   * Scans for bugs, security vulnerabilities, and code smells.

4. CodeCov:
    * Measures and tracks test coverage.
    * Reports coverage results directly in pull requests to ensure sufficient code coverage.
    * A badge is included in the README to display current coverage status.

5. Neon PostgreSQL:
    * Free-tier PostgreSQL database used for production.
    * Migrations are automatically applied after deployment.



## Prerequisites

To run this project locally, ensure you have the following installed:

- Node.js (v16+)
- PostgreSQL or MySQL database
- Yarn or npm (Yarn is preferred)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/task-management-api.git
cd task-management-api
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Set Up Environment Variables
Create a .env (see .env.example) file in the project root and add the following variables:

```bash
# Database configuration
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=your_db_user
DATABASE_PASSWORD=your_db_password
DATABASE_NAME=task_management_db

# JWT Secret
JWT_SECRET=your_secret_key

# Email configuration (for Nodemailer)
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASSWORD=your_email_password

# WebSocket settings
WEBSOCKET_PORT=3001
```

### 4. Set Up the Database
Ensure that you have PostgreSQL or MySQL running, then run migrations to set up the database schema:
```bash
yarn typeorm migration:run
```

### 5. Start the Server
```bash
yarn start:dev
```

### 6. Build documentationn
```bash
yarn run docs
```

### 6. Build documentationn
```bash
yarn serve-docs
```

### API Documentation
You can explore the API documentation by visiting `http://localhost:3000/api` after starting the server. The documentation is **auto-generated using Swagger**.

##### Key Endpoints
* Authentication
    * POST /auth/signup: Register a new user
    * POST /auth/login: Authenticate and obtain a JWT token
* Users
    * GET /users: Get all users (Admin access required)
    * GET /users/:id: Get a user by ID
    * PATCH /users/:id: Update user information (Admin/Project Manager)
* Projects
    * GET /projects: Get all projects
    * POST /projects: Create a new project (Admin/Project Manager)
    * PATCH /projects/:id: Update project details (Admin/Project Manager)
* Tasks
    * GET /tasks: Get all tasks for the current user
    * POST /tasks: Create a new task (Admin/Project Manager)
    * PATCH /tasks/:id: Update task status, assignment, etc. (Admin/Project Manager)

* WebSockets
* Real-time updates are pushed to subscribed users when task statuses change or new tasks are assigned.

##### Tests
To run tests, execute:

```bash

yarn test
```

#### Future Improvements
* File Attachments: Support file uploads and attachments to tasks.
* Analytics Dashboard: Provide project managers with a dashboard to track task completion rates, project statuses, etc.
* Push Notifications: Add support for mobile push notifications.

#### Contributing
Contributions are welcome! Please follow these steps:

* Fork the repository.
* Create a new feature branch (git checkout -b feature/your-feature).
* Commit your changes (git commit -m 'Add some feature').
* Push to the branch (git push origin feature/your-feature).
* Open a pull request.

* License

* This project is licensed under the MIT License - see the LICENSE file for details.

#### Contact
For any questions, feel free to contact the project maintainer at your_email@example.com.