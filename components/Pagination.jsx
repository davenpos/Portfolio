"use client"
import React from "react"
import useSetQueryParams from '@/hooks/useSetQueryParams'

export default function Pagination({pages, curr, numPerPage, total}) {
    const setQueryParams = useSetQueryParams()
    const pageNums = []
    const params = [{ queryVar: "page" }]

    for (let i = 1; i <= pages; i++) {
        params[0].val = i

        pageNums.push(<React.Fragment key={i}>
            <span className={`duration-300 ${i === curr ? "text-slate-950 font-bold" : "hover:opacity-50 cursor-pointer underline"}`} onClick={() => setQueryParams(params)}>{i}</span>
            {i !== pages && <>&nbsp;&nbsp;</>}
        </React.Fragment>)
    }

    return (<>
        {numPerPage < total && <div className="text-center text-base md:text-lg">{pageNums}</div>}
    </>)
}