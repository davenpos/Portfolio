import React from "react"
import ExternalLink from '@/components/ExternalLink'

export default function Footer() {
    const links = [
        {
            link: "https://www.linkedin.com/in/simeon-davenport/",
            style: "brands",
            icon: "linkedin"
        },
        {
            link: "https://github.com/davenpos",
            style: "brands",
            icon: "github"
        },
        {
            link: "https://x.com/snorbertd1",
            style: "brands",
            icon: "twitter"
        },
        {
            link: "https://www.instagram.com/snorbertd/",
            style: "brands",
            icon: "instagram"
        },
        {
            link: "https://discordapp.com/invite/U6bkBgy",
            style: "brands",
            icon: "discord"
        },
        {
            link: "https://www.youtube.com/@NorbertSD",
            style: "brands",
            icon: "youtube"
        },
        {
            link: "mailto:simmywim@hotmail.com",
            style: "solid",
            icon: "envelope"
        },
        {
            link: "tel:+12264023639",
            style: "solid",
            icon: "phone"
        },
        {
            link: "/resume",
            style: "regular",
            icon: "file-pdf"
        }
    ]

    return (<footer className="text-center w-full max-w-[1000px] mx-auto bg-orange-800 rounded-[15px] opacity-85 my-3 text-white shadow-lg p-1 z-10">
        <p>
            {links.map((link, i) => (<React.Fragment key={link.link}>
                <ExternalLink link={link.link} style={link.style} icon={link.icon} />
                {i + 1 < links.length ? <>&nbsp;&nbsp;</> : null}
            </React.Fragment>))}
        </p>
        <p className="text-sm">&copy; {new Date().getFullYear()}</p>
        <p className="text-sm">Website powered by Render, built by Simeon Davenport</p>
    </footer>)
}