export default function Certificate({type, src, school, exists}) {
    const altDesc = type === "Diploma" ? "diploma" : "Honour's certificate"
    if (type === "Honours") console.log(src)

    return (<>
        {exists ? <div className="h-fit flex flex-col items-center mt-3">
            <img src={src} alt={`Simeon Davenport's ${altDesc} from ${school}`} className="mx-auto" />
            <p className="text-center">{type === "Diploma" ? type : altDesc}</p>
        </div> : null}
    </>)
}