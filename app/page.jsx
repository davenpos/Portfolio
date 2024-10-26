import PageHeading from '@/components/PageHeading'
import Projects from '@/components/Projects'
import ViewMore from '@/components/ViewMore'
import getStrapi from '@/functions/getStrapi'

export default async function Page() {
    const projects = await getStrapi("projects", "sort=date:desc")
    const latestProjects = projects.slice(0, 3)

    return (<>
        <p className="text-center">This is Simeon Davenport's portfolio. Take a look and see what his ever-growing experience in the realm of Computer Science is.</p>
        <PageHeading text="Simeon's Latest Projects:" topMargin={true} />
        <Projects projects={latestProjects} />
        <ViewMore length={projects.length} href="/projects" text="View more of Simeon's projects" />
        <PageHeading text="Simeon's Latest Education:" topMargin={true} />
        <div>(Latest 3 education)</div>
    </>)
}