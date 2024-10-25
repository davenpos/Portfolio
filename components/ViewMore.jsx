import Link from 'next/link'

export default function ViewMore({length, href, text}) {
    return (<>
        {length > 3 ? <Link href={href} className="underline text-center hover:opacity-50 duration-300 block font-bold mt-3">{text}</Link> : null}
    </>)
}