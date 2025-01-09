import Description from '@/components/Description'
import EmailForm from '@/components/EmailForm'
import PageHeading from '@/components/PageHeading'
import getEntryInfo from '@/functions/getEntryInfo'

export default async function Page() {
    const pageContent = await getEntryInfo('page-contents', 'contact')

    return (<>
        <PageHeading text="Contact Simeon" topMargin={false} />
        <Description desc={pageContent.content} align="left" />
        <EmailForm />
    </>)
}