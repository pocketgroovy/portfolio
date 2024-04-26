import express from "express";
import transporter from "../mailtransporter.js";
import 'dotenv/config.js';
import logger from "../logger.js";

const router = express.Router();

router.get("/", async (req, res) => {
    res.json('hi').status(200);
});

router.post('/send', (req, res, next) => {
    var name = req.body.username;
    var email = req.body.email;
    var message = req.body.message;
    var subject = req.body.subject;
    var senderEmail = `${name} <${process.env.EMAIL}>`;
    var myEmail = `${process.env.MYNAME} <${process.env.EMAIL}>`;
    var content = `name: ${name} \nemail: ${email} \nmessage: ${message} `;

    const options = {
        from: senderEmail,
        to: process.env.EMAIL,
        subject: `${subject} from ${name}`,
        text: content,
    };

    const replyoptions = {
        from: myEmail,
        to: email,
        subject: 'Automated reply: message received',
        text: `Hi ${name},\nThank you for sending me a message. I will get back to you soon.\n\nBest Regards,\n${process.env.MYNAME}\n${process.env.MYSITE}\n\n\nMessage Details\nName: ${name}\n Email: ${email}\n Message: ${message}`,
        html: `<p>Hi ${name},<br>Thank you for sending me a message. I will get back to you soon.<br><br>Best Regards,<br>${process.env.MYNAME}<br>${process.env.MYSITE}<br><br><br>Message Details<br>Name: ${name}<br> Email: ${email}<br> Message: ${message}</p>`,
    }
    //Deliver message from your portfolio to your email address
    transporter.sendMail(options, (err, data) => {
        logger.error(err);
        logger.info(data);
        if (err) {
            res.json({
                status: 'fail',
            });
        } else {
            res.json({
                status: 'success',
            });
            //If Success, send Auto Reply email
            transporter.sendMail(replyoptions, (error, info) => {
                if (error) {
                    logger.error(error);
                } else {
                    logger.info('Message sent: ' + info.response);
                }
            });
        }
    });
});

export default router;