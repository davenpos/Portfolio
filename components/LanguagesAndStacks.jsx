export default function LanguagesAndStacks({arr, links}) {
    return (<>
        {arr.map((los, i) => <>
            <span key={los.id} className={`bg-black text-white rounded-full p-1 font-mono ${links ? "hover:bg-white hover:text-black duration-300" : ""}`}>{los.name}</span>
            {i < arr.length - 1 ? <>&nbsp;</> : null}
        </>)}
    </>)
}