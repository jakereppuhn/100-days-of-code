export enum AccountStatus {
	Active = 'Active',
	Inactive = 'Inactive',
	Prospecting = 'Prospecting',
	Closed = 'Closed',
}

export enum ContactStatus {
	Active,
	Inactive,
	Flagged,
}

export enum InteractionType {
	Call,
	Email,
	Meeting,
	SocialMedia,
	Webchat,
}

export enum LeadSource {
	WebForm,
	Referral,
	PhoneInquiry,
	Event,
	Advertisement,
}

export enum LeadStatus {
	New,
	Contacted,
	Qualified,
	Disqualified,
	Converted,
}

export enum TaskStatus {
	Pending,
	InProgress,
	Completed,
	Deferred,
	Cancelled,
}

export enum TaskPriority {
	High,
	Medium,
	Low,
}
