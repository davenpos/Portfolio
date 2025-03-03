interface TableCell {
    key?: string | number
    td: boolean
    colspan: CellSpan
    rowspan: CellSpan
    content: string | number
}