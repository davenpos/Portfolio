import qs from "qs"
import Description from '@/components/Description'
import EmailForm from '@/components/EmailForm'
import PageHeading from '@/components/PageHeading'
import getStrapi from '@/functions/getStrapi'

export default async function Page() {
    const stringifiedQuery = qs.stringify({filters: { slug: "contact" }})
    const pageContents = await getStrapi("page-contents", stringifiedQuery)
    const currPageContent = pageContents[0]

    return (<>
        <PageHeading text="Contact Simeon" topMargin={false} />
        <Description desc={currPageContent.content} align="left" />
        <EmailForm />
    </>)
}