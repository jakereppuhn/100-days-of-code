import { Router } from 'express';
import { AccountController } from '../controllers/accountController';

const router = Router();

router.post('/', AccountController.createAccount);

router.get('/', AccountController.getAccounts);

export default router;
