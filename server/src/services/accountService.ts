import { Op } from 'sequelize';
import { validate } from 'uuid';
import Account from '../models/account';
import User from '../models/user';
import { IAccount, IQueryParams } from '../shared/interfaces';
import { formatPhoneNumber, formatWebsiteUrl } from '../utils/formatter';

export class AccountService {
	static async createAccount(createdBy: string, accountData: IAccount) {
		const { owner, name, website, phone } = accountData;

		if (!name) {
			throw new Error('Account name is required');
		}

		const accountExists = await Account.findOne({
			where: {
				name: name,
			},
		});

		if (accountExists) {
			throw new Error('An account with the same name already exists');
		}

		let formattedWebsite: string | undefined;

		if (website) {
			formattedWebsite = formatWebsiteUrl(website);
		}

		let formattedPhone: string | undefined;

		if (phone) {
			formattedPhone = formatPhoneNumber(phone);
		}

		if (!validate(owner.id)) {
			throw new Error('Invalid owner ID format');
		}

		const ownerExists = await User.findByPk(owner.id);

		if (!ownerExists) {
			throw new Error('The user you are trying to assign as the owner does not exist');
		}

		if (!validate(createdBy)) {
			throw new Error('Invalid createdBy ID format');
		}

		const creatorExist = await User.findByPk(createdBy);

		if (!creatorExist) {
			throw new Error('The user you are trying to assign as the creator does not exist');
		}

		const account = await Account.create({
			...accountData,
			owner: {
				id: ownerExists.id,
				name: ownerExists.firstName + ' ' + ownerExists.lastName,
				email: ownerExists.email,
			},
			website: formattedWebsite,
			phone: formattedPhone,
			createdBy: creatorExist.id,
			updatedBy: creatorExist.id,
		});

		return account;
	}

	static async getAccounts(params: IQueryParams) {
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
		if (!validate(id)) {
			throw new Error('Invalid ID format');
		}

		const account = await Account.findByPk(id);

		if (!account) {
			throw new Error('Account not found');
		}

		return account;
	}

	// static async updateAccount(id: string, accountData: Partial<IAccount>) {
	// 	if (!validate(id)) {
	// 		throw new Error('Invalid ID format');
	// 	}

	// 	const account = await Account.findByPk(id);

	// 	if (!account) {
	// 		throw new Error('Account not found');
	// 	}

	// 	let formattedUUID: string | undefined;

	// 	if (accountData.owner.id) {
	// 		formattedUUID = formatUUID(accountData.owner.id);
	// 		const owner = await User.findByPk(accountData.owner.id);
	// 		if (!owner) {
	// 			throw new Error('The user you are trying to assign as the owner does not exist');
	// 		}
	// 	}

	// 	const updateData: Partial<IAccount> = {};

	// 	if (accountData.name) {
	// 		updateData.name = accountData.name;
	// 	}
	// 	if (accountData.industry) {
	// 		updateData.industry = accountData.industry;
	// 	}
	// 	if (accountData.website) {
	// 		updateData.website = formatWebsiteUrl(accountData.website);
	// 	}
	// 	if (accountData.email) {
	// 		updateData.email = formatEmail(accountData.email);
	// 	}
	// 	if (accountData.phone) {
	// 		updateData.phone = formatPhoneNumber(accountData.phone);
	// 	}
	// 	if (accountData.status) {
	// 		updateData.status = accountData.status;
	// 	}
	// 	if (accountData.owner.id) {
	// 		updateData.owner.id = formattedUUID;
	// 	}

	// 	const whereClause: any = { id: { [Op.ne]: id } };
	// 	if (updateData.name) {
	// 		whereClause.name = updateData.name;
	// 	}
	// 	if (updateData.email) {
	// 		whereClause.email = updateData.email;
	// 	}

	// 	if (updateData.name || updateData.email) {
	// 		const accountExists = await Account.findOne({ where: whereClause });
	// 		if (accountExists) {
	// 			throw new Error('An account with the same name and email already exists');
	// 		}
	// 	}

	// 	await account.update(updateData);

	// 	return account;
	// }

	static async deleteAccount(id: string) {
		if (!validate(id)) {
			throw new Error('Invalid ID format');
		}

		const account = await Account.findByPk(id);

		if (!account) {
			throw new Error('Account not found');
		}

		await account.destroy();

		return account;
	}

	static async listRelatedContacts(id: string) {}

	static async listRelatedEmails(id: string) {}
}
