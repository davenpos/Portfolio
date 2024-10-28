"use server"
const dotenv = require('dotenv')
dotenv.config()
const sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export default async function sendEmail(fd) {
    const simeonEmail = "simmywim@hotmail.com"
    const content = fd.get("content")
    const fromEmail = fd.get("email")
    const contentArray = content.split("\n")
    let htmlContent = ""
    contentArray.map(p => {
        if (p !== "") htmlContent += `<p>${p}</p>`
    })

    sendgrid.send({
        to: simeonEmail,
        from: simeonEmail,
        subject: fd.get("subject"),
        text: `From: ${fromEmail}\n\n${content}`,
        html: `From: ${fromEmail}<br><br>${htmlContent}`
    }).then(() => {}, err => {
        console.error(err)
        if (err.response) console.error(err.response.body)
    })
}