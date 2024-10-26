import React from 'react'
import MenuLink from '@/components/MenuLink'

export default function Header() {
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
        {
            id: 5,
            name: "Contact",
            href: "/contact"
        }
    ]
    return (<header className="max-w-4xl mx-auto text-center my-2 z-10">
        <h2 className="text-4xl md:text-5xl my-3 font-bold">Simeon Davenport</h2>
        <nav className="bg-amber-600 inline-block text-base md:text-xl py-1 text-slate-800 rounded-full cursor-default">
            {menuLinks.map((ml, i) => {
                return (<React.Fragment key={ml.id}>
                    <MenuLink href={ml.href} name={ml.name} />
                    {i + 1 < menuLinks.length ? <>|</> : null}
                </React.Fragment>)
            })}
        </nav>
    </header>)
}