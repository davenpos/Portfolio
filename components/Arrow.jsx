export default function Arrow({dir}) {
    const arrow = dir === "left" ? "\u276e" : "\u276f"
    const id = (dir === "left" ? "prev" : "next") + "Arrow"

    return <button id={id} className={`absolute top-1/2 mt-[-1.5rem] text-2xl font-bold p-3 cursor-pointer duration-300 opacity-0 group-hover:opacity-100 hover:text-white hover:bg-black/80 glide__arrow glide__arrow--${dir} ${dir === "left" ? "rounded-r-[5px]" : "rounded-l-[5px] justify-self-end"}`} data-glide-dir={`${dir === "left" ? "<" : ">"}`}>{arrow}</button>
}