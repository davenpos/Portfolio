import Link from 'next/link'
import Information from '@/components/Information'

export default function Institute(props) {
    return (<div className="grid grid-cols-[20%_1fr] md:grid-cols-[8.333333%_1fr] gap-3 my-3">
        <Link href={`/education/${props.slug}`} className="overflow-hidden">
            <img src={props.logo} className="rounded-full hover:opacity-70 duration-300" />
        </Link>
        <div>
            <Link href={`/education/${props.slug}`} className="hover:opacity-50 duration-300 font-bold text-lg md:text-xl text-center md:text-left">
                {props.name}
            </Link>&nbsp;<span className="text-xs md:text-sm">({props.start}-{props.end})</span>
            {props.degree !== "none" && <p className="text-sm md:text-base">{props.degree}</p>}
            <Information type="GPA" text={props.gpa} />
        </div>
    </div>)
}