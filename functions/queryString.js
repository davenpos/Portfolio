import qs from "qs"

export default function queryString(slug) {
    let query = qs.stringify({
        filters: { slug: slug }
    })
    return query
}