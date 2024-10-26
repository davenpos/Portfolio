import qs from "qs"
import ExternalLink from '@/components/ExternalLink'
import Information from '@/components/Information'
import PageHeading from '@/components/PageHeading'
import ScreenshotsSlide from '@/components/ScreenshotsSlide'
import getStrapi from '@/functions/getStrapi'
import React from "react"

export default async function Page({params}) {
    const p = await params
    let query = qs.stringify({
        filters: { slug: p.slug }
    })
    query += "&sort=date:desc"

    const results = await getStrapi("projects", query)
    const currProject = results[0]
    const title = currProject.title
    const screenshots = currProject.screenshot
    let description = currProject.description
    description = description.split("\n")

    return (<>
        <PageHeading text={title} topMargin={false} />
        <ScreenshotsSlide title={title} ss={screenshots} />
        <ExternalLink link={currProject.link} icon="link" />
        <ExternalLink link={currProject.code} icon="github" />
        <Information type="Languages" text={currProject.languages} />
        <Information type="Stacks/frameworks" text={currProject.stacks_frameworks} />
        <Information type="Original date completed" text={currProject.date} />
        <br />
        {description.map((p, i) => (<React.Fragment key={i}>
            {p !== "" ? <>
                <p className="text-justify text-sm md:text-base">{p}</p>
                {i < description.length - 1 ? <br /> : null}
            </> : null}
        </React.Fragment>))}
    </>)
}