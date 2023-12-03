import Account from '../models/account';
import { IAccount } from '../types/interfaces';

export class AccountService {
	static async createAccount(accountData: IAccount) {
		const accountExists = await Account.findOne({
			where: {
				primaryContactId: accountData.primaryContactId,
				name: accountData.name,
				addressId: accountData.addressId,
			},
		});

		if (accountExists) {
			throw new Error('Account already exists');
		}

		const account = await Account.create(accountData);

		return account;
	}
}
