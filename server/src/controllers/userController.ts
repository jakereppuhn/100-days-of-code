import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { ExtendedRequest } from '../middleware/authMiddleware';

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

	static async authenticateUser(req: Request, res: Response) {
		try {
			const { email, password } = req.body;

			const authResponse = await UserService.authenticateUser(email, password);

			res.cookie('jwt', authResponse.accessToken, {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				maxAge: 24 * 60 * 60 * 1000,
				sameSite: 'strict',
			});

			res.status(200).json({ message: 'Authentication successful' });
		} catch (error) {
			if (error instanceof Error) {
				res.status(400).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unexpected error occurred' });
			}
		}
	}

	public static async logoutUser(req: Request, res: Response) {
		try {
			res.cookie('jwt', '', {
				httpOnly: true,
				expires: new Date(0),
				secure: process.env.NODE_ENV === 'production',
				sameSite: 'strict',
			});

			res.status(200).json({ message: 'Logout successful' });
		} catch (error) {
			res.status(500).json({ message: 'An unexpected error occurred during logout' });
		}
	}

	public static async validateSession(req: ExtendedRequest, res: Response) {
		if (req.user) {
			const userWithoutPassword = { ...req.user.get({ plain: true }) };
			delete userWithoutPassword.password;

			res.status(200).json({ isAuthenticated: true, user: userWithoutPassword });
		} else {
			res.status(401).json({ isAuthenticated: false, message: 'Not authenticated' });
		}
	}
}
