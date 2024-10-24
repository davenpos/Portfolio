export default async function getStrapi(slug, id = null) {
    let url = `http://localhost:1337/api/${slug}`
    if (id) url += `/${id}`

    const prom = await fetch(url)
    const info = await prom.json()
    let data = info.data.sort((a, b) => new Date(b.date) - new Date(a.date))
    return data
}