export default async function getStrapi(slug: string, param: string, includeMeta = false): Promise<StrapiAPIInfo> {
    let url: string = `${process.env.NEXT_PUBLIC_STRAPIURL}/api/${slug}?populate=*&${param}`
    const prom: Response = await fetch(url)
    const info: StrapiAPI = await prom.json()
    return includeMeta ? info : info.data
}