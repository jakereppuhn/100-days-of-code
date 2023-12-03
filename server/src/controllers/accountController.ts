import { Request, Response } from 'express';
import { AccountService } from '../services/accountService';
import { IAccountQueryParams } from '../shared/interfaces';

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

	static async getAccounts(req: Request, res: Response) {
		try {
			const { filter, sort, page, pageSize, fields } = req.query;

			const pageNumber = page ? parseInt(page as string) : undefined;
			const pageSizeNumber = pageSize ? parseInt(pageSize as string) : undefined;

			const fieldsArray = typeof fields === 'string' ? fields.split(',') : fields;

			const params: IAccountQueryParams = {
				filter: filter ? JSON.parse(filter as string) : undefined,
				sort: sort as string | undefined,
				page: pageNumber,
				pageSize: pageSizeNumber,
				fields: fieldsArray as string[] | undefined,
			};

			const accounts = await AccountService.getAccounts(params);

			res.status(200).json(accounts);
		} catch (error: unknown) {
			if (error instanceof Error) {
				res.status(400).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unexpected error occurred' });
			}
		}
	}

	static async getAccountById(req: Request, res: Response) {
		try {
			const { id } = req.params;

			const account = await AccountService.getAccountById(id);

			res.status(200).json(account);
		} catch (error: unknown) {
			if (error instanceof Error) {
				res.status(400).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unexpected error occurred' });
			}
		}
	}

	static async updateAccount(req: Request, res: Response) {
		try {
			const { id } = req.params;

			const account = await AccountService.updateAccount(id, req.body);

			res.status(200).json({ account });
		} catch (error: unknown) {
			if (error instanceof Error) {
				res.status(400).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unexpected error occurred' });
			}
		}
	}

	static async deleteAccount(req: Request, res: Response) {
		try {
			const { id } = req.params;

			await AccountService.deleteAccount(id);

			res.status(204).json({});
		} catch (error: unknown) {
			if (error instanceof Error) {
				res.status(400).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unexpected error occurred' });
			}
		}
	}
}
