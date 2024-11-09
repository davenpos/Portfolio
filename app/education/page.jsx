import qs from "qs"
import Description from '@/components/Description'
import PageHeading from '@/components/PageHeading'
import Pagination from '@/components/Pagination'
import InstitutesList from '@/components/InstitutesList'
import getPaginationVars from '@/functions/getPaginationVars'
import getStrapi from '@/functions/getStrapi'

export default async function Page(props) {
    const numPerPage = 8
    const pagVars = await getPaginationVars(props, numPerPage, "educations", "start")

    const stringifiedQuery = qs.stringify({filters: { slug: "education" }})
    const pageContents = await getStrapi("page-contents", stringifiedQuery)
    const currPageContent = pageContents[0]

    return (<>
        <PageHeading text="Simeon's Education" topMargin={false} />
        <Description desc={currPageContent.content} align="center" />
        <InstitutesList institutes={pagVars.data} />
        <Pagination pages={pagVars.numOfPages} curr={pagVars.pageNum} numPerPage={numPerPage} total={pagVars.total} />
    </>)
}