# 💰 Expense Tracker

A full-stack web application to manage personal finances by tracking income and expenses, with insightful visual analytics and secure authentication.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Designs](#-designs)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation and Setup](#-installation-and-setup)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## 📌 Overview

Expense Tracker is designed to help users monitor their income and expenses easily, categorize transactions, and gain insights through visual dashboards.

---

## 🎨 Designs

- 🖼️ **UI/UX Design (Figma)**:  
  [Expenses Tracker - Figma Design](https://www.figma.com/design/LEaRlQ6zRdHUQnUQpvlFiP/Expenses-Tracker-UI-UX?node-id=0-1&t=Eg4JGa9ZJVjfPCcF-1)

- 🧠 **System & Database Design (Excalidraw)**:  
  [System Design & Database Diagram](https://excalidraw.com/#room=39fdb781dc1f5e75fd8b,IL9WjrnF-OlpRPaMJC5k1w)

---

## 🚀 Features

- 🔐 User Authentication (JWT-based)
- ➕ Add/Edit/Delete income and expense transactions
- 📁 Transaction categorization
- 📈 Visual analytics and summaries
- 📅 Date-based filtering
- 📱 Responsive layout

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Next.js (Turbopack)
- Tailwind CSS or Material UI
- Chart.js or Recharts

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- bcrypt for password hashing
- dotenv for environment configs

---

## ⚙️ Installation and Setup

### Prerequisites

- Node.js
- MongoDB (Local or Cloud)
- Git

### 1. Clone the repository

```bash
git clone git@github.com:mo-elgazar74/Expense-Tracker.git
cd Expense-Tracker
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` folder and add:

```env
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend:

```bash
npm start
```

### 3. Frontend Setup

```bash
cd ../Frontend/expenses-tracker
npm install
npm run dev
```

Visit the app at: `http://localhost:3000`

---

## 🧪 Usage

1. Register with a valid email and password.
2. Log in to your account.
3. Add your income and expense transactions.
4. Categorize each transaction.
5. View the dashboard for real-time charts and summaries.
6. Manage your financial records as needed.

---

## 🤝 Contributing

Contributions are welcome and appreciated!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add some feature"`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more details.

---

## 🙏 Acknowledgments

- Special thanks to the open-source community.
- UI inspired and designed using [Figma](https://figma.com)
- System architecture planned with [Excalidraw](https://excalidraw.com)
