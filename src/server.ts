import app from './app';
import connectDB from './database';
import dotenv from 'dotenv';
dotenv.config();
const PORT = 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
