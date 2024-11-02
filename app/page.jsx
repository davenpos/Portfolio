import qs from "qs"
import Description from '@/components/Description'
import PageHeading from '@/components/PageHeading'
import Projects from '@/components/Projects'
import InstitutesList from '@/components/InstitutesList'
import ViewMore from '@/components/ViewMore'
import getStrapi from '@/functions/getStrapi'

export default async function Page() {
    let query = {
        sort: "date:desc",
        pagination: {
            start: "0",
            limit: "3"
        }
    }
    const latestProjects = await getStrapi("projects", qs.stringify(query), true)

    query.sort = "start:desc"
    const latestEducation = await getStrapi("educations", qs.stringify(query), true)

    query = qs.stringify({filters: { slug: "home" }})
    const pageContents = await getStrapi("page-contents", query)
    const currPageContent = pageContents[0]

    return (<>
        <Description desc={currPageContent.content} align="center" />
        <PageHeading text="Simeon's Latest Projects:" topMargin={true} />
        <Projects projects={latestProjects.data} />
        <ViewMore length={latestProjects.meta.pagination.total} href="/projects" text="View more of Simeon's projects" />
        <PageHeading text="Simeon's Latest Education:" topMargin={true} />
        <InstitutesList institutes={latestEducation.data} />
        <ViewMore length={latestEducation.meta.pagination.total} href="/education" text="View more of Simeon's education" />
    </>)
}