import Description from '@/components/Description'
import PageHeading from '@/components/PageHeading'
import InstitutesList from '@/components/InstitutesList'
import getStrapi from '@/functions/getStrapi'
import queryString from '@/functions/queryString'

export default async function Page() {
    const query = queryString("education")
    const education = await getStrapi("educations", "sort=start:desc")
    const pageContents = await getStrapi("page-contents", query)
    const currPageContent = pageContents[0]

    return (<>
        <PageHeading text="Simeon's Education" topMargin={false} />
        <Description desc={currPageContent.content} align="center" />
        <InstitutesList institutes={education} />
    </>)
}