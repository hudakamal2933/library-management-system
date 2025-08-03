# library-management-system
A full-stack Library Management System built with MongoDB, Express.js, Angular, and Node.js (MEAN stack). Features include book and user management, borrow/return tracking, a real-time dashboard with charts, and contact form handling. Designed for efficiency, scalability, and real-time data visualization.
Here's a complete `README.md` for your Library Management System GitHub repository:

---

```markdown
# 📚 Library Management System

A full-stack Library Management System built using the MEAN stack (MongoDB, Express.js, Angular, and Node.js). This application is designed to manage books, users, borrow/return operations, and user contact forms efficiently, while offering a responsive and dynamic dashboard with real-time data visualization.

## 🚀 Features

- 📖 Book Management (Add, Update, Delete, View)
- 👤 User Management
- 🔄 Borrow and Return Tracking
- 📊 Real-Time Dashboard with:
  - Statistic Cards (Live MongoDB Data)
  - Pie, Bar, and Line Charts
- 📩 Contact Form Handling
- 🔐 Secure RESTful APIs
- 💡 Responsive Angular Frontend

## 🛠️ Tech Stack

- **Frontend:** Angular
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Charts:** ng2-charts / Chart.js

## 📁 Folder Structure

```

/backend
├── models/
├── routes/
└── server.js

/frontend
├── src/
│   ├── app/
│   │   ├── components/
│   │   └── services/

````

## 🧰 Installation

### Backend Setup

```bash
cd backend
npm install
npm start
````

### Frontend Setup

```bash
cd frontend
npm install
ng serve
```

Make sure MongoDB is running locally or configure your MongoDB URI in `.env`.

## 📷 Screenshots

> *Include dashboard screenshots, book list view, and contact form here*

## 📌 Usage

* Add and manage books and users
* Track book borrow/return activity
* View statistics on the dashboard
* Handle contact messages from users
# 📄 API Endpoints

| Method | Endpoint        | Description         |
| ------ | --------------- | ------------------- |
| GET    | /api/books      | Get all books       |
| POST   | /api/books      | Add new book        |
| PUT    | /api/books/\:id | Update book         |
| DELETE | /api/books/\:id | Delete book         |
| GET    | /api/dashboard  | Get dashboard stats |
| POST   | /api/contact    | Submit contact form |

## 👨‍💻 Author

Developed by \[huda kamal]
BSc Computer Science, 8th Semester
Backend & Dashboard Developer


