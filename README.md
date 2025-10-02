# Quiz Web App

---

## Overview
This project is a **Quiz Web Application** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It allows users to take quizzes and receive scores for different categories.  

The application consists of two main parts:  
1. **Frontend** – built with React.js for a responsive and interactive UI.  
2. **Backend** – built with Node.js and Express.js to handle API requests and MongoDB for data storage.  

---

## Features

### User Features
- Select quiz categories (e.g., Science, Math, Technology, etc.).  
- Take quizzes with multiple-choice questions.  
- Receive immediate score feedback after completing a quiz.  

### Admin Features
- Add, update, or delete questions.  
- Manage quiz categories.  
- View all submitted scores.  
- Easy-to-use admin dashboard for content management.  

### Technical Features
- RESTful API design for frontend-backend communication.  
- MongoDB used to store questions, categories, users, and scores.  
- Dynamic quiz generation based on selected categories.  
- Real-time score updates after quiz completion.  
- Responsive UI for both desktop and mobile devices.  

---

## Tech Stack

| Layer        | Technology |
| ------------ | ---------- |
| Frontend     | React.js, Tailwind CSS, React Router, Axios |
| Backend      | Node.js, Express.js |
| Database     | MongoDB (Atlas or local) |
| State Mgmt   | React useState, Context API (optional) |
| HTTP Client  | Axios |
| Others       | React Icons, dotenv for environment variables |

---
```
## File Structure

quiz-app/
├── frontend/           # React app
│   ├── src/
│   │   ├── ADMIN/   # Reusable components (buttons, cards, forms)
│   │   ├── pages/        # Main pages (Home, Quiz, Admin)
│   │   ├── assets/      # React Context API for global state (optional)
│   │   ├── main.jsx/          # Axios API calls
│   │   └── App.jsx
│   └── package.json
│   └── .env              # Environment variables

├── backend/            # Express server
│   ├── models/          # MongoDB schemas for questions, users, scores
│   ├── routes/          # API routes for quizzes, users, admin
│   ├── controllers/     # Logic for handling requests
│   ├── config/          # DB connection and environment variables
│   |── server.js
|   └── .env              # Environment variables
├── README.md
              

```
---

## API Endpoints

### Quiz Endpoints
- `GET /api/quiz/categories` – Fetch all available categories  
- `GET /api/quiz/questions/:category` – Fetch questions for a specific category  
- `POST /api/quiz/score` – Submit user score  

### Admin Endpoints
- `POST /api/admin/question` – Add a new question  
- `PUT /api/admin/question/:id` – Update an existing question  
- `DELETE /api/admin/question/:id` – Delete a question  
- `GET /api/admin/scores` – Get all user scores  

---

## Setup Instructions
Install dependencies:

### Backend
1. Navigate to the backend folder:
bash

       cd backend
       npm install

Create a .env file with your MongoDB URI:

    MONGO_URI=your_mongodb_connection_string
    PORT=5000

Start the backend server:
 
    npm start

The server will run on http://localhost:5000 (or your configured port).

Frontend

Navigate to the frontend folder:

    cd frontend

Install dependencies:

  npm install

Create a .env file (if needed) with API URL:

    VITE_API_URL=http://localhost:5000

Start the React app:

    npm run dev -- --host 0.0.0.0

You can now open the app on your browser or local network.
