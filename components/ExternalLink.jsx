"use client"
import { useEffect, useState } from "react";

export default function ExternalLink({link, icon}) {
    const [iconSize, setIconSize] = useState("fa-lg")

    useEffect(() => {
        function updateIconSize() {
            if (window.innerWidth > 768) setIconSize("fa-2x")
            else setIconSize("fa-lg")
        }

        updateIconSize()

        window.addEventListener("resize", updateIconSize)
        return () => window.removeEventListener("resize", updateIconSize)
    }, [])

    return (<>
        {link ? <a href={link} className="text-slate-950 hover:opacity-50 cursor-pointer duration-300" target="_blank">
            <i className={`fa fa-${icon} ${iconSize}`}></i>
        </a> : null}
    </>)
}