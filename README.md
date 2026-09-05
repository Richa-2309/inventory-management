# 📚 Book Buy & Sell - Inventory Management System

A simple **Book Inventory Management System** built using **JavaScript, Node.js, Express.js, and EJS**.

This application allows users to manage books available for **buying and selling**, including adding books, viewing inventory, updating book details, and deleting books.

## 🚀 Features

* 📖 View all available books
* ➕ Add new books to inventory
* ✏️ Update book details
* 🗑️ Delete books from inventory
* 💰 Manage book price
* 📦 Manage available stock
* 🔍 View book details
* 🖥️ Server-side rendering using EJS
* 📱 Responsive UI using Bootstrap

## 🛠️ Technologies Used

* **JavaScript**
* **Node.js**
* **Express.js**
* **EJS**
* **Bootstrap**
* **HTML5**
* **CSS3**

## 📁 Project Structure

```text
BOOK-INVENTORY/
│
├── src/
│   ├── controllers/
│   │   └── product_controller.js
│   │
│   ├── models/
│   │   └── product_model.js
│   │
│   └── views/
│       ├── layout.ejs
│       ├── product.ejs
│       └── products.ejs
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project

```bash
cd BOOK-INVENTORY
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

```bash
node index.js
```

Or, if you have a start script configured:

```bash
npm start
```

The application will run on:

```text
http://localhost:3000
```

## 📚 Book Data

Each book contains information such as:

| Field         | Description        |
| ------------- | ------------------ |
| `id`          | Unique book ID     |
| `name`        | Book name          |
| `price`       | Book selling price |
| `description` | Book description   |
| `image`       | Book image         |
| `category`    | Book category      |

## 🔗 Application Routes

| Method | Route                  | Description          |
| ------ | ---------------------- | -------------------- |
| GET    | `/`                    | Home page            |
| GET    | `/products`            | Display all books    |
| GET    | `/products/:id`        | Display book details |
| GET    | `/products/add`        | Add a new book       |
| POST   | `/products`            | Save a new book      |
| GET    | `/products/:id/edit`   | Edit book details    |
| POST   | `/products/:id`        | Update book          |
| POST   | `/products/:id/delete` | Delete book          |

## 🧩 MVC Architecture

The project follows the **MVC (Model-View-Controller)** architecture.

### Model

The Model manages book data and inventory-related operations.

```text
src/models/product_model.js
```

### View

EJS templates are responsible for displaying the UI.

```text
src/views/
```

### Controller

Controllers handle requests and responses between the Model and View.

```text
src/controllers/product_controller.js
```

## 🖥️ Example Book

```javascript
{
    id: 1,
    name: "The Alchemist",
    price: 399,
    description: "A novel by Paulo Coelho",
    image: "alchemist.jpg",
    category: "Fiction"
}
```

## 🔄 Application Flow

```text
User
  ↓
Browser
  ↓
Express.js Route
  ↓
Controller
  ↓
Model
  ↓
Book Inventory
  ↓
EJS View
  ↓
Browser
```

## 💡 Future Improvements

The project can be extended with:

* 🔐 User authentication
* 🛒 Shopping cart
* 💳 Online payment
* 🗄️ MongoDB/MySQL database
* 📦 Order management
* 👤 User profile
* 🔎 Book search and filtering
* 📊 Admin dashboard
* 📈 Sales reports
* ⭐ Book reviews and ratings

## 👩‍💻 Author

**Richa Kumari**

Built using **JavaScript + Node.js + Express.js + EJS**.

## 📄 License

This project is created for learning and development purposes.
