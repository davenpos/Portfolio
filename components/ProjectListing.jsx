import Link from 'next/link'
import LanguagesAndStacks from '@/components/LanguagesAndStacks'

export default function ProjectListing(props) {
    const descArray = props.desc.split(' ')
    const excerpt = descArray.length < 70 ? props.desc : descArray.slice(0, 70).join(' ') + "..."

    return (<div className="container mx-auto my-3 overflow-hidden max-w-screen">
        <div className="flex flex-col md:flex-row md:gap-3">
            <Link href={`/projects/${props.slug}`} className="overflow-hidden flex-shrink-0 w-[350px]">
                <img src={`${process.env.NEXT_PUBLIC_STRAPIURL}/${props.img}`} className="object-cover hover:opacity-70 duration-300 hover:scale-125 w-full h-auto" alt="Project Image" />
            </Link>
            <div className="flex flex-col max-w-full w-full overflow-hidden">
                <Link href={`/projects/${props.slug}`} className="font-bold text-xl hover:opacity-50 duration-300 text-center md:text-left w-full">
                    {props.title}
                </Link>
                <div className="hide-scrollbars w-full max-w-full overflow-x-auto whitespace-nowrap">
                    <LanguagesAndStacks arr={props.las} links={true} />
                </div>
                <p className="text-sm md:text-base w-full break-words overflow-hidden">
                    {excerpt}
                </p>
            </div>
        </div>
    </div>)
}