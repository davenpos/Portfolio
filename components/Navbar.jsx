import React, { useEffect } from 'react'
import MenuLink from '@/components/MenuLink'
import windowSizeState from '@/functions/windowSizeState'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Navbar({menuOpen, setMenuOpen}) {
    const menuLinks = [
        {
            id: 1,
            name: "Home",
            href: "/"
        },
        {
            id: 2,
            name: "About",
            href: "/about"
        },
        {
            id: 3,
            name: "Projects",
            href: "/projects"
        },
        {
            id: 4,
            name: "Education",
            href: "/education"
        },
        /*{
            id: 5,
            name: "Certificates",
            href: "/certificates"
        },*/
        {
            id: 6,
            name: "Contact",
            href: "/contact"
        }
    ]

    const windowSize = windowSizeState("small", "large")

    useEffect(() => {
        if (menuOpen) document.body.classList.add("overflow-hidden")
        else document.body.classList.remove("overflow-hidden")

        return () => document.body.classList.remove("overflow-hidden")
    }, [menuOpen])

    useEffect(() => {
        if (windowSize === "large" && menuOpen) setMenuOpen(false)
    }, [windowSize, menuOpen, setMenuOpen])

    return(<>
        <nav className={`bg-amber-600 z-30 ${windowSize === "small" ? `w-full absolute top-0 left-0 opacity-90 text-left px-3 py-2 transition duration-300 ${!menuOpen && "-translate-y-full"}` : "inline-block text-base md:text-xl py-1 text-slate-800 rounded-full cursor-default"}`} >
            {windowSize === "small" && <FontAwesomeIcon icon={faXmark} size="lg" className="absolute right-2 top-2 visible md:invisible drop-shadow-lg cursor-pointer hover:opacity-50 transition duration-300" onClick={() => setMenuOpen(false)} />}
            {menuLinks.map((ml, i) => {
                return (<React.Fragment key={ml.id}>
                    <MenuLink href={ml.href} name={ml.name} />
                    {i + 1 < menuLinks.length && (windowSize === "small" ? <br /> : <>|</>)}
                </React.Fragment>)
            })}
        </nav>
        {menuOpen && <div className="fixed inset-0 z-20" onClick={() => setMenuOpen(false)}></div>}
    </>)
}