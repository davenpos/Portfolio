"use client"
import { useEffect } from 'react'
import Glide from '@glidejs/glide'
import Arrow from '@/components/Arrow'
import createValidURL from '@/functions/createValidURL'

export default function ScreenshotsSlide({title, ss}: {
    title: string,
    ss: Image[]
}) {
    useEffect(() => {
        new Glide("#screenshots").mount()
    }, [])
    
    return (<div id="screenshots" className="overflow-hidden relative group md:mb-2">
        <div className="glide__track" data-glide-el="track">
            <div className="glide__slides">
                {ss.map((curr, i) => {
                    const imageSRC = createValidURL(curr.formats.large?.url || curr.formats.medium?.url || curr.formats.small?.url || curr.formats.thumbnail.url)

                    return <img id={`screenshot${i}`} key={curr.id} src={imageSRC} alt={`Screenshot ${i + 1} of ${title}`} className="w-full inline" />
                })}
            </div>
            {ss.length > 1 && <>
                <div className="glide__arrows grid" data-glide-el="controls">
                    <Arrow dir="left" />
                    <Arrow dir="right" />
                </div>
            </>}
        </div>
    </div>)
}