"use client"
import { useEffect } from 'react'
import Glide from '@glidejs/glide'
import Arrow from '@/components/Arrow'
const dotenv = require('dotenv')
dotenv.config()

export default function ScreenshotsSlide({title, ss}) {
    useEffect(() => {
        new Glide("#screenshots").mount()
    }, [])

    return (<div id="screenshots" className="overflow-hidden group">
        <div className="glide__track" data-glide-el="track">
            <div className="glide__slides">
                {ss.map((curr, i) => (
                    <img id={`screenshot${i}`} key={curr.id} src={`${process.env.NEXT_PUBLIC_STRAPIURL}${curr.formats.large.url}`} alt={`Screenshot ${i + 1} of ${title}`} className="w-full inline" />
                ))}
            </div>
            {ss.length > 1 ? <>
                <div className="glide__arrows" data-glide-el="controls">
                    <Arrow dir="left" />
                    <Arrow dir="right" />
                </div>
            </> : null}
        </div>
    </div>)
}