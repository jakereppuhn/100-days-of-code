import { Router } from 'express';
import { AccountController } from '../controllers/accountController';

const router = Router();

router.post('/', AccountController.createAccount);

router.get('/', AccountController.getAccounts);

router.get('/:id', AccountController.getAccountById);

router.patch('/:id', AccountController.updateAccount);

router.delete('/:id', AccountController.deleteAccount);

export default router;
