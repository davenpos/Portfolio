import Description from '@/components/Description'
import ExternalLink from '@/components/ExternalLink'
import Information from '@/components/Information'
import PageHeading from '@/components/PageHeading'
import ScreenshotsSlide from '@/components/ScreenshotsSlide'
import getStrapi from '@/functions/getStrapi'
import queryString from '@/functions/queryString'

export default async function Page({params}) {
    const p = await params
    let query = queryString(p.slug)
    query += "&sort=date:desc"

    const results = await getStrapi("projects", query)
    const currProject = results[0]
    const title = currProject.title
    const screenshots = currProject.screenshot

    return (<>
        <PageHeading text={title} topMargin={false} />
        <ScreenshotsSlide title={title} ss={screenshots} />
        <ExternalLink className="text-slate-950" link={currProject.link} icon="link" />
        <ExternalLink className="text-slate-950" link={currProject.code} icon="github" />
        <Information type="Languages" text={currProject.languages} />
        <Information type="Stacks/frameworks" text={currProject.stacks_frameworks} />
        <Information type="Original date completed" text={currProject.date} />
        <br />
        <Description desc={currProject.description} align="justify" />
    </>)
}