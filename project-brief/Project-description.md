<h2 style="color:white; background-color:#8514f5; padding:8px; align-content:right">
Task Management API

</h2>

## 1. Task Management API

* **Description**: Build a task management system where users can create, update, and delete tasks. Tasks should be organized by projects, and users should have roles such as admin, project manager, and team members.
* **Features:**
    * User authentication with roles (admin, user, etc.)
    * Task creation, assignment, and status updates (e.g., pending, in progress, completed)
    * Project management and task association
    * Notifications (email or in-app) when tasks are updated or assigned
    * Role-based access control
* Technologies:

    * NestJS with Passport.js for authentication
    * TypeORM with PostgreSQL or MySQL
    * WebSockets for real-time task updates
    * Email notifications (using Nodemailer)


## Debrief.

The Task Management API is a backend system where 
* **users** can create, update, and manage tasks. 
* **Tasks** will be associated with **projects**, and 
* users can be assigned different **roles** (like admin, project manager, or team member). 

The API will handle everything from **authentication** to **task tracking** and **status updates**, making it easy to manage work across multiple projects. 

## 2. Core Features
#### 1. User Authentication with Roles

* Roles: Users will have specific roles such as admin, project manager, or team members. These roles will define what actions they can take.
* Authentication: Use JWT (JSON Web Tokens) with Passport.js to handle user authentication and authorization based on their roles.

#### 2. Task Management (CRUD Operations)

* Users should be able to create, update, and delete tasks.
* Tasks will have statuses (like pending, in progress, completed), deadlines, descriptions, and the ability to assign them to other users.
* Tasks will be associated with specific projects, so you will need a relationship between tasks and projects in your database.

#### 3. Project Management

* Projects are containers for tasks. Users can create projects and assign tasks to those projects.
* Each project will have multiple tasks, and each task will be assigned to a specific user or multiple users.

#### 4. Notifications (Email/In-App)

* When tasks are updated, assigned, or completed, notifications should be sent to the relevant users.
* You can use Nodemailer for sending email notifications or implement in-app notifications (e.g., using WebSockets for real-time updates).

#### 5. Role-based Access Control (RBAC)

* Different users will have different levels of access:
    * Admins: Full access to manage users, projects, and tasks.
    * Project Managers: Can manage projects and assign tasks.
    * Team Members: Can view and update their assigned tasks.
* Access control can be implemented using Guards in NestJS that verify the user’s role.

#### 6.Real-time Task Updates (WebSockets)

**For a better user experience, provide real-time updates for tasks using WebSockets**. For instance, when a task's status changes, all relevant users should get real-time updates without needing to refresh the page.

#### 3. Technologies
1. NestJS: The backend framework for building scalable server-side applications.
    * Modular and allows easy integration of authentication, authorization, and database management.
2. Passport.js: For managing authentication strategies like JWT.
    * JWT (JSON Web Tokens) will be used for user authentication. Users will get tokens when they log in, which will be required for all protected routes.
3. TypeORM with PostgreSQL/MySQL: For handling database operations.
    * TypeORM will handle data persistence, migrations, and relations between entities like User, Project, and Task.
    * PostgreSQL or MySQL will serve as the relational database for storing tasks, projects, and users.
4. WebSockets: To provide real-time notifications for task updates.
    * NestJS provides easy support for WebSocket communication using the @nestjs/websockets package.
5. Nodemailer: For sending email notifications when tasks are assigned, updated, or completed.

#### Project Structure (High-level)

```sh
src
├── auth
│   ├── auth.controller.ts    # Login, signup, JWT token creation
│   ├── auth.service.ts       # Business logic for authentication
│   └── auth.module.ts
├── tasks
│   ├── tasks.controller.ts   # API endpoints for tasks (CRUD operations)
│   ├── tasks.service.ts      # Business logic for task management
│   ├── tasks.entity.ts       # Task entity for database
│   └── tasks.module.ts
├── projects
│   ├── projects.controller.ts # API endpoints for projects
│   ├── projects.service.ts    # Business logic for projects
│   ├── projects.entity.ts     # Project entity for database
│   └── projects.module.ts
├── notifications
│   ├── notifications.service.ts # Logic for sending emails or in-app notifications
├── users
│   ├── users.controller.ts    # Managing users (view profiles, update roles)
│   ├── users.service.ts       # Business logic for user management
│   ├── users.entity.ts        # User entity for database
│   └── users.module.ts

```

#### Project Structure (High-level)


#### Database Structure
##### User Entity:
* id
* firtName
* Lastname
* email (unique)
* password (hashed)
* created_at
* updated_at
* role (admin, project manager, team member)

#### Project Entity:
* id
* name
* description
* created_at
* updated_at


#### Task Entity:
* id
* title
* description
* status (pending, in progress, completed)
* due_date
* assigned_to (relation to User)
* project_id (relation to Project)
* created_at
* updated_at


##### Next Steps
* Set up NestJS and the core structure (install NestJS, TypeORM, and Passport.js for authentication).
* Create database models (User, Project, Task).
* Implement authentication and authorization (JWT with Passport.js).
* Build CRUD operations for projects and tasks.
* Set up WebSockets for real-time task updates.
* Add email notifications for task assignment and status changes.

By building this application, you'll cover a wide range of NestJS functionalities, making it a great project to sharpen your skills!
