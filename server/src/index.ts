import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

const router = express();

const PORT = process.env.PORT || 8080;
const ENVIRONMENT = process.env.NODE_ENV || 'development';

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cookieParser());
router.use(compression());
router.use(cors());

const server = http.createServer(router);

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT} in ${ENVIRONMENT} mode`);
});
