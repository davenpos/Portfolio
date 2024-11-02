import qs from "qs"
import Description from '@/components/Description'
import PageHeading from '@/components/PageHeading'
import getStrapi from '@/functions/getStrapi'
import imgSrc from '@/assets/SD.jpg'

export default async function Page() {
    const stringifiedQuery = qs.stringify({filters: { slug: "about" }})
    const pageContents = await getStrapi("page-contents", stringifiedQuery)
    const currPageContent = pageContents[0]

    return (<>
        <PageHeading text="About Simeon" topMargin={false} />
        <img src={imgSrc.src} alt="Simeon Davenport" className="w-36 md:w-auto float-left mr-3" />
        <Description desc={currPageContent.content} align="left" />
    </>)
}