"use client"
import Link from 'next/link'
import windowSizeState from '@/functions/windowSizeState'

export default function ExternalLink({link, style, icon}) {
    const iconSize = windowSizeState("fa-lg", "fa-2x")

    return (<>
        {link ? <Link href={link} className="hover:opacity-50 cursor-pointer duration-300" target="_blank">
            <i className={`fa-${style} fa-${icon} ${iconSize}`}></i>
        </Link> : null}
    </>)
}