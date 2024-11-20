import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import User from '../models/User';

export const userSignup = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  try {

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'Email is already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    console.log(hashedPassword);
    const newUser = new User({ email, password: hashedPassword });
    
    const savedUser = await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: savedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error in creating user', error });
  }
};

export const userLogin = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Error in Login', error });
  }
};

// Get All Users (for listing users)
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: 'Error in fetching users', error });
  }
};
