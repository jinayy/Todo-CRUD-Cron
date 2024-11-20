import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const MONGO_URI = 'mongodb://127.0.0.1:27017/Todos-DB';
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process if connection fails
  }
};

export default connectDB;
