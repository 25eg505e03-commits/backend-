# 📝 Blog App Backend API

Backend server for a full-stack Blog & Article Publishing Platform built using Node.js, Express.js, and MongoDB. This backend provides REST APIs for authentication, role-based access control, article management, comments, and admin operations.


# ✨ Features
* 🔐 User Authentication & Authorization
* 👤 Role-Based Access Control
  * Admin
  * Author
  * User
* 📝 Create, Edit & Delete Articles
* 💬 Comment System
* 📂 Category-Based Articles
* 🛡️ Protected Routes using JWT
* 📦 MongoDB Database Integration
* 🌐 RESTful API Architecture
* ⚡ Express.js Middleware Support

---

# 🛠️ Tech Stack

| Technology | Usage                 |
| ---------- | --------------------- |
| Node.js    | Runtime Environment   |
| Express.js | Backend Framework     |
| MongoDB    | Database              |
| Mongoose   | ODM                   |
| JWT        | Authentication        |
| bcryptjs   | Password Hashing      |
| dotenv     | Environment Variables |
| cors       | Cross-Origin Requests |

---

# 📁 Project Structure

```bash
backend/
│
├── APIs/
│   ├── AdminAPI.js
│   ├── AuthorAPI.js
│   ├── CommonAPI.js
│   └── UserAPI.js
│
├── models/
│   ├── ArticleModel.js
│   └── UserModel.js
│
├── middlewares/
       |--VerifyToken.js
│
├── config/
      |-cloudinary.js
      |-cloudinaryUpload.js
      |-multer.js
│
├── server.js
├── package.json
├── req.http
└── .env
```

---

# 🚀 Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/25eg505e03-commits/backend-.git
```

## 2️⃣ Move to Project Folder

```bash
cd backend-
```

## 3️⃣ Install Dependencies

```bash
npm install
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory.

```env
DBURL=your_mongodb_connection_string
SECRET_KEY=your_secret_key
PORT=4000
```

---

# ▶️ Run the Server

## Development Mode

```bash
npm run dev
```

## Normal Mode

```bash
node server.js
```

Server will run at:

```bash
http://localhost:4000
```

---

# 📡 API Modules

| API File       | Description                 |
| -------------- | --------------------------- |
| `commonapi.js` | Login & Registration APIs   |
| `userapi.js`   | User operations & comments  |
| `authorapi.js` | Article CRUD operations     |
| `adminapi.js`  | Admin controls & management |

---

# 🗃️ Database Models

## 👤 User Model

```js
{
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  role: String,
  profileImageURL: String,
  isUserActive: Boolean
}
```

---

## 📝 Article Model

```js
{
  title: String,
  category: String,
  content: String,
  author: Object,
  comments: Array,
  isArticleActive: Boolean
}
```

---

# 🔐 Authentication

This project uses:

* JWT Authentication
* Protected Routes
* Password Hashing using bcryptjs

---

# 📦 Important Packages

Install manually if needed:

```bash
npm install express mongoose dotenv cors bcryptjs jsonwebtoken
```

---

# 🧪 API Testing

Use:

```bash
req.http
```

or tools like:

* Postman
* Thunder Client

---

# 🌍 Deployment

Backend can be deployed using:

* Render

---

# 👨‍💻 Author

**Nigama Vydyula**

---
