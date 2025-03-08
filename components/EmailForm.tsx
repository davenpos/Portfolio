"use client"
const validator = require("validator")
import { useState, useEffect, useRef, FormEvent } from "react"
import FormInput from '@/components/FormInput'
import clearFormInput from '@/functions/clearFormInput'
import sendEmail from '@/functions/sendEmail'
import windowSizeState from '@/functions/windowSizeState'

export default function EmailForm() {
    const emailLabel = windowSizeState("Your email:", "Your email address:")
    const [message, setMessage] = useState("Message")
    const [messageVisible, setMessageVisible] = useState(false)

    const emailFieldRef = useRef<HTMLInputElement>(null)
    const subjectFieldRef = useRef<HTMLInputElement>(null)
    const contentFieldRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const emailField = emailFieldRef.current
        const subjectField = subjectFieldRef.current
        const contentField = contentFieldRef.current

        const fieldChange = () => {
            if (emailField?.value || subjectField?.value || contentField?.value) setMessageVisible(false)
        }

        emailField?.addEventListener("input", fieldChange)
        subjectField?.addEventListener("input", fieldChange)
        contentField?.addEventListener("input", fieldChange)

        return () => {
            emailField?.removeEventListener("input", fieldChange)
            subjectField?.removeEventListener("input", fieldChange)
            contentField?.removeEventListener("input", fieldChange)
        }
    }, [])

    const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const fd = new FormData(e.currentTarget)
        const fromEmail = fd.get("email")
        const subject = fd.get("subject")
        const content = fd.get("content")

        if (fromEmail === "" || typeof (fromEmail) != "string" || !validator.isEmail(fromEmail)) {
            clearFormInput(emailFieldRef.current)
            setMessage("Please enter your email address.")
        } else if (subject === "" || typeof (subject) != "string") {
            clearFormInput(subjectFieldRef.current)
            setMessage("Please enter a subject.")
        } else if (content === "" || typeof (content) != "string") {
            clearFormInput(contentFieldRef.current)
            setMessage("Please enter your email content.")
        } else {
            await sendEmail(fromEmail, subject, content)
            clearFormInput(emailFieldRef.current)
            clearFormInput(subjectFieldRef.current)
            clearFormInput(contentFieldRef.current)
            setMessage("Your email to Simeon has been sent!")
        }
        setMessageVisible(true)
    }

    return (<>
        <h3 className="text-2xl font-bold text-center my-3">Email Simeon:</h3>
        <form onSubmit={formSubmit} className="text-sm md:text-base">
            <FormInput name="email" label={emailLabel} ref={emailFieldRef} />
            <FormInput name="subject" label="Subject:" ref={subjectFieldRef} />
            <FormInput name="content" label="Type email content here" ref={contentFieldRef} />
            <div className="col-span-2 flex justify-items-center content-center">
                <input type="submit" className="mx-auto rounded-[15px] bg-orange-500 px-3 py-2 text-white shadow-md mb-2 cursor-pointer" value="Send email" />
            </div>
        </form>
        <p id="message" className={`text-orange-500 text-center font-bold drop-shadow-md${!messageVisible && " invisible"}`}>{message}</p>
    </>)
}