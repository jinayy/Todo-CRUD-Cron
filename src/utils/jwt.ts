import jwt from 'jsonwebtoken';
import { CustomJwtPayload } from './custome-payload-interface';

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

export const generateToken = (payload: object, expiresIn: string = '1d'): string => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

export const verifyToken = (token: string): CustomJwtPayload | null => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    if (typeof decoded === 'object' && decoded !== null) {
      return decoded as CustomJwtPayload;
    }

    return null;
  } catch (err) {
    return null;
  }
};
