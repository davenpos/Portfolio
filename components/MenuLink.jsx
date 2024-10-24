"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MenuLink({href, name}) {
    const pathname = usePathname()
    const currPage = pathname === href || (window.location.href.includes(href) && href != "/")

    return <Link className={`p-2 duration-300 ${currPage ? "text-slate-950 underline font-bold" : "hover:opacity-50"}`} href={href}>{name}</Link>
}