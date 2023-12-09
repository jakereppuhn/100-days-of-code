import {
	AccountIndustry,
	AccountOwnership,
	AccountRating,
	AccountType,
	ContactStatus,
	InteractionType,
	LeadSource,
	LeadStatus,
	TaskPriority,
	TaskStatus,
} from './enums';

export interface ICommon {
	id: string;
}

export interface IQueryParams {
	filter?: Record<string, any>;
	sort?: string;
	page?: number;
	pageSize?: number;
	fields?: string[];
}

export interface IAccount extends ICommon {
	owner: IAccountOwner;
	name: string;
	site?: string;
	parentAccountId?: string;
	number?: string;
	type?: AccountType;
	industry?: AccountIndustry;
	annualRevenue?: number;
	rating?: AccountRating;
	phone?: string;
	fax?: string;
	website?: string;
	tickerSymbol?: string;
	ownership?: AccountOwnership;
	employees?: number;
	sicCode?: string;
	description?: string;
	billingAddress?: IAddress;
	shippingAddress?: IAddress;
	tags?: ITag[];
	createdBy: string;
	updatedBy: string;
}

export interface IAccountOwner {
	id: string;
	name?: string;
	email?: string;
}

export interface IAddress extends ICommon {
	street?: string;
	city?: string;
	state?: string;
	zip?: string;
	country?: string;
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

export interface ITag extends ICommon {
	name: string;
	colorCode: string;
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
	password: string;
}

export interface UserWithoutPassword extends ICommon {
	firstName: string;
	lastName: string;
	email: string;
}
