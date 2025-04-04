"use client"
import { Suspense } from "react"
import Link from 'next/link'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import ExternalLink from '@/components/ExternalLink'
import LanguagesAndStacks from '@/components/LanguagesAndStacks'

export default function ProjectListing(props) {
    return (<div className="flex flex-col md:flex-row md:gap-3 my-3">
        <div className="overflow-hidden flex-shrink-0 w-[350px] m-auto">
            <img src={props.img} className="object-cover w-full h-auto mb-2" alt="Project Image" />
            {props.link && <ExternalLink className="text-slate-950" link={props.link} icon={faLink} />}
            {props.link && props.code && <span>&nbsp;</span>}
            {props.code && <ExternalLink className="text-slate-950" link={props.code} icon={faGithub} />}
        </div>
        <div className="flex flex-col max-w-full overflow-hidden">
            <div className="text-center md:text-left">
                <Link href={`/projects/${props.slug}`} className="font-bold text-xl hover:opacity-50 duration-300">
                    {props.title}
                </Link>
            </div>
            <Suspense fallback={null}>
                <LanguagesAndStacks arr={props.las} />
            </Suspense>
            <p className="text-sm md:text-base w-full break-words overflow-hidden">
                {props.desc}
            </p>
        </div>
    </div>)
}