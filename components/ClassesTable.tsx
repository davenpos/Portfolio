"use client"
import React from "react"
import TableRow from '@/components/TableRow'
import windowSizeState from '@/functions/windowSizeState'

export default function ClassesTable({classes}: {classes: Semester[]}) {
    let onlySemInRow = false
    const courseCodeText = windowSizeState("Code:", "Course Code:")
    const courseTitleText = windowSizeState("Title:", "Course Title:")

    const headRow1: TableCell[] = [
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

    const headRow2: TableCell[] = [
        {
            td: false,
            colspan: "1",
            rowspan: "1",
            content: courseCodeText
        },
        {
            td: false,
            colspan: "1",
            rowspan: "1",
            content: courseTitleText
        }
    ]

    return (<table className="w-full border border-black border-collapse text-sm md:text-base">
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
                    let semSpanString
                    let rowSpanString = numOfClasses.toString() as CellSpan

                    if (semSpan) {
                        semSpanString = semSpan.toString() as CellSpan
                        onlySemInRow = true
                    }

                    const onlySemCell: TableCell[] = [
                        {
                            td: true,
                            colspan: "1",
                            rowspan: rowSpanString,
                            content: semName
                        }
                    ]

                    const courseInfo: TableCell[] = [
                        {
                            td: true,
                            colspan: "1",
                            rowspan: semSpanString || "1",
                            content: curr.courseCode
                        },
                        {
                            td: true,
                            colspan: "1",
                            rowspan: semSpanString || "1",
                            content: curr.courseTitle
                        },
                        {
                            td: true,
                            colspan: "1",
                            rowspan: semSpanString || "1",
                            content: curr.grade ? curr.grade : "N/A"
                        }
                    ]

                    if (i == 0 && !onlySemInRow) {
                        courseInfo.push({
                            td: true,
                            colspan: "1",
                            rowspan: rowSpanString,
                            content: semName
                        })
                    }

                    return (<React.Fragment key={`${semName}-${i}`}>
                        {onlySemInRow && i === 0 && <TableRow cells={onlySemCell} />}
                        <TableRow cells={courseInfo} />
                    </React.Fragment>)
                }))}
            )}
        </tbody>
    </table>)
}