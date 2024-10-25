"use client"
import { useState, useEffect } from 'react'
import Arrow from '@/components/Arrow'
import nextScreenshot from '@/functions/nextScreenshot'
const dotenv = require('dotenv')
dotenv.config()

export default function ScreenshotsSlide({title, ss}) {
    const [currIndex, setCurrIndex] = useState(0)

    const prevSlide = () => {
        let newIndex = currIndex - 1
        setCurrIndex(currIndex - 1)
        nextScreenshot(currIndex, newIndex, ss.length)
    }

    const nextSlide = () => {
        let newIndex = currIndex + 1
        setCurrIndex(currIndex + 1)
        nextScreenshot(currIndex, newIndex, ss.length)
    }

    return (<div className="relative group">
        {ss.map((curr, i) => {
            return <img id={`screenshot${i}`} key={curr.id} src={`${process.env.NEXT_PUBLIC_STRAPIURL}${curr.formats.large.url}`} alt={`Screenshot ${i + 1} of ${title}`} className={`w-full ${i > 0 ? "hidden" : ""}`} />
        })}
        {ss.length > 1 ? <>
            <Arrow dir="left" handler={prevSlide} />
            <Arrow dir="right" handler={nextSlide} />
        </> : null}
    </div>)
}