import { Model, DataTypes, Sequelize } from 'sequelize';
import { IContact } from '../types/interfaces';
import { ContactStatus } from '../types/enums';

class Contact extends Model<IContact> implements IContact {
	public id!: string;
	public accountId!: string;
	public firstName!: string;
	public lastName!: string;
	public position!: string;
	public email!: string;
	public phone!: string;
	public status!: ContactStatus;
	public notes?: string;

	public static initialize(sequelize: Sequelize) {
		this.init(
			{
				id: {
					type: DataTypes.UUID,
					primaryKey: true,
					defaultValue: DataTypes.UUIDV4,
				},
				accountId: {
					type: DataTypes.UUID,
					allowNull: false,
				},
				firstName: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				lastName: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				position: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				email: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				phone: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				status: {
					type: DataTypes.ENUM,
					values: Object.values(ContactStatus),
					allowNull: false,
				},
				notes: {
					type: DataTypes.STRING,
					allowNull: true,
				},
			},
			{
				tableName: 'contacts',
				sequelize,
			}
		);
	}
}

export default Contact;
