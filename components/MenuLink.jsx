import Link from 'next/link'

export default function MenuLink({href, name}) {
    return <Link href={href}>{name}</Link>
}