"use client"
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import React from "react"

//http://localhost:1337/api/projects?filters[languages_stacks][slug][$in]=java&populate=*

export default function LanguagesAndStacks({arr, links, divClasses}) {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const { replace } = useRouter()

    function langOrStackOnly(los) {
        const params = new URLSearchParams(searchParams)
        params.set('langOrStack', los)
        replace(`${pathname}?${params.toString()}`)
    }

    return (<div className={divClasses}>
        {arr.map((los, i) => <React.Fragment key={los.id}>
            {links ?
                <span className="bg-black text-white rounded-full p-1 font-mono hover:bg-white hover:text-black duration-300 cursor-pointer" onClick={() => langOrStackOnly(los.slug)}>{los.name}</span>
                :
                <span className="bg-black text-white rounded-full p-1 font-mono cursor-default">{los.name}</span>
            }
            {i < arr.length - 1 ? <span className="cursor-default">&nbsp;</span> : null}
        </React.Fragment>)}
    </div>)
}