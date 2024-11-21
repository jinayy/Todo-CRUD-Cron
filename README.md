Todo App with CRUD, Authentication, and Cron Jobs

This project creates a Todo List REST API using Node.js, ExpressJS, Mongoose, MongoDB, and TypeScript. The API should allow users to perform CRUD operations on todo items, and it should also implement a CRON job to update the status of expired todo items automatically.

Project setup:

1) Clone the Repository :
git clone https://github.com/your-repository/todo-app.git
cd todo-app

2) Install dependencies :
npm install

3) Create a .env file in the root directory and add the following variables:
PORT=3000
MONGO_URI=mongodb://localhost:27017/todo-app  (Replace MONGO_URI with your MongoDB connection string.)
JWT_SECRET=your_jwt_secret  (Replace JWT_SECRET with a your secret code for JWT.)

4) Start the Server : npm run dev

Instructions: I have used an older version of mongoose (v5.13), as my MongoDB server is of an old version.
