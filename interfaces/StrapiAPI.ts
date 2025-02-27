interface StrapiAPI {
    data: StrapiEntry[]
    meta?: {
        pagination: {
            page: number
            pageSize: number
            pageCount: number
            total: number
        }
    }
}