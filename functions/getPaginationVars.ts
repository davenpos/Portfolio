import qs from "qs"
import getStrapi from '@/functions/getStrapi'

export default async function getPaginationVars(sp: SearchParams, numPerPage: number, slug: CollectionTypeSlug, field: string) {
    const searchParams = await sp
    const pageNum = Array.isArray(searchParams.page) ? parseInt(searchParams.page[0]) : parseInt(searchParams.page || '1')
    const start = (pageNum - 1) * numPerPage

    let query: PaginationQuery = {
        sort: `${field}:desc`,
        pagination: {
            start: start,
            limit: numPerPage
        }
    }

    const los = searchParams.langOrStack ?
        Array.isArray(searchParams.langOrStack) ? searchParams.langOrStack : [searchParams.langOrStack] 
    : undefined

    if (los) {
        query.filters = {
            languages_stacks: {
                slug: {
                    $in: los
                }
            }
        }
    }

    const results = await getStrapi(slug, qs.stringify(query), true)
    const total = results.meta.pagination.total

    return {
        data: results.data,
        numOfPages: Math.ceil(total / numPerPage),
        pageNum: pageNum,
        total: total
    }
}