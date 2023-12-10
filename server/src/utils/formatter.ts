const formatWebsiteUrl = (website: string) => {
	if (!website || typeof website !== 'string' || !website.trim()) {
		throw new Error('Invalid input: Website URL is empty or not a string');
	}

	// A simplified check to see if the string contains at least one dot, which is a very basic requirement for a domain
	if (!website.includes('.')) {
		throw new Error('Invalid input: Website URL does not seem valid');
	}

	// Prepending 'https://' if it's missing
	if (!/^https?:\/\//i.test(website)) {
		website = 'https://' + website;
	}

	// Extracting the domain and path
	let domainAndPath = website.split('//')[1];

	// Ensuring no trailing slash
	if (domainAndPath.endsWith('/')) {
		domainAndPath = domainAndPath.slice(0, -1);
	}

	return 'https://' + domainAndPath;
};

const formatEmail = (email: string): string => {
	if (!email || !email.trim()) {
		throw new Error('Invalid input: Email is empty');
	}

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailPattern.test(email)) {
		throw new Error('Invalid input: Email is not in a proper format');
	}

	return email.trim().toLowerCase();
};

const formatPhoneNumber = (phone: string): string => {
	if (!phone || !phone.trim()) {
		throw new Error('Invalid input: Phone number is empty');
	}

	let cleaned = phone.replace(/\D/g, '');

	if (cleaned.length !== 10) {
		throw new Error('Invalid input: Phone number should be 10 digits');
	}

	return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
};

const formatUUID = (uuid: string): string => {
	if (!uuid || !uuid.trim()) {
		throw new Error('Invalid input: UUID is empty');
	}

	if (!uuid.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/)) {
		throw new Error('Invalid input: UUID is not in a proper format');
	}

	return uuid;
};

export { formatWebsiteUrl, formatEmail, formatPhoneNumber, formatUUID };
