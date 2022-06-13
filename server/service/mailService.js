const nodemailer = require("nodemailer");
require("dotenv").config();

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true, 
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            }
        })
    }

    async sendVerificationLink(to, link) {
            await this.transporter.sendMail({
                from: process.env.SMTP_USER,
                to,
                subject: `Account verification for ${process.env.API_URL}`,
                text: "",
                html:
                    `
                    <div>
                        <h1>Click the link to verify and activate your account</h1>
                        <a href="${link}">${link}</a>
                    </div>
                    `
            }).catch(e => console.log(`Error occurred: ${e}`))

    }
}

module.exports = new MailService();