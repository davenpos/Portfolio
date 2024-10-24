import PageHeading from '@/components/PageHeading'
import ProjectListing from '@/components/ProjectListing'
import getStrapi from '@/functions/getStrapi'

export default async function Page() {
    const projects = await getStrapi("projects")

    return (
        <>
            <PageHeading text="Simeon's Projects" />
            <div>
                {projects.map(p => {
                    return <ProjectListing key={p.id} title={p.title} slug={p.slug} />
                })}
            </div>
        </>
    )
}