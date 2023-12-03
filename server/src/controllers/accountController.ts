import { Request, Response } from 'express';
import { AccountService } from '../services/accountService';

export class AccountController {
	static async createAccount(req: Request, res: Response) {
		try {
			const account = await AccountService.createAccount(req.body);

			res.status(201).json({ account });
		} catch (error: unknown) {
			if (error instanceof Error) {
				res.status(400).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unexpected error occurred' });
			}
		}
	}
}
