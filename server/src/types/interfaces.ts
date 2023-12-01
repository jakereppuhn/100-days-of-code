import {
	AccountStatus,
	ContactStatus,
	InteractionType,
	LeadSource,
	LeadStatus,
	TaskPriority,
	TaskStatus,
} from './enums';

export interface ICommon {
	id: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface IAccount extends ICommon {
	ownerId: string;
	primaryContactId: string;
	name: string;
	industry: string;
	website: string;
	status: AccountStatus;
	addressId: string;
}

export interface IAddress extends ICommon {
	street: string;
	city: string;
	state: string;
	zip: string;
	country: string;
}

export interface IContact extends ICommon {
	accountId: string;
	firstName: string;
	lastName: string;
	position: string;
	email: string;
	phone: string;
	status: ContactStatus;
	notes?: string;
}

export interface IInteraction extends ICommon {
	customerId: string;
	contactId: string;
	type: InteractionType;
	date: Date;
	notes?: string;
}

export interface ILead extends ICommon {
	assignedTo: string;
	name: string;
	email: string;
	phone: string;
	source: LeadSource;
	status: LeadStatus;
	industry?: string;
	potentialValue?: number;
	addressId?: string;
	notes?: string;
}

export interface ITask extends ICommon {
	accountId?: string;
	contactId?: string;
	leadId?: string;
	opportunityId?: string;
	assignedTo: string;
	name: string;
	dueDate: Date;
	status: TaskStatus;
	priority: TaskPriority;
	notes?: string;
}

export interface IUser extends ICommon {
	firstName: string;
	lastName: string;
	email: string;
	passwordHash: string;
}

export interface UserWithoutPassword extends ICommon {
	firstName: string;
	lastName: string;
	email: string;
}
