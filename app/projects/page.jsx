import Description from '@/components/Description'
import PageHeading from '@/components/PageHeading'
import Pagination from '@/components/Pagination'
import Projects from '@/components/Projects'
//import getPagination from '@/functions/getPagination'
import getStrapi from '@/functions/getStrapi'
import queryString from '@/functions/queryString'

export default async function Page(props) {
    const searchParams = await props.searchParams
    const pageNum = searchParams.page ? parseInt(searchParams.page) : 1
    const numPerPage = 3
    const start = (pageNum - 1) * numPerPage

    const query = queryString("projects")
    const projects = await getStrapi("projects", `sort=date:desc&pagination[start]=${start}&pagination[limit]=${numPerPage}`, true)
    const numOfPages = Math.ceil(projects.meta.pagination.total / numPerPage)

    const pageContents = await getStrapi("page-contents", query)
    const currPageContent = pageContents[0]

    return (<>
        <PageHeading text="Simeon's Projects" topMargin={false} />
        <Description desc={currPageContent.content} align="center" />
        <Projects projects={projects.data} />
        <Pagination pages={numOfPages} curr={pageNum} />
    </>)
}