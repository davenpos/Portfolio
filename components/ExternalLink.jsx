"use client"
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import windowSizeState from '@/functions/windowSizeState'

export default function ExternalLink({link, icon}) {
    const iconSize = windowSizeState("lg", "2x")

    return (<>
        {link ? <Link href={link} className="hover:opacity-50 cursor-pointer duration-300" target="_blank">
            <FontAwesomeIcon icon={icon} size={iconSize} />
        </Link> : null}
    </>)
}