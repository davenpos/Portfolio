import Description from '@/components/Description'
import PageHeading from '@/components/PageHeading'
import Projects from '@/components/Projects'
import getStrapi from '@/functions/getStrapi'
import queryString from '@/functions/queryString'

export default async function Page() {
    const query = queryString("projects")
    const projects = await getStrapi("projects", "sort=date:desc")
    const pageContents = await getStrapi("page-contents", query)
    const currPageContent = pageContents[0]

    return (<>
        <PageHeading text="Simeon's Projects" topMargin={false} />
        <Description desc={currPageContent.content} align="center" />
        <Projects projects={projects} />
    </>)
}