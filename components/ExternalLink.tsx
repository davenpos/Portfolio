"use client"
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import windowSizeState from '@/functions/windowSizeState'
import type { ExternalLinkProps } from "@/interfaces/ExternalLinkProps"

export default function ExternalLink({link, icon}: ExternalLinkProps) {
    const iconSize = windowSizeState("lg", "2x") as FontAwesomeSize

    return (<>
        {link && <Link href={link} className="hover:opacity-50 cursor-pointer duration-300" target="_blank">
            <FontAwesomeIcon icon={icon} size={iconSize} />
        </Link>}
    </>)
}