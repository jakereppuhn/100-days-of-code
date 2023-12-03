import { Router } from 'express';
import { AccountController } from '../controllers/accountController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.post('/', protect, AccountController.createAccount);

router.get('/', protect, AccountController.getAccounts);

router.get('/:id', protect, AccountController.getAccountById);

router.patch('/:id', protect, AccountController.updateAccount);

router.delete('/:id', protect, AccountController.deleteAccount);

router.get('/:id/owner', protect, AccountController.getAccountOwner);

export default router;
