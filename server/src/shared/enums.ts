export enum AccountIndustry {
	Tech = 'Technology',
	Telecom = 'Telecommunications',
	Consulting = 'Consulting',
	Manufacturing = 'Manufacturing',
	Healthcare = 'Healthcare',
	Pharma = 'Pharmaceuticals',
	Education = 'Education',
	Financial = 'Financial',
	Government = 'Government',
	Retail = 'Retail',
	Hospitality = 'Hospitality',
	Media = 'Media',
	Legal = 'Legal',
	Auto = 'Automotive',
	Aerospace = 'Aerospace',
	RealEstate = 'Real Estate',
	Other = 'Other',
}

export enum AccountOwnership {
	Government = 'Government',
	Public = 'Public',
	Private = 'Private',
	Partnership = 'Partnership',
	Other = 'Other',
}

export enum AccountRating {
	Acquired = 'Acquired',
	Active = 'Active',
	MarketFailed = 'Market Failed',
	ProjectCancelled = 'Project Cancelled',
	Shutdown = 'Shutdown',
	Suspended = 'Suspended',
}

export enum AccountType {
	Analyst = 'Analyst',
	Competitor = 'Competitor',
	Customer = 'Customer',
	Distributor = 'Distributor',
	Integrator = 'Integrator',
	Investor = 'Investor',
	Other = 'Other',
	Partner = 'Partner',
	Press = 'Press',
	Prospect = 'Prospect',
	Reseller = 'Reseller',
	Supplier = 'Supplier',
	Vendor = 'Vendor',
}

export enum ContactStatus {
	Active = 'Active',
	Inactive = 'Inactive',
	Flagged = 'Flagged',
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
