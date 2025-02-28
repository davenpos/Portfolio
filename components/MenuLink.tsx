"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MenuLink({href, name}: {href: "/" | HrefPageSlug, name: string}) {
    const pathname = usePathname()
    const currPage = pathname === href || (pathname.startsWith(href) && href != "/")

    return <Link className={`p-2 duration-300 ${currPage ? "text-slate-950 underline font-bold" : "hover:opacity-50"}`} href={href}>{name}</Link>
}