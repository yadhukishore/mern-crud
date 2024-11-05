# MERN CRUD Application

A full-stack CRUD (Create, Read, Update, Delete) application built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Overview

This project is structured with a backend API built with Node.js and Express, and a frontend client application built with React and Vite. It demonstrates basic CRUD operations with a modern tech stack and MVC architecture.

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS for cross-origin requests
- dotenv for environment variables
- nodemon for development

### Frontend
- React 18
- Vite
- React Router DOM for routing
- Axios for API requests
- TailwindCSS for styling
- SweetAlert2 for notifications
- Lucide React for icons

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/yadhukishore/mern-crud.git
```

2. **Install backend dependencies**
```bash
# From the root directory
npm install
```

3. **Install frontend dependencies**
```bash
# Navigate to the client directory
cd client
npm install
```

4. **Environment Setup**
Create a `.env` file in the root directory and add your environment variables:
```env
MONGO_URI= your_mongodb_connection_string
PORT=3000
```

## Running the Application

1. **Start the backend server**
```bash
# From the root directory
npm run dev
```
This will start the backend server using nodemon for development.

2. **Start the frontend development server**
```bash
# In a new terminal, navigate to the client directory
cd client
npm run dev
```
This will start the Vite development server for the React application.

## Available Scripts

### Backend
- `npm run dev`: Starts the server with nodemon for development
- `npm start`: Starts the server in production mode

### Frontend
- `npm run dev`: Starts the development server
- `npm run build`: Builds the app for production
- `npm run lint`: Runs ESLint for code quality
- `npm run preview`: Previews the production build locally

## Project Structure

```
project-root/
├── api/
│   └── index.js
├── client/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── package.json
└── README.md
```

