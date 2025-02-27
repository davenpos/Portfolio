import React, { useEffect, Dispatch, SetStateAction } from 'react'
import MenuLink from '@/components/MenuLink'
import NavbarIcon from '@/components/NavbarIcon'
import createHrefPageSlug from '@/functions/createHrefPageSlug'
import windowSizeState from '@/functions/windowSizeState'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Navbar({menuOpen, setMenuOpen}: {menuOpen: boolean, setMenuOpen: Dispatch<SetStateAction<boolean>>}) {
    const menuNames = ["Home", "About", "Projects", "Education", "Certificates", "Contact"]
    const menuLinks: NavbarLink[] = []

    menuNames.forEach((curr, i) => {
        const hrefVal = curr === "Home" ? "/" : createHrefPageSlug("/" + curr.toLowerCase())

        menuLinks.push({
            id: i + 1,
            name: curr,
            href: hrefVal
        })
    })

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
        <nav className={`bg-amber-600 z-30 ${windowSize === "small" ? `w-full absolute top-0 left-0 opacity-90 text-left px-3 py-2 transition duration-300 ${!menuOpen && "-translate-y-full"}` : "inline-block text-base md:text-xl py-1 text-slate-800 rounded-full cursor-default"}`}>
            {windowSize === "small" && <NavbarIcon icon={faXmark} open={false} setMenuOpen={setMenuOpen} />}
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