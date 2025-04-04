import PageHeading from '@/components/PageHeading'
import Pagination from '@/components/Pagination'
import InstitutesList from '@/components/InstitutesList'
import getPaginationVars from '@/functions/getPaginationVars'

export default async function Page(props) {
    const numPerPage = 8
    const pagVars = await getPaginationVars(props, numPerPage, "educations", "start")

    return (<>
        <PageHeading text="Simeon's Education" topMargin={false} />
        <p className="text-center">Take a look at where I earned my various skills in computer programming and computer science.</p>
        <InstitutesList institutes={pagVars.data} />
        <Pagination pages={pagVars.numOfPages} curr={pagVars.pageNum} numPerPage={numPerPage} total={pagVars.total} />
    </>)
}