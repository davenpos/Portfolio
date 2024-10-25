import qs from "qs"
import PageHeading from '@/components/PageHeading'
import ScreenshotsSlide from '@/components/ScreenshotsSlide'
import getStrapi from '@/functions/getStrapi'

export default async function Page({params}) {
    const p = await params
    const query = qs.stringify({
        filters: { slug: p.slug }
    })

    const results = await getStrapi("projects", query)
    const currProject = results[0]
    const screenshots = currProject.screenshot

    return (<>
        <PageHeading text={currProject.title} />
        <ScreenshotsSlide title={currProject.title} ss={screenshots} />
    </>)
}