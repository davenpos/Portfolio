import EmailForm from '@/components/EmailForm'
import PageHeading from '@/components/PageHeading'

export default async function Page() {
    return (<>
        <PageHeading text="Contact Simeon" topMargin={false} />
        <p>The best way to contact me is via email. The form to email me is below. My personal email address is simmywim@hotmail.com. I can further be reached by phone at +1 (226)-402-3639. You can also connect with me on LinkedIn, which you can find the link to in the footer. If you wish to see my resume, a link to it can also be found in the footer.</p>
        <EmailForm />
    </>)
}