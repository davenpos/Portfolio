export default async function getStrapi(slug, param = null) {
    let url = `http://localhost:1337/api/${slug}?populate=*`
    if (param) url += `&${param}`

    const prom = await fetch(url)
    const info = await prom.json()
    let data = info.data.sort((a, b) => new Date(b.date) - new Date(a.date))
    return data
}