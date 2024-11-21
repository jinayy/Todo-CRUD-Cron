import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
const connectDB = async (): Promise<void> => {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is not there in .env file");
    }

    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process if connection fails
  }
};

export default connectDB;
