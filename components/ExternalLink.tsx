"use client"
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import windowSizeState from '@/functions/windowSizeState'

export default function ExternalLink({link, icon}: {link: FooterLinkHref, icon: IconDefinition}) {
    const iconSize = windowSizeState("lg", "2x") as FontAwesomeSize

    return (<>
        {link && <Link href={link} className="hover:opacity-50 cursor-pointer duration-300" target="_blank">
            <FontAwesomeIcon icon={icon} size={iconSize} />
        </Link>}
    </>)
}