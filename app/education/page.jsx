import Description from '@/components/Description'
import PageHeading from '@/components/PageHeading'
import Pagination from '@/components/Pagination'
import InstitutesList from '@/components/InstitutesList'
import getPaginationVars from '@/functions/getPaginationVars'
import getStrapi from '@/functions/getStrapi'
import queryString from '@/functions/queryString'

export default async function Page(props) {
    const numPerPage = 10
    const pagVars = await getPaginationVars(props, numPerPage, "educations", "start")

    const query = queryString("education")
    const pageContents = await getStrapi("page-contents", query)
    const currPageContent = pageContents[0]

    return (<>
        <PageHeading text="Simeon's Education" topMargin={false} />
        <Description desc={currPageContent.content} align="center" />
        <InstitutesList institutes={pagVars.data} />
        <Pagination pages={pagVars.numOfPages} curr={pagVars.pageNum} numPerPage={numPerPage} total={pagVars.total} />
    </>)
}