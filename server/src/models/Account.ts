import { Model, DataTypes, Sequelize } from 'sequelize';
import { IAccount } from '../types/interfaces';
import { AccountStatus } from '../types/enums';

class Account extends Model<IAccount> implements IAccount {
	public id!: string;
	public ownerId!: string;
	public primaryContactId!: string;
	public name!: string;
	public industry!: string;
	public website!: string;
	public status!: AccountStatus;
	public addressId!: string;
	public createdAt!: Date;
	public updatedAt!: Date;

	public static initialize(sequelize: Sequelize) {
		this.init(
			{
				id: {
					type: DataTypes.UUID,
					primaryKey: true,
					defaultValue: DataTypes.UUIDV4,
				},
				ownerId: {
					type: DataTypes.UUID,
					allowNull: false,
				},
				primaryContactId: {
					type: DataTypes.UUID,
					allowNull: false,
				},
				name: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				industry: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				website: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				status: {
					type: DataTypes.ENUM,
					values: Object.values(AccountStatus),
					allowNull: false,
				},
				addressId: {
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
