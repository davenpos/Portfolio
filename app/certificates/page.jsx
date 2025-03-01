import CertificatesList from '@/components/CertificatesList'
import Description from '@/components/Description'
import PageHeading from '@/components/PageHeading'
import Pagination from '@/components/Pagination'
import getPaginationVars from '@/functions/getPaginationVars'
import getEntryInfo from '@/functions/getEntryInfo'

export default async function Page({searchParams}) {
    const numPerPage = 5
    const pagVars = await getPaginationVars(searchParams, numPerPage, "certificates", "completed")
    const pageContent = await getEntryInfo('page-contents', 'certificates')

    return (<>
        <PageHeading text="Simeon's Certificates" topMargin={false} />
        <Description desc={pageContent.content} align="center" />
        <CertificatesList certificates={pagVars.data} />
        <Pagination pages={pagVars.numOfPages} curr={pagVars.pageNum} numPerPage={numPerPage} total={pagVars.total} />
    </>)
}