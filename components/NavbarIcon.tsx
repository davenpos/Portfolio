import { Dispatch, SetStateAction } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

export default function NavbarIcon({icon, open, setMenuOpen}: {
    icon: IconDefinition,
    open: boolean, 
    setMenuOpen: Dispatch<SetStateAction<boolean>>
}) {
    return <FontAwesomeIcon icon={icon} size="lg" className="absolute right-2 top-2 visible md:invisible drop-shadow-lg cursor-pointer hover:opacity-50 transition duration-300" onClick={() => setMenuOpen(open)} />
}