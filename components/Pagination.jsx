"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from "react"

export default function Pagination({pages, curr}) {
    const pathname = usePathname()
    const pageNums = []

    for (let i = 1; i <= pages; i++) {
        if (i === curr) {
            pageNums.push(<React.Fragment key={i}>
                <span className="text-slate-950 underline font-bold">{i}</span>
                {i !== pages ? <>&nbsp;&nbsp;</> : null}
            </React.Fragment>)
        } else {
            pageNums.push(<React.Fragment key={i}>
                <Link href={`${pathname}?page=${i}`} className="hover:opacity-50">{i}</Link>
                {i !== pages ? <>&nbsp;&nbsp;</> : null}
            </React.Fragment>)
        }
    }

    return <div className="text-center text-base md:text-lg duration-300">{pageNums}</div>
}