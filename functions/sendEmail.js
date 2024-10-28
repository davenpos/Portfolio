"use server"

export default async function sendEmail(fd) {
    console.log(fd)
    const email = fd.get("email")
    const subject = fd.get("subject")
    const content = fd.get("content")
}