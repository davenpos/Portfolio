"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MenuLink({href, name}) {
    const pathname = usePathname()

    return <Link className={`p-2 duration-300 ${pathname === href ? "text-slate-950 underline font-bold" : "hover:opacity-50"}`} href={href}>{name}</Link>
}