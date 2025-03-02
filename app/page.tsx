import qs from "qs"
import Description from '@/components/Description'
import PageHeading from '@/components/PageHeading'
import Projects from '@/components/Projects'
import InstitutesList from '@/components/InstitutesList'
import ViewMore from '@/components/ViewMore'
import getStrapi from '@/functions/getStrapi'
import getEntryInfo from '@/functions/getEntryInfo'
import createHrefPageSlug from '@/functions/createHrefPageSlug'

export default async function Page() {
    let query: PaginationQuery = {
        sort: "date:desc",
        pagination: {
            start: 0,
            limit: 3
        }
    }
    const latestProjects = await getStrapi<Project>("projects", qs.stringify(query), true)

    query.sort = "start:desc"
    const latestEducation = await getStrapi<Institute>("educations", qs.stringify(query), true)

    const pageContent = await getEntryInfo('page-contents', 'home')

    return (<>
        <Description desc={pageContent.content} align="center" />
        <PageHeading text="Simeon's Latest Projects:" topMargin={true} />
        <Projects projects={latestProjects.data} langsLinks={false} />
        <ViewMore length={latestProjects.meta.pagination.total} href={createHrefPageSlug("/projects")} text="View more of Simeon's projects" />
        <PageHeading text="Simeon's Latest Education:" topMargin={true} />
        <InstitutesList institutes={latestEducation.data} />
        <ViewMore length={latestEducation.meta.pagination.total} href={createHrefPageSlug("/education")} text="View more of Simeon's education" />
    </>)
}