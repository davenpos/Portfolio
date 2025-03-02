import Description from '@/components/Description'
import PageHeading from '@/components/PageHeading'
import getEntryInfo from '@/functions/getEntryInfo'
import imgSrc from '@/assets/SD.jpg'

export default async function Page() {
    const pageContent = await getEntryInfo<PageContent>('page-contents', 'about')

    return (<>
        <PageHeading text="About Simeon" topMargin={false} />
        <img src={imgSrc.src} alt="Simeon Davenport" className="w-36 md:w-auto float-left mr-3" />
        <Description desc={pageContent.content} align="left" />
    </>)
}