"use client"
import React from "react"

export default function LanguagesAndStacks({ arr }) {
    return (<div className="hide-scrollbars w-full max-w-full whitespace-nowrap text-center md:text-left">
        {arr.map((los, i) => (<React.Fragment key={i}>
            <span className="bg-black text-white rounded-full p-1 font-mono cursor-default">{los}</span>
            {i < arr.length - 1 && <span className="cursor-default">&nbsp;</span>}
        </React.Fragment>))}
    </div>)
}