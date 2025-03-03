interface StrapiPaginationInfo<T extends StrapiEntry> {
    data: T[]
    numOfPages: number
    pageNum: number
    total: number
}