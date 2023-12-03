const formatWebsiteUrl = (website: string): string => {
	if (!website || !website.trim()) {
		throw new Error('Invalid input: Website URL is empty');
	}

	const urlPattern = /^(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9./]+$/;
	if (!urlPattern.test(website)) {
		throw new Error('Invalid input: Website URL is not in a proper format');
	}

	let domain = website.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0];
	return `https://${domain}`;
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

	if (cleaned.length < 10) {
		throw new Error('Invalid input: Phone number is too short');
	}

	if (cleaned.length === 10) {
		cleaned = `+1${cleaned}`;
	}

	return cleaned;
};

export { formatWebsiteUrl, formatEmail, formatPhoneNumber };