import React from "react"

export default function Description({desc, align}) {
    desc = desc.split("\n")

    return (<>
        {desc.map((p, i) => (<React.Fragment key={i}>
            {p !== "" ? <>
                <p className={`text-${align} text-sm md:text-base`}>{p}</p>
                {i < desc.length - 1 ? <br /> : null}
            </> : null}
        </React.Fragment>))}
    </>)
}