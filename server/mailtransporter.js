import nodemailer from "nodemailer";
import 'dotenv/config.js';
import logger from "./logger.js";


const transport = {
	host: process.env.HOST,
	port: process.env.MAILPORT,
    secure: true,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.PASS,
	},
	from: process.env.EMAIL,
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
	if (error) {
		logger.error(error);
        logger.error('not ready to take message');
	} else {
		logger.info('Server is ready to take messages');
	}
});

export default transporter;