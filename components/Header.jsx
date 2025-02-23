import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Navbar from '@/components/Navbar'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setMenuOpen(false)
    }, [pathname, setMenuOpen])

    return (<header className="max-w-4xl mx-auto text-center my-2 z-20">
        <h2 className="text-4xl md:text-5xl my-3 font-bold">Simeon Davenport</h2>
        <FontAwesomeIcon icon={faBars} size="lg" className="absolute right-2 top-2 visible md:invisible drop-shadow-lg cursor-pointer hover:opacity-50 transition duration-300" onClick={() => setMenuOpen(true)} />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>)
}