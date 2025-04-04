export default function Institute(props) {
    return (<div className="grid grid-cols-[20%_1fr] md:grid-cols-[8.333333%_1fr] gap-3 my-3">
        <img src={props.logo} className="rounded-full" />
        <div>
            <span className="duration-300 font-bold text-lg md:text-xl text-center md:text-left">
                {props.name}
            </span>&nbsp;<span className="text-xs md:text-sm">({props.start}-{props.end})</span>
            {props.degree && <p className="text-sm md:text-base">{props.degree}</p>}
        </div>
    </div>)
}