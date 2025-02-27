import React from "react"

export default function Description({desc, align}: {desc: string, align: TextAlign}) {
    const paragraphs = desc.split("\n")

    return (<>
        {paragraphs.map((p, i) => (<React.Fragment key={i}>
            {p !== "" && <>
                <p className={`text-${align} text-sm md:text-base`}>{p}</p>
                {i < paragraphs.length - 1 && <br />}
            </>}
        </React.Fragment>))}
    </>)
}