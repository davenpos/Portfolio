import React from "react"

export default function LanguagesAndStacks({arr, links, divClasses}) {
    return (<div className={divClasses}>
        {arr.map((los, i) => <React.Fragment key={los.id}>
            <span className={`bg-black text-white rounded-full p-1 font-mono ${links ? "hover:bg-white hover:text-black duration-300" : "cursor-default"}`}>{los.name}</span>
            {i < arr.length - 1 ? <span className="cursor-default">&nbsp;</span> : null}
        </React.Fragment>)}
    </div>)
}