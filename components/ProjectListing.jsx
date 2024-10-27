import Link from 'next/link'
const dotenv = require('dotenv')
dotenv.config()

export default function ProjectListing(props) {
    const descArray = props.desc.split(' ')
    const excerpt = descArray.length < 80 ? props.desc : descArray.slice(0, 80).join(' ') + "..."

    return (<div className="md:grid md:grid-cols-[350px_1fr] md:gap-3 my-3">
        <Link href={`/projects/${props.slug}`} className="overflow-hidden">
            <img src={`${process.env.NEXT_PUBLIC_STRAPIURL}/${props.img}`} className="object-cover hover:opacity-70 duration-300 hover:scale-125" width="350" />
        </Link>
        <div>
            <Link href={`/projects/${props.slug}`} className="hover:opacity-50 duration-300 font-bold text-xl block text-center md:text-left">
                {props.title}
            </Link>
            <p className="text-sm md:text-base">{excerpt}</p>
        </div>
    </div>)
}