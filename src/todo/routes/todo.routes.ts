import { Router } from 'express';
import { authenticate } from './../../user/middlewares/auth';
import {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
} from '../controllers/todo.controller';
import { validateTodo } from '../validators/todo.validator'
import { validate } from '../../user/middlewares/validate';

const router = Router();

router.post('/create-todo', authenticate, validateTodo, validate, createTodo); 
router.get('/list-todo', authenticate, getTodos);
router.get('/todo/:id', authenticate, getTodoById); 
router.put('/update-todo/:id', authenticate, validateTodo, validate, updateTodo);
router.delete('/delete-todo/:id', authenticate, deleteTodo); 

export default router;
