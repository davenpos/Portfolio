import TableCell from '@/components/TableCell'

export default function TableRow({cells}) {
    return (<tr className="border border-black h-6">
        {cells.map(c => <TableCell key={c.content} td={c.td} colspan={c.colspan} rowspan={c.rowspan} content={c.content} />)}
    </tr>)
}