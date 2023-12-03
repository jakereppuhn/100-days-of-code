import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export class UserController {
	static async createUser(req: Request, res: Response) {
		try {
			const user = await UserService.createUser(req.body);

			res.status(201).json({ user });
		} catch (error: unknown) {
			if (error instanceof Error) {
				res.status(400).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unexpected error occurred' });
			}
		}
	}

	static async getUsers(req: Request, res: Response) {
		try {
			const users = await UserService.getUsers();

			res.status(200).json(users);
		} catch (error: unknown) {
			if (error instanceof Error) {
				res.status(400).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unexpected error occurred' });
			}
		}
	}

	static async getUserById(req: Request, res: Response) {
		try {
			const user = await UserService.getUserById(req.params.id);

			res.status(200).json(user);
		} catch (error: unknown) {
			if (error instanceof Error) {
				res.status(400).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unexpected error occurred' });
			}
		}
	}

	static async deleteUser(req: Request, res: Response) {
		try {
			const user = await UserService.deleteUser(req.params.id);

			res.status(200).json(user);
		} catch (error: unknown) {
			if (error instanceof Error) {
				res.status(400).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unexpected error occurred' });
			}
		}
	}
}
