const dotenv = require('dotenv')
dotenv.config()

export default async function getStrapi(slug, param = null) {
    let url = `${process.env.STRAPIURL}/api/${slug}?populate=*`
    if (param) url += `&${param}`

    const prom = await fetch(url)
    const info = await prom.json()
    let data = info.data.sort((a, b) => new Date(b.date) - new Date(a.date))
    return data
}