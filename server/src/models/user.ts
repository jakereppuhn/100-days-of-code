import { Model, DataTypes, Sequelize } from 'sequelize';
import { IUser } from '../shared/interfaces';

class User extends Model<IUser> implements IUser {
	public id!: string;
	public firstName!: string;
	public lastName!: string;
	public email!: string;
	public passwordHash!: string;

	public static initialize(sequelize: Sequelize) {
		this.init(
			{
				id: {
					type: DataTypes.UUID,
					primaryKey: true,
					defaultValue: DataTypes.UUIDV4,
				},
				firstName: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				lastName: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				email: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				passwordHash: {
					type: DataTypes.STRING,
					allowNull: false,
				},
			},
			{
				tableName: 'users',
				sequelize,
			}
		);
	}
}

export default User;
