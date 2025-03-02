import React from "react"
import ExternalLink from '@/components/ExternalLink'
import { faLinkedin, faGithub, faBluesky, faInstagram, faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import type { FooterLink } from "@/interfaces/FooterLink"
import createHrefPageSlug from '@/functions/createHrefPageSlug'
import createValidURL from '@/functions/createValidURL'

export default function Footer() {
    const resumePage = createHrefPageSlug("/resume")

    const links: FooterLink[] = [
        {
            id: 1,
            link: createValidURL("https://www.linkedin.com/in/simeon-davenport/"),
            icon: faLinkedin
        },
        {
            id: 2,
            link: createValidURL("https://github.com/davenpos"),
            icon: faGithub
        },
        {
            id: 3,
            link: createValidURL("https://bsky.app/profile/snorbertd.bsky.social"),
            icon: faBluesky
        },
        {
            id: 4,
            link: createValidURL("https://www.instagram.com/snorbertd/"),
            icon: faInstagram
        },
        {
            id: 5,
            link: createValidURL("https://discordapp.com/invite/U6bkBgy"),
            icon: faDiscord
        },
        {
            id: 6,
            link: createValidURL("https://www.youtube.com/@NorbertSD"),
            icon: faYoutube
        },
        {
            id: 7,
            link: "mailto:simmywim@hotmail.com",
            icon: faEnvelope
        },
        {
            id: 8,
            link: "tel:+12264023639",
            icon: faPhone
        },
        {
            id: 9,
            link: resumePage,
            icon: faFilePdf
        }
    ]

    return (<footer className="text-center w-full max-w-[1000px] mx-auto bg-orange-800 rounded-[15px] opacity-85 my-3 text-white shadow-lg p-1 z-10">
        <p>
            {links.map((link, i) => (<React.Fragment key={link.id}>
                <ExternalLink link={link.link} icon={link.icon} />
                {i + 1 < links.length && <>&nbsp;&nbsp;</>}
            </React.Fragment>))}
        </p>
        <p className="text-sm">&copy; {new Date().getFullYear()}</p>
        <p className="text-sm">Website powered by Render, built by Simeon Davenport</p>
    </footer>)
}