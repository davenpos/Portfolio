import PageHeading from '@/components/PageHeading'
import Projects from '@/components/Projects'
import getStrapi from '@/functions/getStrapi'

export default async function Page() {
    const projects = await getStrapi("projects")

    return (
        <>
            <PageHeading text="Simeon's Projects" topMargin={false} />
            <Projects projects={projects} />
        </>
    )
}