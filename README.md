# TaskFlow – Role-Based Task Management System

TaskFlow is a full-stack web application built using React, Node.js, Express, and PostgreSQL.  
It demonstrates secure login functionality with role-based dashboards.


## Features

- User login with email and password
- Passwords stored securely using bcrypt
- Role-based access (Admin, Manager, User)
- Separate dashboard for each role
- PostgreSQL database integration
- Login and Logout functionality



## Tech Stack

Frontend:
- React
- JavaScript

Backend:
- Node.js
- Express.js

Database:
- PostgreSQL


## User Roles

| Role | Dashboard |
|----|----|
| Admin | Admin Dashboard |
| Manager | Manager Dashboard |
| User | User Dashboard |

---

## Test Login Credentials

Admin:
- Email: admin@test.com
- Password: admin123

Manager:
- Email: manager@test.com
- Password: manager123

User:
- Email: user@test.com
- Password: user123

---

## How to Run the Project

### Backend

```bash
cd backend
npm install
npm run dev
