import Description from '@/components/Description'
import PageHeading from '@/components/PageHeading'
import Pagination from '@/components/Pagination'
import Projects from '@/components/Projects'
import getPaginationVars from '@/functions/getPaginationVars'
import getEntryInfo from '@/functions/getEntryInfo'

export default async function Page(props) {
    const numPerPage = 5
    const pagVars = await getPaginationVars(props, numPerPage, "projects", "date")
    const pageContent = await getEntryInfo('page-contents', 'projects')

    return (<>
        <PageHeading text="Simeon's Projects" topMargin={false} />
        <Description desc={pageContent.content} align="center" />
        <Projects projects={pagVars.data} langsLinks={true} />
        <Pagination pages={pagVars.numOfPages} curr={pagVars.pageNum} numPerPage={numPerPage} total={pagVars.total} />
    </>)
}