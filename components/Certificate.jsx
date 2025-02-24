"use client"
import Link from 'next/link'
import Information from '@/components/Information'
import getExcerpt from '@/functions/getExcerpt'

export default function Certificate(props) {
    const excerpt = getExcerpt(props.desc, 100)

    return (<div className="flex flex-col md:flex-row md:gap-3 my-3">
        <Link href={`/certificates/${props.slug}`} className="overflow-hidden flex-shrink-0 w-3/5 md:w-[300px] m-auto">
            <img src={props.picture} className="object-cover hover:opacity-70 duration-300 hover:scale-125 w-full h-auto" />
        </Link>
        <div className="flex flex-col max-w-full overflow-hidden">
            <div className="text-center md:text-left">
                <Link href={`/certificates/${props.slug}`} className="hover:opacity-50 duration-300 font-bold text-lg md:text-xl text-center md:text-left">
                    {props.title}
                </Link>
            </div>
            <Information type="Date completed" text={props.completed} />
            <p className="text-sm md:text-base w-full break-words overflow-hidden">
                {excerpt}
            </p>
        </div>
    </div>)
}