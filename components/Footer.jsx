import ExternalLink from '@/components/ExternalLink'

export default function Footer() {
    const links = [
        {
            link: "https://www.linkedin.com/in/simeon-davenport/",
            icon: "linkedin-square"
        },
        {
            link: "https://github.com/davenpos",
            icon: "github"
        },
        {
            link: "https://x.com/snorbertd1",
            icon: "twitter"
        },
        {
            link: "https://www.instagram.com/snorbertd/",
            icon: "instagram"
        },
        {
            link: "https://www.youtube.com/@NorbertSD",
            icon: "youtube-play"
        },
        {
            link: "mailto:simmywim@hotmail.com",
            icon: "envelope-o"
        },
        {
            link: "tel:+12264023639",
            icon: "phone"
        }
    ]

    return (<footer className="text-center w-full max-w-[1000px] mx-auto bg-orange-800 rounded-[15px] opacity-85 my-3 text-white shadow-lg p-1 z-10">
        <p>
            {links.map((link, i) => (<>
                <ExternalLink key={link.link} link={link.link} icon={link.icon} />
                {i + 1 < links.length ? <>&nbsp;&nbsp;</> : null}
            </>))}
        </p>
        <p className="text-sm">&copy; {new Date().getFullYear()}</p>
        <p className="text-sm">Website powered by Render, built by Simeon Davenport</p>
    </footer>)
}