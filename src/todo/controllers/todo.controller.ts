import { Request, Response } from 'express';
import Todo from '../models/Todo';

export const createTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, dueDate, completed } = req.body;

    const todo = await Todo.create({
      title,
      description,
      dueDate,
      completed,
      user: (req as any).user.id, // Ensure the user is attached
    });

    res.status(201).json({ message: 'Todo created successfully', todo });
  } catch (error: any) {
    res.status(500).json({ message: 'Error creating Todo', error: error.message });
  }
};

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos = await Todo.find({ user: (req as any).user.id });
    res.status(200).json({ todos });
  } catch (error: any) {
    res.status(500).json({ message: 'Error fetching Todos', error: error.message });
  }
};

export const getTodoById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const todo = await Todo.findOne({ _id: id, user: (req as any).user.id });
    if (!todo) {
      res.status(404).json({ message: 'Todo not found' });
      return;
    }

    res.status(200).json({ todo });
  } catch (error: any) {
    res.status(500).json({ message: 'Error fetching Todo', error: error.message });
  }
};


export const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description, dueDate, completed } = req.body;

    const todo = await Todo.findOneAndUpdate(
      { _id: id, user: (req as any).user.id },
      { title, description, dueDate, completed },
      { new: true, runValidators: true }
    );

    if (!todo) {
      res.status(404).json({ message: 'Todo not found' });
      return;
    }

    res.status(200).json({ message: 'Todo updated successfully', todo });
  } catch (error: any) {
    res.status(500).json({ message: 'Error updating Todo', error: error.message });
  }
};

export const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const todo = await Todo.findOneAndDelete({ _id: id, user: (req as any).user.id });
    if (!todo) {
      res.status(404).json({ message: 'Todo not found' });
      return;
    }

    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: 'Error deleting Todo', error: error.message });
  }
};

