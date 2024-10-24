import Link from 'next/link'

export default function ProjectListing(props) {
    return (
        <div>
            <Link href={`/projects/${props.slug}`}>{props.title}</Link>
        </div>
    )
}