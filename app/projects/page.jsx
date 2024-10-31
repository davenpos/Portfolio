import Description from '@/components/Description'
import PageHeading from '@/components/PageHeading'
import Pagination from '@/components/Pagination'
import Projects from '@/components/Projects'
import getPaginationVars from '@/functions/getPaginationVars'
import getStrapi from '@/functions/getStrapi'
import queryString from '@/functions/queryString'

export default async function Page(props) {
    const numPerPage = 8
    const pagVars = await getPaginationVars(props, numPerPage, "projects", "date")

    const query = queryString("projects")
    const pageContents = await getStrapi("page-contents", query)
    const currPageContent = pageContents[0]

    return (<>
        <PageHeading text="Simeon's Projects" topMargin={false} />
        <Description desc={currPageContent.content} align="center" />
        <Projects projects={pagVars.data} />
        <Pagination pages={pagVars.numOfPages} curr={pagVars.pageNum} numPerPage={numPerPage} total={pagVars.total} />
    </>)
}