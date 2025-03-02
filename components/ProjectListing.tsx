"use client"
import { Suspense } from "react"
import Link from 'next/link'
import LanguagesAndStacks from '@/components/LanguagesAndStacks'
import getExcerpt from '@/functions/getExcerpt'

export default function ProjectListing(props: ProjectProps) {
    const excerpt = getExcerpt(props.desc, 70)

    return (<div className="flex flex-col md:flex-row md:gap-3 my-3">
        <Link href={`/projects/${props.slug}`} className="overflow-hidden flex-shrink-0 w-[350px] m-auto">
            <img src={props.img} className="object-cover hover:opacity-70 duration-300 hover:scale-125 w-full h-auto" alt="Project Image" />
        </Link>
        <div className="flex flex-col max-w-full overflow-hidden">
            <div className="text-center md:text-left">
                <Link href={`/projects/${props.slug}`} className="font-bold text-xl hover:opacity-50 duration-300">
                    {props.title}
                </Link>
            </div>
            <Suspense fallback={null}>
                <LanguagesAndStacks arr={props.las} divClasses="hide-scrollbars w-full max-w-full whitespace-nowrap text-center md:text-left" />
            </Suspense>
            <p className="text-sm md:text-base w-full break-words overflow-hidden">
                {excerpt}
            </p>
        </div>
    </div>)
}