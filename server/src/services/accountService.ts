import { Op } from 'sequelize';
import Account from '../models/account';
import User from '../models/user';
import { IAccount, IAccountQueryParams } from '../shared/interfaces';
import { formatEmail, formatPhoneNumber, formatUUID, formatWebsiteUrl } from '../utils/formatter';

export class AccountService {
	static async createAccount(accountData: IAccount) {
		const { ownerId, name, industry, website, email, phone, status } = accountData;

		if (!ownerId || !name || !industry || !email || !phone || !status) {
			throw new Error('Missing required fields');
		}

		let formattedWebsite: string | undefined;

		if (website) {
			formattedWebsite = formatWebsiteUrl(website);
		}

		const formattedUUID = formatUUID(ownerId);
		const formattedEmail = formatEmail(email);
		const formattedPhone = formatPhoneNumber(phone);

		const owner = await User.findByPk(ownerId);

		if (!owner) {
			throw new Error('The user you are trying to assign as the owner does not exist');
		}

		const accountExists = await Account.findOne({
			where: {
				name: name,
				email: formattedEmail,
			},
		});

		if (accountExists) {
			throw new Error('Account already exists');
		}

		const account = await Account.create({
			...accountData,
			ownerId: formattedUUID,
			website: formattedWebsite,
			email: formattedEmail,
			phone: formattedPhone,
		});

		return account;
	}

	static async getAccounts(params: IAccountQueryParams) {
		const { filter, sort, page, pageSize, fields } = params;

		let whereClause = filter || {};
		let orderClause: [string, string][] = [];
		let limit = pageSize;
		let offset = page && pageSize ? (page - 1) * pageSize : 0;
		let attributes: string[] | undefined = fields;

		if (sort) {
			const [field, order] = sort.split(',');
			orderClause.push([field, order.toUpperCase()]);
		}

		const accounts = await Account.findAll({
			where: whereClause,
			order: orderClause.length > 0 ? orderClause : undefined,
			limit,
			offset,
			attributes,
		});

		const accountCount = accounts.length;

		return { accounts, count: accountCount };
	}

	static async getAccountById(id: string) {
		if (!id.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)) {
			throw new Error('Invalid ID format');
		}

		const account = await Account.findByPk(id);

		if (!account) {
			throw new Error('Account not found');
		}

		return account;
	}

	static async updateAccount(id: string, accountData: Partial<IAccount>) {
		if (!id.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)) {
			throw new Error('Invalid ID format');
		}

		const account = await Account.findByPk(id);

		if (!account) {
			throw new Error('Account not found');
		}

		let formattedUUID: string | undefined;

		if (accountData.ownerId) {
			formattedUUID = formatUUID(accountData.ownerId);
			const owner = await User.findByPk(accountData.ownerId);
			if (!owner) {
				throw new Error('The user you are trying to assign as the owner does not exist');
			}
		}

		const updateData: Partial<IAccount> = {};

		if (accountData.name) {
			updateData.name = accountData.name;
		}
		if (accountData.industry) {
			updateData.industry = accountData.industry;
		}
		if (accountData.website) {
			updateData.website = formatWebsiteUrl(accountData.website);
		}
		if (accountData.email) {
			updateData.email = formatEmail(accountData.email);
		}
		if (accountData.phone) {
			updateData.phone = formatPhoneNumber(accountData.phone);
		}
		if (accountData.status) {
			updateData.status = accountData.status;
		}
		if (accountData.ownerId) {
			updateData.ownerId = formattedUUID;
		}

		const whereClause: any = { id: { [Op.ne]: id } };
		if (updateData.name) {
			whereClause.name = updateData.name;
		}
		if (updateData.email) {
			whereClause.email = updateData.email;
		}

		if (updateData.name || updateData.email) {
			const accountExists = await Account.findOne({ where: whereClause });
			if (accountExists) {
				throw new Error('An account with the same name and email already exists');
			}
		}

		await account.update(updateData);

		return account;
	}

	static async deleteAccount(id: string) {
		if (!id.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)) {
			throw new Error('Invalid ID format');
		}

		const account = await Account.findByPk(id);

		if (!account) {
			throw new Error('Account not found');
		}

		await account.destroy();

		return account;
	}

	static async getAccountOwner(id: string) {
		if (!id.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)) {
			throw new Error('Invalid ID format');
		}

		const account = await Account.findByPk(id);

		if (!account) {
			throw new Error('Account not found');
		}

		const owner = await User.findByPk(account.ownerId);

		if (!owner) {
			throw new Error('Account owner not found');
		}

		return owner;
	}
}
