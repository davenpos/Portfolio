import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Navbar from '@/components/Navbar'
import NavbarIcon from '@/components/NavbarIcon'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setMenuOpen(false)
    }, [pathname, setMenuOpen])

    return (<header className="max-w-4xl mx-auto text-center my-2 z-20">
        <h2 className="text-4xl md:text-5xl my-3 font-bold">Simeon Davenport</h2>
        <NavbarIcon icon={faBars} open={true} setMenuOpen={setMenuOpen} />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>)
}