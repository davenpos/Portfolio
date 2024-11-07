export default function LanguagesAndStacks({arr, links}) {
    return (<>
        {arr.map((los, i) => <>
            <span key={los.id} className={`bg-black text-white rounded-full p-1 font-mono ${links ? "hover:bg-white hover:text-black duration-300" : "cursor-default"}`}>{los.name}</span>
            {i < arr.length - 1 ? <span className="cursor-default">&nbsp;</span> : null}
        </>)}
    </>)
}