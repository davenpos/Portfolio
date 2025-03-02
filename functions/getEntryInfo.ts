import getStrapi from '@/functions/getStrapi'
import { PageSlug } from '@/types/PageSlug'

export default async function getEntryInfo(collection: CollectionTypeSlug, slug: PageSlug) {
    const qs = await import("qs")
    const query = {filters: { slug: slug }}
    const entryInfo = await getStrapi<PageContent>(collection, qs.stringify(query))
    return entryInfo[0]
}