import PageHeading from '@/components/PageHeading'
import ProjectListing from '@/components/ProjectListing'
import getStrapi from '@/functions/getStrapi'

export default async function Page() {
    let latestProjects = await getStrapi("projects")
    latestProjects = latestProjects.slice(0, 3)

    return (<>
        <p className="text-center">This is Simeon Davenport's portfolio. Take a look and see what his ever-growing experience in the realm of Computer Science is.</p>
        <PageHeading text="Simeon's Latest Projects:" />
        <div>
            {latestProjects.map(project => {
                return <ProjectListing key={project.id} title={project.title} />
            })}
        </div>
        <PageHeading text="Simeon's Latest Education:" />
        <div>(Latest 3 education)</div>
    </>)
}