import qs from "qs"
import PageHeading from '@/components/PageHeading'
import Projects from '@/components/Projects'
import InstitutesList from '@/components/InstitutesList'
import ViewMore from '@/components/ViewMore'
import getStrapi from '@/functions/getStrapi'
import queryString from '@/functions/queryString'

export default async function Page() {
    let query = queryString("home")

    const projects = await getStrapi("projects", "sort=date:desc")
    const latestProjects = projects.slice(0, 3)
    const education = await getStrapi("educations", "sort=start:desc")
    const latestEducation = education.slice(0, 3)
    const pageContents = await getStrapi("page-contents", query)
    const currPageContent = pageContents[0]

    return (<>
        <p className="text-center">{currPageContent.content}</p>
        <PageHeading text="Simeon's Latest Projects:" topMargin={true} />
        <Projects projects={latestProjects} />
        <ViewMore length={projects.length} href="/projects" text="View more of Simeon's projects" />
        <PageHeading text="Simeon's Latest Education:" topMargin={true} />
        <InstitutesList institutes={latestEducation} />
        <ViewMore length={education.length} href="/education" text="View more of Simeon's education" />
    </>)
}