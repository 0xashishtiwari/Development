
A basic Express.js web application connected to a MySQL database. The application displays the number of users and lists user details fetched from the database.

## 📁 Project Structure

```
.
├── public/          # Static files (CSS, JS, images, etc.)
├── views/           # EJS templates
│   ├── home.ejs
│   └── user.ejs
├── index.js         # Main server file
└── README.md
```

## 🚀 Features

* Connects to a MySQL database
* Displays total number of users on the homepage
* Lists user details (`id`, `username`, `email`) on a separate page
* Uses EJS for templating
* Serves static files from the `public` directory

## 📦 Prerequisites

Ensure you have the following installed:

* [Node.js](https://nodejs.org/)
* [MySQL](https://www.mysql.com/)

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/delta-app.git
cd delta-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure your MySQL database

Make sure you have a database named `delta_app` and a table `user` with the following structure:

```sql
CREATE DATABASE delta_app;

USE delta_app;

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    email VARCHAR(100)
);

-- Optional: Add sample data
INSERT INTO user (username, email) VALUES
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com');
```

> **Important:** Replace the database credentials in `index.js` if they differ:

```js
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'delta_app',
    password : 'xxxxxxx' // Update this as per your MySQL password
});
```

### 4. Run the server

```bash
node index.js
```

Visit `http://localhost:8080` in your browser.

## 🛠 Endpoints

* `/` → Home page showing total user count
* `/user` → List of all users

## 🧩 Technologies Used

* Node.js
* Express.js
* MySQL2
* EJS (Embedded JavaScript Templates)

## 📝 License

This project is licensed under the MIT License.

---


