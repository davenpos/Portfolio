import qs from "qs"
import getStrapi from '@/functions/getStrapi'

export default async function Page({params}) {
    const p = await params
    const query = qs.stringify({
        filters: { slug: p.slug }
    })

    const results = await getStrapi("projects", query)
    const currProject = results[0]

    return (
        <div>{currProject.title}</div>
    )
}