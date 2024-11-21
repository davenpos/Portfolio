import qs from "qs"
import Certificate from '@/components/Certificate'
import ClassesTable from '@/components/ClassesTable'
import Description from '@/components/Description'
import Information from '@/components/Information'
import PageHeading from '@/components/PageHeading'
import getStrapi from '@/functions/getStrapi'

export default async function Page({params}) {
    const p = await params
    let query = {
        filters: { slug: p.slug },
        sort: "start:desc"
    }

    const results = await getStrapi("educations", qs.stringify(query))
    const currInstitute = results[0]
    const name = currInstitute.institute
    const degree = currInstitute.degree
    const honours = currInstitute.honours_certificate
    const diploma = currInstitute.diploma

    return (<>
        <PageHeading text={name} topMargin={false} />
        <img src={currInstitute.logo.formats.thumbnail.url} alt={`${name} logo`} className="mx-auto rounded-full mt-2 w-28 mb-2 md:w-auto" />
        <Information type="Years attended" text={`${currInstitute.start}-${currInstitute.end}`} />
        {degree !== "none" ? <Information type="Degree" text={degree} /> : null}
        <Information type="GPA" text={currInstitute.gpa} />
        <br />
        <Description desc={currInstitute.description} align="justify" />
        <br />
        <PageHeading text="Classes:" topMargin={false} />
        <ClassesTable classes={currInstitute.classes} />
        {(honours || diploma) ? <>
            <div className={`${honours && diploma ? "md:grid md:grid-cols-2 md:place-items-center" : ""}`}>
                <Certificate type="Diploma" src={currInstitute.diploma?.formats.small.url} school={name} exists={diploma} />
                <Certificate type="Honours" src={currInstitute.honours_certificate?.formats.small.url} school={name} exists={honours} />
            </div>
        </> : null}
    </>)
}