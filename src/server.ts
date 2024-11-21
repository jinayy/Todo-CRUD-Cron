import app from './app';
import connectDB from './database';
import dotenv from 'dotenv';
import { expiredTodosCron } from './cron/todo.cron';
dotenv.config();
const PORT = 3000;

connectDB();
expiredTodosCron();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
