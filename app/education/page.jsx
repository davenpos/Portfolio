import Description from '@/components/Description'
import PageHeading from '@/components/PageHeading'
import Pagination from '@/components/Pagination'
import InstitutesList from '@/components/InstitutesList'
import getPaginationVars from '@/functions/getPaginationVars'
import getEntryInfo from '@/functions/getEntryInfo'

export default async function Page(props) {
    const numPerPage = 8
    const pagVars = await getPaginationVars(props, numPerPage, "educations", "start")
    const pageContent = await getEntryInfo('page-contents', 'education')

    return (<>
        <PageHeading text="Simeon's Education" topMargin={false} />
        <Description desc={pageContent.content} align="center" />
        <InstitutesList institutes={pagVars.data} />
        <Pagination pages={pagVars.numOfPages} curr={pagVars.pageNum} numPerPage={numPerPage} total={pagVars.total} />
    </>)
}