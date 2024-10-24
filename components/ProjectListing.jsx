import Link from 'next/link'

export default function ProjectListing(props) {
    const descArray = props.desc.split(' ')
    const excerpt = descArray.length < 30 ? props.desc : descArray.slice(0, 30).join(' ') + "..."

    return (
        <div className="grid grid-cols-[350px_1fr] gap-3 mt-2">
            <img src={`http://localhost:1337/${props.img}`} />
            <div>
                <Link href={`/projects/${props.slug}`}>{props.title}</Link>
                <p>{excerpt}</p>
            </div>
        </div>
    )
}