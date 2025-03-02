import SchoolCertificate from '@/components/SchoolCertificate'
import ClassesTable from '@/components/ClassesTable'
import Description from '@/components/Description'
import Information from '@/components/Information'
import PageHeading from '@/components/PageHeading'
import getEntryInfo from '@/functions/getEntryInfo'
import createValidURL from '@/functions/createValidURL'

export default async function Page({params}: {params: PageParams}) {
    const p = await params
    const currInstitute = await getEntryInfo<Institute>('educations', p.slug)
    const name = currInstitute.institute
    const degree = currInstitute.degree
    const honours = currInstitute.honours_certificate
    const diploma = currInstitute.diploma
    const honoursSRC = createValidURL(honours ? (honours?.formats.small?.url || honours?.formats.thumbnail.url) : "")
    const diplomaSRC = createValidURL(diploma ? (diploma?.formats.small?.url || diploma?.formats.thumbnail.url) : "")

    return (<>
        <PageHeading text={name} topMargin={false} />
        <img src={currInstitute.logo.formats.thumbnail.url} alt={`${name} logo`} className="mx-auto rounded-full mt-2 w-28 mb-2 md:w-auto" />
        <Information type="Years attended" text={`${currInstitute.start}-${currInstitute.end}`} />
        {degree !== "none" && <Information type="Degree" text={degree} />}
        <Information type="GPA" text={currInstitute.gpa} />
        <br />
        <Description desc={currInstitute.description} align="justify" />
        <br />
        <PageHeading text="Classes:" topMargin={false} />
        <ClassesTable classes={currInstitute.classes} />
        {(honours || diploma) && <>
            <div className={`${honours && diploma ? "md:grid md:grid-cols-2 md:place-items-center" : ""}`}>
                <SchoolCertificate type="Diploma" src={honoursSRC} school={name} exists={diploma} />
                <SchoolCertificate type="Honours" src={diplomaSRC} school={name} exists={honours} />
            </div>
        </>}
    </>)
}