import TableRow from '@/components/TableRow'

export default function ClassesTable({classes}) {
    let onlySemInRow = false

    const headRow1 = [
        {
            td: false,
            colspan: "2",
            rowspan: "1",
            content: "Course:"
        },
        {
            td: false,
            colspan: "1",
            rowspan: "2",
            content: "Grade:"
        },
        {
            td: false,
            colspan: "1",
            rowspan: "2",
            content: "Semester:"
        }
    ]

    const headRow2 = [
        {
            td: false,
            colspan: "1",
            rowspan: "1",
            content: "Course Code:"
        },
        {
            td: false,
            colspan: "1",
            rowspan: "1",
            content: "Course Title:"
        }
    ]

    return (<table className="w-full border border-black border-collapse">
        <thead>
            <TableRow cells={headRow1} />
            <TableRow cells={headRow2} />
        </thead>
        <tbody>
            {classes.map(sem => {
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

                    const onlySemCell = [
                        {
                            td: true,
                            colspan: "1",
                            rowspan: numOfClasses.toString(),
                            content: semName
                        }
                    ]

                    const courseInfo = [
                        {
                            td: true,
                            colspan: "1",
                            rowspan: semSpan ? semSpan : "1",
                            content: curr.courseCode
                        },
                        {
                            td: true,
                            colspan: "1",
                            rowspan: semSpan ? semSpan : "1",
                            content: curr.courseTitle
                        },
                        {
                            td: true,
                            colspan: "1",
                            rowspan: semSpan ? semSpan : "1",
                            content: curr.grade
                        }
                    ]

                    if (i == 0 && !onlySemInRow) {
                        courseInfo.push({
                            td: true,
                            colspan: "1",
                            rowspan: numOfClasses,
                            content: semName
                        })
                    }

                    return (<>
                        {onlySemInRow && i === 0 ? <TableRow cells={onlySemCell} /> : null}
                        <TableRow cells={courseInfo} />
                    </>)
                }))}
            )}
        </tbody>
    </table>)
}