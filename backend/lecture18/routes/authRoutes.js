import {Router} from 'express';
import AuthController from '../controllers/authController.j'; 
import { auththinticate } from '../middlewares/auth.js';

const router = Router();

router.post('/register',AuthController.register);
router.post('/login',AuthController.login);
router.post('/change-password',AuthController.changePassword);
// router.post('get-current-user',auththinticate,AuthController.getCurrentUser);
export default router;
//-