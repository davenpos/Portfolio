import qs from "qs"
import getStrapi from '@/functions/getStrapi'

export default async function getPaginationVars(props, numPerPage, slug, field) {
    const searchParams = await props.searchParams
    const pageNum = searchParams.page ? parseInt(searchParams.page) : 1
    const start = (pageNum - 1) * numPerPage

    const query = {
        sort: `${field}:desc`,
        pagination: {
            start: start,
            limit: numPerPage
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