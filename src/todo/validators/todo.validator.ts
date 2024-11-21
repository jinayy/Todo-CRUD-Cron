import { body } from 'express-validator';

export const validateTodo = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('dueDate').isISO8601().withMessage('Invalid date format'),
  body('completed').optional().isBoolean().withMessage('Completed must be a boolean'),
];
