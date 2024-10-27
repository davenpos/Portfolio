export default function TableCell(props) {
    const classes = "border border-black"

    return props.td ? <td className={classes} rowSpan={props.rowspan} colSpan={props.colspan}>{props.content}</td> : <th className={classes} rowSpan={props.rowspan} colSpan={props.colspan}>{props.content}</th>
}