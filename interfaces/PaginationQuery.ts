interface PaginationQuery {
    sort: string
    pagination: {
        start: number
        limit: number
    }
    filters?: {
        languages_stacks: {
            slug: {
                $in: string[]
            }
        }
    }
}