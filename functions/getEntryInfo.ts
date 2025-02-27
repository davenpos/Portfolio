import qs from "qs"
import getStrapi from '@/functions/getStrapi'

export default async function getEntryInfo(collection: CollectionTypeSlug, slug: PageSlug): Promise<StrapiEntry> {
    const query = {filters: { slug: slug }}
    const entryInfo = await getStrapi(collection, qs.stringify(query))
    return entryInfo[0]
}