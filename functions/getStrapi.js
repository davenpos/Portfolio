const dotenv = require('dotenv')
dotenv.config()

export default async function getStrapi(slug, param, includeMeta = false) {
    let url = `${process.env.NEXT_PUBLIC_STRAPIURL}/api/${slug}?populate=*&${param}`
    const prom = await fetch(url)
    const info = await prom.json()
    return includeMeta ? info : info.data
}