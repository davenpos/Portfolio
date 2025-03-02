interface StrapiAPI<T extends StrapiEntry> {
    data: T[]
    meta: {
        pagination: {
            page: number
            pageSize: number
            pageCount: number
            total: number
        }
    }
}