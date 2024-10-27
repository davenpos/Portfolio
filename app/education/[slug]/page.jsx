import qs from "qs"
import ClassesTable from '@/components/ClassesTable'
import Information from '@/components/Information'
import PageHeading from '@/components/PageHeading'
import getStrapi from '@/functions/getStrapi'

export default async function Page({params}) {
    const p = await params
    let query = qs.stringify({
        filters: { slug: p.slug }
    })
    query += "&sort=start:desc"

    const results = await getStrapi("educations", query)
    const currInstitute = results[0]
    const name = currInstitute.institute
    const degree = currInstitute.degree

    return (<>
        <PageHeading text={name} topMargin={false} />
        <img src={`${process.env.NEXT_PUBLIC_STRAPIURL}${currInstitute.logo.formats.thumbnail.url}`} alt={`${name} logo`} className="mx-auto rounded-full mt-2 w-28 mb-2 md:w-auto" />
        <Information type="Years attended" text={`${currInstitute.start}-${currInstitute.end}`} />
        {degree !== "none" ? <Information type="Degree" text={degree} /> : null}
        <Information type="GPA" text={currInstitute.gpa} />
        <br />
        <p className="text-justify text-sm md:text-base">{currInstitute.description}</p>
        <br />
        <PageHeading text="Classes:" topMargin={false} />
        <ClassesTable classes={currInstitute.classes} />
    </>)
}