import qs from "qs"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import Description from '@/components/Description'
import ExternalLink from '@/components/ExternalLink'
import Information from '@/components/Information'
import LanguagesAndStacks from '@/components/LanguagesAndStacks'
import PageHeading from '@/components/PageHeading'
import ScreenshotsSlide from '@/components/ScreenshotsSlide'
import getStrapi from '@/functions/getStrapi'

export default async function Page({params}) {
    const p = await params
    let query = {
        filters: { slug: p.slug },
        sort: "date:desc"
    }

    const results = await getStrapi("projects", qs.stringify(query))
    const currProject = results[0]
    const title = currProject.title
    const languagesAndStacks = currProject.languages_stacks
    const screenshots = currProject.screenshot
    const link = currProject.link
    const code = currProject.code

    return (<>
        <PageHeading text={title} topMargin={false} />
        <LanguagesAndStacks arr={languagesAndStacks} divClasses="text-center my-1.5" />
        <ScreenshotsSlide title={title} ss={screenshots} />
        <ExternalLink className="text-slate-950" link={link} icon={faLink} />
        {link && code ? <span>&nbsp;</span> : null}
        <ExternalLink className="text-slate-950" link={code} icon={faGithub} />
        <Information type="Original date completed" text={currProject.date} />
        <br />
        <Description desc={currProject.description} align="justify" />
    </>)
}