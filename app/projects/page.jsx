import PageHeading from '@/components/PageHeading'
import Pagination from '@/components/Pagination'
import Projects from '@/components/Projects'
import getPaginationVars from '@/functions/getPaginationVars'

export default async function Page(props) {
    const numPerPage = 5
    const pagVars = await getPaginationVars(props, numPerPage, "projects", "date")

    return (<>
        <PageHeading text="Simeon's Projects" topMargin={false} />
        <p className="text-center">Take a look at some of the various projects I have done over the course of my career and education.</p>
        <Projects projects={pagVars.data} langsLinks={true} />
        <Pagination pages={pagVars.numOfPages} curr={pagVars.pageNum} numPerPage={numPerPage} total={pagVars.total} />
    </>)
}