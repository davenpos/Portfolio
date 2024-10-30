"use client"
const validator = require("validator")
import FormInput from '@/components/FormInput'
import sendEmail from '@/functions/sendEmail'
import windowSizeState from '@/functions/windowSizeState'

export default function EmailForm() {
    const emailLabel = windowSizeState("Your email:", "Your email address:");

    const formSubmit = async e => {
        e.preventDefault()
        const fd = new FormData(e.target)
        const fromEmail = fd.get("email")
        const subject = fd.get("subject")
        const content = fd.get("content")
        const message = document.getElementById("message")
        const emailField = document.querySelector("input[name='email']")
        const subjectField = document.querySelector("input[name='subject']")
        const contentField = document.querySelector("textarea")

        if (fromEmail === "" || typeof(fromEmail) != "string" || !validator.isEmail(fromEmail)) {
            emailField.value = ""
            message.innerText = "Please enter your email address."
        } else if (subject === "" || typeof(subject) != "string") {
            subjectField.value = ""
            message.innerText = "Please enter a subject."
        } else if (content === "" || typeof(content) != "string") {
            contentField.value = ""
            message.innerText = "Please enter your email content."
        } else {
            await sendEmail(fromEmail, subject, content)
            emailField.value = ""
            subjectField.value = ""
            contentField.value = ""
            message.innerText = "Your email to Simeon has been sent!"
        }
        message.classList.remove("invisible")
    }

    return (<>
        <h3 className="text-2xl font-bold text-center my-3">Email Simeon:</h3>
        <form onSubmit={formSubmit} className="text-sm md:text-base">
            <FormInput name="email" label={emailLabel} />
            <FormInput name="subject" label="Subject:" />
            <FormInput name="content" label="Type email content here" />
            <div className="col-span-2 flex justify-items-center content-center">
                <input type="submit" className="mx-auto rounded-[15px] bg-orange-500 px-3 py-2 text-white shadow-md mb-2 cursor-pointer" value="Send email" />
            </div>
        </form>
        <p id="message" className="text-orange-500 text-center font-bold drop-shadow-md invisible">Message</p>
    </>)
}