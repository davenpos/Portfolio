import Description from '@/components/Description'
import PageHeading from '@/components/PageHeading'
import getStrapi from '@/functions/getStrapi'
import queryString from '@/functions/queryString'
import imgSrc from '@/assets/SD.jpg';

export default async function Page() {
    const query = queryString("about")
    const pageContents = await getStrapi("page-contents", query)
    const currPageContent = pageContents[0]

    return (<>
        <PageHeading text="About Simeon" topMargin={false} />
        <img src={imgSrc.src} alt="Simeon Davenport" className="w-36 md:w-auto float-left mr-3" />
        <Description desc={currPageContent.content} align="left" />
    </>)
}