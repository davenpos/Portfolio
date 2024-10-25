export default function Arrow({dir, handler}) {
    const id = dir === "left" ? "prevSS" : "nextSS"
    const arrow = dir === "left" ? "\u276e" : "\u276f"

    return <a id={id} onClick={handler} className={`absolute top-1/2 mt-[-14px] text-2xl font-bold p-3 cursor-pointer duration-300 opacity-0 group-hover:opacity-100 hover:text-white hover:bg-black/80 ${dir === "left" ? "hidden left-0 rounded-r-[5px]" : "right-0 rounded-l-[5px]"}`}>{arrow}</a>
}