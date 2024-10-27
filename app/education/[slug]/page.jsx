import qs from "qs"
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
    let onlySemInRow = false

    return (<>
        <PageHeading text={name} topMargin={false} />
        <img src={`${process.env.NEXT_PUBLIC_STRAPIURL}${currInstitute.logo.formats.thumbnail.url}`} alt={`${name} logo`} className="mx-auto rounded-full mt-2" />
        <Information type="Years attended" text={`${currInstitute.start}-${currInstitute.end}`} />
        {degree !== "none" ? <Information type="Degree" text={degree} /> : null}
        <Information type="GPA" text={currInstitute.gpa} />
        <br />
        <p className="text-justify text-sm md:text-base">{currInstitute.description}</p>
        <br />
        <PageHeading text="Classes:" topMargin={false} />
        <table className="w-full border border-black border-collapse">
            <tr className="border border-black h-6">
                <th className="border border-black" colSpan="2">Course:</th>
                <th className="border border-black" rowSpan="2">Grade:</th>
                <th className="border border-black" rowSpan="2">Semester:</th>
            </tr>
            <tr className="border border-black h-6">
                <th className="border border-black">Course Code:</th>
                <th className="border border-black">Course Title:</th>
            </tr>
            {currInstitute.classes.map(sem => {
                const semName = sem.semester
                let numOfClasses = sem.classes.length
                if (onlySemInRow) numOfClasses++

                return (sem.classes.map((curr, i) => {
                    if (i > 0 && onlySemInRow) onlySemInRow = false
                    let semSpan = curr.semesterSpan

                    if (semSpan) {
                        semSpan = semSpan.toString()
                        onlySemInRow = true
                    }

                    return (<>
                        {onlySemInRow && i === 0 ? <tr className="border border-black h-6">
                            <td rowSpan={numOfClasses}>{semName}</td>
                        </tr> : null}
                        <tr className="border border-black h-6">
                            <td className="border border-black" rowSpan={semSpan ? semSpan : "1"}>
                                {curr.courseCode}
                            </td>
                            <td className="border border-black" rowSpan={semSpan ? semSpan : "1"}>
                                {curr.courseTitle}
                            </td>
                            <td className="border border-black" rowSpan={semSpan ? semSpan : "1"}>
                                {curr.grade}
                            </td>
                            {i == 0 && !onlySemInRow ? <td className="border border-black" rowSpan={numOfClasses}>
                                {semName}
                            </td> : null}
                        </tr>
                    </>)
                }))}
            )}
        </table>
    </>)
}