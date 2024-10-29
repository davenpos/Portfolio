"use server"
const dotenv = require('dotenv')
dotenv.config()
const sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export default async function sendEmail(fromEmail, subject, content) {
    const contentArray = content.split("\n")
    let htmlContent = ""
    contentArray.map(p => {
        if (p !== "") htmlContent += `<p>${p}</p>`
    })

    sendgrid.send({
        to: "simmywim@hotmail.com",
        from: process.env.OTHER_EMAIL,
        replyTo: fromEmail,
        subject: subject,
        text: `From: ${fromEmail}\n\n${content}`,
        html: `<b>From:</b> ${fromEmail}<br><br>${htmlContent}`
    }).then(() => {}, err => {
        console.error(err)
        if (err.response) console.error(err.response.body)
    })
}