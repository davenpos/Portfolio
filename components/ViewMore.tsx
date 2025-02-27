import Link from 'next/link'

export default function ViewMore({length, href, text}: {length: number, href: HrefPageSlug, text: string}) {
    return (<>
        {length > 3 && <div className="mt-3 text-center">
            <Link href={href} className="underline hover:opacity-50 duration-300 font-bold">{text}</Link>
        </div>}
    </>)
}