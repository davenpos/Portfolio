import React from "react"
import ExternalLink from '@/components/ExternalLink'
import { faLinkedin, faGithub, faBluesky, faInstagram, faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'

export default function Footer() {
    const links = [
        {
            link: "https://www.linkedin.com/in/simeon-davenport/",
            icon: faLinkedin
        },
        {
            link: "https://github.com/davenpos",
            icon: faGithub
        },
        {
            link: "mailto:simmywim@hotmail.com",
            icon: faEnvelope
        },
        {
            link: "/resume",
            icon: faFilePdf
        }
    ]

    return (<footer className="text-center w-full max-w-[1000px] mx-auto bg-orange-800 rounded-[15px] opacity-85 my-3 text-white shadow-lg p-1 z-10">
        <p>
            {links.map((link, i) => (<React.Fragment key={link.link}>
                <ExternalLink link={link.link} icon={link.icon} />
                {i + 1 < links.length && <>&nbsp;&nbsp;</>}
            </React.Fragment>))}
        </p>
        <p className="text-sm">&copy; {new Date().getFullYear()}</p>
        <p className="text-sm">Website powered by Render, built by Simeon Davenport</p>
    </footer>)
}