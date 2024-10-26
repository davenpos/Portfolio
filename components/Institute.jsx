import Link from 'next/link'
import Information from '@/components/Information'
const dotenv = require('dotenv')
dotenv.config()

export default function Institute(props) {
    return (<div className="md:grid md:grid-cols-[8.333333%_1fr] md:gap-3 my-3">
        <Link href={`/educations/${props.slug}`} className="overflow-hidden">
            <img src={`${process.env.NEXT_PUBLIC_STRAPIURL}/${props.logo}`} className="rounded-full hover:opacity-70 duration-300" />
        </Link>
        <div>
            <Link href={`/educations/${props.slug}`} className="hover:opacity-50 duration-300 font-bold text-xl text-center md:text-left">
                {props.name}
            </Link>&nbsp;<span className="text-sm">({props.start}-{props.end})</span>
            {props.degree !== "none" ? <p>{props.degree}</p> : null}
            <Information type="GPA" text={props.gpa} />
        </div>
    </div>)
}