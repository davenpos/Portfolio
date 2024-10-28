import Description from '@/components/Description'
import EmailForm from '@/components/EmailForm'
import PageHeading from '@/components/PageHeading'
import getStrapi from '@/functions/getStrapi'
import queryString from '@/functions/queryString'

export default async function Page() {
    const query = queryString("contact")
    const pageContents = await getStrapi("page-contents", query)
    const currPageContent = pageContents[0]

    return (<>
        <PageHeading text="Contact Simeon" topMargin={false} />
        <Description desc={currPageContent.content} align="left" />
        <EmailForm />
    </>)
}