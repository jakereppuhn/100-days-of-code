import { Model, DataTypes, Sequelize } from 'sequelize';
import { IAccount, IAccountOwner, IAddress, ITag } from '../shared/interfaces';
import { AccountIndustry, AccountOwnership, AccountRating, AccountType } from '../shared/enums';

class Account extends Model<IAccount> implements IAccount {
	public id!: string;
	public owner!: IAccountOwner;
	public name!: string;
	public site?: string;
	public parentAccountId?: string;
	public number?: string;
	public type?: AccountType;
	public industry?: AccountIndustry;
	public annualRevenue?: number;
	public rating?: AccountRating;
	public phone?: string;
	public fax?: string;
	public website?: string;
	public tickerSymbol?: string;
	public ownership?: AccountOwnership;
	public employees?: number;
	public sicCode?: string;
	public description?: string;
	public billingAddress?: IAddress;
	public shippingAddress?: IAddress;
	public tags?: ITag[];
	public createdBy!: string;
	public updatedBy!: string;

	public static initialize(sequelize: Sequelize) {
		this.init(
			{
				id: {
					type: DataTypes.UUID,
					primaryKey: true,
					defaultValue: DataTypes.UUIDV4,
				},
				owner: {
					type: DataTypes.JSON,
					allowNull: false,
				},
				name: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				site: {
					type: DataTypes.STRING,
				},
				parentAccountId: {
					type: DataTypes.UUID,
				},
				number: {
					type: DataTypes.STRING,
				},
				type: {
					type: DataTypes.ENUM,
					values: Object.values(AccountType),
				},
				industry: {
					type: DataTypes.ENUM,
					values: Object.values(AccountIndustry),
				},
				annualRevenue: {
					type: DataTypes.INTEGER,
				},
				rating: {
					type: DataTypes.ENUM,
					values: Object.values(AccountRating),
				},
				phone: {
					type: DataTypes.STRING,
				},
				fax: {
					type: DataTypes.STRING,
				},
				website: {
					type: DataTypes.STRING,
				},
				tickerSymbol: {
					type: DataTypes.STRING,
				},
				ownership: {
					type: DataTypes.ENUM,
					values: Object.values(AccountOwnership),
				},
				employees: {
					type: DataTypes.INTEGER,
				},
				sicCode: {
					type: DataTypes.STRING,
				},
				description: {
					type: DataTypes.STRING,
				},
				billingAddress: {
					type: DataTypes.JSON,
				},
				shippingAddress: {
					type: DataTypes.JSON,
				},
				tags: {
					type: DataTypes.JSON,
				},
				createdBy: {
					type: DataTypes.UUID,
					allowNull: false,
				},
				updatedBy: {
					type: DataTypes.UUID,
					allowNull: false,
				},
			},
			{
				tableName: 'accounts',
				sequelize,
			}
		);
	}
}

export default Account;
