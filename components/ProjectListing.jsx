import Link from 'next/link'
const dotenv = require('dotenv')
dotenv.config()

export default function ProjectListing(props) {
    const descArray = props.desc.split(' ')
    const excerpt = descArray.length < 80 ? props.desc : descArray.slice(0, 80).join(' ') + "..."

    return (
        <div className="grid grid-cols-[350px_1fr] gap-3 mt-3">
            <Link href={`/projects/${props.slug}`} className="overflow-hidden">
                <img src={`${process.env.NEXT_PUBLIC_STRAPIURL}/${props.img}`} className="object-cover hover:opacity-70 duration-300 hover:scale-125" width="350" />
            </Link>
            <div>
                <Link href={`/projects/${props.slug}`} className="hover:opacity-50 duration-300 font-bold text-xl">
                    {props.title}
                </Link>
                <p>{excerpt}</p>
            </div>
        </div>
    )
}