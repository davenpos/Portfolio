"use client"
import FormInput from '@/components/FormInput'
import sendEmail from '@/functions/sendEmail'

export default function EmailForm() {
    const formSubmit = async e => {
        e.preventDefault()
        document.querySelector("input[name='email']").value = ""
        document.querySelector("input[name='subject']").value = ""
        document.querySelector("textarea").value = ""
        await sendEmail(new FormData(e.target))
    }

    return (<>
        <h3 className="text-2xl font-bold text-center my-3">Email Simeon:</h3>
        <form onSubmit={formSubmit}>
            <FormInput name="email" label="Your email address:" />
            <FormInput name="subject" label="Subject:" />
            <FormInput name="content" label="Type email content here" />
            <div className="col-span-2 flex justify-items-center content-center">
                <input type="submit" className="mx-auto rounded-[15px] bg-orange-500 px-3 py-2 text-white shadow-md mb-2 cursor-pointer" value="Send email" />
            </div>
        </form>
    </>)
}