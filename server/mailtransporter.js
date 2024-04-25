import nodemailer from "nodemailer";
import 'dotenv/config.js';


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
		console.log(error);
        console.log('not ready to take message');
	} else {
		console.log('Server is ready to take messages');
	}
});

export default transporter;