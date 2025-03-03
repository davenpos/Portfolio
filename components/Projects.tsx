"use client"
import { createContext } from "react"
import ProjectListing from '@/components/ProjectListing'
import createValidURL from '@/functions/createValidURL'

export const LangsLinks = createContext<boolean>(true)

export default function Projects({projects, langsLinks}: {projects: Project[], langsLinks: boolean}) {
    return (<LangsLinks.Provider value={langsLinks}>
        <div>
            {projects.map(p => {
                const screenshot: Image = p.screenshot[0]
                const imgFormats = screenshot.formats
                const imgSRC = createValidURL(imgFormats.medium?.url || imgFormats.small?.url || imgFormats.thumbnail.url)

                return <ProjectListing key={p.id} title={p.title} desc={p.description} slug={p.slug} img={imgSRC} las={p.languages_stacks} />
            })}
        </div>
    </LangsLinks.Provider>)
}