"use client"
import React, { useContext } from "react"
import { LangsLinks } from './Projects'
import useSetQueryParams from '@/hooks/useSetQueryParams'

export default function LanguagesAndStacks({arr, divClasses}: {arr: LanguagesAndStacks[], divClasses: string}) {
    const setQueryParams = useSetQueryParams()
    const links = useContext(LangsLinks)

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
                {i < arr.length - 1 && <span className="cursor-default">&nbsp;</span>}
            </React.Fragment>)
        })}
    </div>)
}