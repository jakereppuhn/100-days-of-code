import Account from '../models/account';
import { IAccount, IAccountQueryParams } from '../shared/interfaces';
import { formatEmail, formatPhoneNumber, formatWebsiteUrl } from '../utils/formatter';

export class AccountService {
	static async createAccount(accountData: IAccount) {
		const { ownerId, primaryContactId, name, industry, website, email, phone, status, addressId } = accountData;

		if (!ownerId || !primaryContactId || !name || !industry || !website || !email || !phone || !status || !addressId) {
			throw new Error('Missing required fields');
		}

		const formattedWebsite = formatWebsiteUrl(website);
		const formattedEmail = formatEmail(email);
		const formattedPhone = formatPhoneNumber(phone);

		const accountExists = await Account.findOne({
			where: {
				primaryContactId: primaryContactId,
				name: name,
				addressId: addressId,
			},
		});

		if (accountExists) {
			throw new Error('Account already exists');
		}

		const account = await Account.create({
			...accountData,
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

		return accounts;
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
}
