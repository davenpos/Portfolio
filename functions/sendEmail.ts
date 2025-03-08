"use server"
const sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export default async function sendEmail(fromEmail: string, subject: string, content: string) {
    const contentArray = content.split("\n")
    let htmlContent = ""
    contentArray.map(p => {
        if (p !== "") htmlContent += `<p>${p}</p>`
    })

    await sendgrid.send({
        to: "simmywim@hotmail.com",
        from: process.env.OTHER_EMAIL,
        replyTo: fromEmail,
        subject: subject,
        text: `From: ${fromEmail}\n\n${content}`,
        html: `<b>From:</b> ${fromEmail}<br><br>${htmlContent}`,
    }).then(() => { }, (error: any) => {
        console.error(error);

        if (error.response) {
            console.error(error.response.body)
        }
    })
}