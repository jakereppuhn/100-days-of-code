import bcrypt from 'bcryptjs';
import User from '../models/user';
import { IUser } from '../shared/interfaces';
import { formatEmail } from '../utils/formatter';

export class UserService {
	static async createUser(userData: IUser) {
		const { firstName, lastName, email, password } = userData;

		if (!firstName || !lastName || !email || !password) {
			throw new Error('Missing required fields');
		}

		if (password.length < 8) {
			throw new Error('Password must be at least 8 characters');
		}

		if (!/\d/.test(password)) {
			throw new Error('Password must contain at least one number');
		}

		if (!/[a-z]/.test(password)) {
			throw new Error('Password must contain at least one lowercase letter');
		}

		if (!/[A-Z]/.test(password)) {
			throw new Error('Password must contain at least one uppercase letter');
		}

		if (!/[!@#$%^&*]/.test(password)) {
			throw new Error('Password must contain at least one special character');
		}

		const formattedEmail = formatEmail(email);

		const userExists = await User.findOne({
			where: {
				email: formattedEmail,
			},
		});

		if (userExists) {
			throw new Error('User already exists');
		}

		const SALTS = 10;

		const hashedPassword = await bcrypt.hash(password, SALTS);

		const user = await User.create({
			...userData,
			email: formattedEmail,
			password: hashedPassword,
		});

		return user;
	}

	static async getUsers() {
		const users = await User.findAll();

		return users;
	}
}
