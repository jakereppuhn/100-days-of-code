import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../models/user';
import { IUser } from '../shared/interfaces';
import { formatEmail } from '../utils/formatter';
import Account from '../models/account';

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

		const userCount = users.length;

		const usersWithoutPassword = users.map((user) => {
			const { password, ...userWithoutPassword } = user.toJSON();

			return userWithoutPassword;
		});

		return { users: usersWithoutPassword, count: userCount };
	}

	static async getUserById(id: string) {
		if (!id.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)) {
			throw new Error('Invalid ID format');
		}

		const user = await User.findByPk(id);

		if (!user) {
			throw new Error('User not found');
		}

		return user;
	}

	static async deleteUser(id: string) {
		if (!id.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)) {
			throw new Error('Invalid ID format');
		}

		const user = await User.findByPk(id);

		if (!user) {
			throw new Error('User not found');
		}

		const associatedAccounts = await Account.findAll({
			where: {
				owner: { id: id },
			},
		});

		if (associatedAccounts.length > 0) {
			throw new Error('User cannot be deleted because they are the owner of one or more accounts');
		}

		await user.destroy();

		return user;
	}

	static async authenticateUser(email: string, password: string) {
		if (!email || !password) {
			throw new Error('Missing credentials');
		}

		const user = await User.findOne({ where: { email } });
		if (!user) {
			throw new Error('User not found');
		}

		const passwordIsValid = await bcrypt.compare(password, user.password);
		if (!passwordIsValid) {
			throw new Error('Invalid password');
		}

		const accessToken = sign({ userId: user.id, email: user.email }, process.env.JWT_KEY as string, {
			expiresIn: '24h',
		});

		return { accessToken };
	}
}
