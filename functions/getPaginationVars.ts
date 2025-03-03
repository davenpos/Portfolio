import qs from "qs"
import getStrapi from '@/functions/getStrapi'

export default async function getPaginationVars<T extends StrapiEntry>(
    sp: SearchParams,
    numPerPage: number,
    slug: CollectionTypeSlug,
    field: string
): Promise<StrapiPaginationInfo<T>> {
    const searchParams = await sp
    const pageNum = searchParams.page ? parseInt(searchParams.page as string) : 1
    const start = (pageNum - 1) * numPerPage

    let query: PaginationQuery = {
        sort: `${field}:desc`,
        pagination: {
            start: start,
            limit: numPerPage
        }
    }

    const los = [searchParams.langOrStack] as string[]

    if (los) {
        query.filters = {
            languages_stacks: {
                slug: {
                    $in: los
                }
            }
        }
    }

    const results = await getStrapi<T>(slug, qs.stringify(query), true)
    const total = results.meta.pagination.total

    return {
        data: results.data,
        numOfPages: Math.ceil(total / numPerPage),
        pageNum: pageNum,
        total: total
    }
}