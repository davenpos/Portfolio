import PageHeading from '@/components/PageHeading'
import Description from '@/components/Description'
import ExternalLink from '@/components/ExternalLink'
import Information from '@/components/Information'
import getEntryInfo from '@/functions/getEntryInfo'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export default async function Page({params}) {
    const p = await params
    const currProject = await getEntryInfo('certificates', p.slug)
    const name = currProject.name
    const instructor = currProject?.instructor
    const completed = currProject.completed
    const link = currProject?.link
    const desc = currProject.description
    const picture = currProject.picture.formats.medium.url

    return (<>
        <PageHeading text={name} topMargin={false} />
        <img src={picture} alt={`Certificate for ${name}`} className="w-2/3 md:w-1/2 md:mb-2 block m-auto" />
        {link && <ExternalLink className="text-slate-950" link={link} icon={faLink} />}
        <Information type="Completed" text={completed} />
        {instructor && <Information type="Instructor" text={instructor} />}
        <br />
        <Description desc={desc} align="justify" />
    </>)
}