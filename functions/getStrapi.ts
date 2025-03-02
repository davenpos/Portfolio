export default async function getStrapi<T extends StrapiEntry>(
    slug: CollectionTypeSlug,
    param: string,
    includeMeta: true
): Promise<StrapiAPI<T>>

export default async function getStrapi<T extends StrapiEntry>(
    slug: CollectionTypeSlug,
    param: string,
    includeMeta?: false
): Promise<T[]>

export default async function getStrapi<T extends StrapiEntry>(
    slug: CollectionTypeSlug,
    param: string,
    includeMeta = false
): Promise<T[] | StrapiAPI<T>> {
    let url = `${process.env.NEXT_PUBLIC_STRAPIURL}/api/${slug}?populate=*&${param}`
    const prom = await fetch(url)
    const info: StrapiAPI<T> = await prom.json()
    return includeMeta ? info : info.data as T[]
}