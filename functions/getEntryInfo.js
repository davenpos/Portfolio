import qs from "qs"
import getStrapi from '@/functions/getStrapi'

export default async function getEntryInfo(collection, slug, sort = null) {
    let query = {filters: { slug: slug }}
    if (sort) query.sort = sort
    const entryInfo = await getStrapi(collection, qs.stringify(query))
    return entryInfo[0]
}