import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.post('/', protect, UserController.createUser);

router.get('/', protect, UserController.getUsers);

router.get('/:id', protect, UserController.getUserById);

router.delete('/:id', protect, UserController.deleteUser);

router.post('/authenticate', UserController.authenticateUser);

router.post('/logout', UserController.logoutUser);

export default router;
