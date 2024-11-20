import { Router } from 'express';
import { userSignup, userLogin, getUsers } from '../controllers/user.controller';
import { signupValidation, loginValidation } from '../validators/user.validator';
import { validate } from '../middlewares/validate';

const router = Router();

router.post('/signup', signupValidation, validate, userSignup);
router.post('/login', loginValidation, validate, userLogin); 
router.get('/users', getUsers);
export default router;
