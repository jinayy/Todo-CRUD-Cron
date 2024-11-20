import { Request, Response, NextFunction } from 'express';
import { verifyToken } from './../../utils/jwt'

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Access denied, no token provided' });
    return;
  }

  const payload = verifyToken(token);
  if (!payload) {
    res.status(401).json({ message: 'Invalid or expired token' });
    return;
  }

  (req as any).user = payload;
  console.log(payload);
  next();
};
