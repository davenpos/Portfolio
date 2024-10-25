"use client"
import { useEffect } from 'react'
import newScreenshot from '@/functions/newScreenshot'
const dotenv = require('dotenv')
dotenv.config()

export default function screenshotsSlide({title, ss}) {
    useEffect(() => newScreenshot(), [])

    return (<>
        <img src={null} alt="" id="currentImage" className="w-full" />
        <img src={`${process.env.NEXT_PUBLIC_STRAPIURL}${ss[0].formats.large.url}`} alt={`Screenshot 1 of ${title}`} id="currentImage" className="w-full" />
        {ss.length > 1 ? <>
            <a id="prevCover" className="hidden">&#10094;</a>
            <a id="nextCover" className="">&#10095;</a>
        </> : null}
    </>)
}