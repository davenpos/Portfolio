"use client"
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import React from "react"

export default function Pagination({pages, curr}) {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const pageNums = []

    function changePage(num) {
        const params = new URLSearchParams(searchParams)
        params.set('page', num)
        replace(`${pathname}?${params.toString()}`)
    }

    for (let i = 1; i <= pages; i++) {
        pageNums.push(<React.Fragment key={i}>
            <span className={`duration-300 ${i === curr ? "text-slate-950 underline font-bold" : "hover:opacity-50 cursor-pointer"}`} onClick={() => changePage(i)}>{i}</span>
            {i !== pages ? <>&nbsp;&nbsp;</> : null}
        </React.Fragment>)
    }

    return <div className="text-center text-base md:text-lg">{pageNums}</div>
}