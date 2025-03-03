export default function TableCell(props: TableCell) {
    const classes = "border border-black"
    const rowSpan = parseInt(props.rowspan)
    const colSpan = parseInt(props.colspan)

    return props.td ? <td className={classes} rowSpan={rowSpan} colSpan={colSpan}>{props.content}</td> : <th className={classes} rowSpan={rowSpan} colSpan={colSpan}>{props.content}</th>
}