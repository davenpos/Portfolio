import qs from "qs"
import getStrapi from '@/functions/getStrapi'

export default async function getPaginationVars(props: PageProps, numPerPage: number, slug: CollectionTypeSlug, field: string) {
    const searchParams = await props.searchParams
    const pageNum = searchParams.page ? parseInt(searchParams.page) : 1
    const start = (pageNum - 1) * numPerPage

    let query: PaginationQuery = {
        sort: `${field}:desc`,
        pagination: {
            start: start,
            limit: numPerPage
        }
    }

    const los = searchParams.langOrStack
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

    const pagInfo: StrapiPaginationInfo = {
        data: results.data,
        numOfPages: Math.ceil(total / numPerPage),
        pageNum: pageNum,
        total: total
    }

    return pagInfo
}