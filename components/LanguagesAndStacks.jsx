"use client"
import React from "react"
import useSetQueryParams from '@/hooks/useSetQueryParams'

export default function LanguagesAndStacks({arr, links, divClasses}) {
    const setQueryParams = useSetQueryParams()

    return (<div className={divClasses}>
        {arr.map((los, i) => {
            const params = [
                {
                    queryVar: 'langOrStack',
                    val: los.slug
                },
                {
                    queryVar: 'page',
                    val: 1
                }
            ]

            return (<React.Fragment key={los.id}>
                {links ?
                    <span className="bg-black text-white rounded-full p-1 font-mono hover:bg-white hover:text-black duration-300 cursor-pointer" onClick={() => setQueryParams(params)}>{los.name}</span>
                    :
                    <span className="bg-black text-white rounded-full p-1 font-mono cursor-default">{los.name}</span>
                }
                {i < arr.length - 1 ? <span className="cursor-default">&nbsp;</span> : null}
            </React.Fragment>)
        })}
    </div>)
}