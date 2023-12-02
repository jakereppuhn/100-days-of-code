import dotenv from 'dotenv';
dotenv.config();

const env: 'development' | 'production' = (process.env.NODE_ENV || 'development') as 'development' | 'production';

const config = {
	development: {
		username: process.env.DB_USER!,
		password: process.env.DB_PASSWORD!,
		database: process.env.DB_NAME!,
		host: process.env.DB_HOST!,
		dialect: 'mysql',
	},
	production: {
		username: process.env.DB_USER!,
		password: process.env.DB_PASSWORD!,
		database: process.env.DB_NAME!,
		host: process.env.DB_HOST!,
		dialect: 'mysql',
	},
};

export default config[env];
