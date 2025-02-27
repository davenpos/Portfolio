export default async function getStrapi(slug: CollectionTypeSlug, param: string, includeMeta: true): Promise<StrapiAPI>

export default async function getStrapi(slug: CollectionTypeSlug, param: string, includeMeta?: false): Promise<StrapiEntry[]>

export default async function getStrapi(slug: CollectionTypeSlug, param: string, includeMeta = false): Promise<StrapiEntry[] | StrapiAPI> {
    let url = `${process.env.NEXT_PUBLIC_STRAPIURL}/api/${slug}?populate=*&${param}`
    const prom = await fetch(url)
    const info: StrapiAPI = await prom.json()
    return includeMeta ? info : info.data
}