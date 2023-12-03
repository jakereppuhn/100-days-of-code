import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import db from './models/index';

import accountRoutes from './routes/accountRoutes';

const router = express();

const PORT = process.env.PORT || 8080;
const ENVIRONMENT = process.env.NODE_ENV || 'development';
const NAMESPACE = 'Server';

db.sequelize
	.sync()
	.then(() => {
		console.log(NAMESPACE, 'Database synchronized');
	})
	.catch((err: Error) => {
		console.log(NAMESPACE, 'Error synchronizing database', err);
	});

router.use((req, res, next) => {
	console.log(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

	res.on('finish', () => {
		console.log(
			NAMESPACE,
			`METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`
		);
	});

	next();
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cookieParser());
router.use(compression());
router.use(cors());

router.use('/api/v1/accounts', accountRoutes);

const server = http.createServer(router);

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT} in ${ENVIRONMENT} mode`);
});
