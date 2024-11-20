"use client"
import { createContext } from "react"
import ProjectListing from '@/components/ProjectListing'

export const LangsLinks = createContext()

export default function Projects({projects, langsLinks}) {
    return (<LangsLinks.Provider value={langsLinks}>
        <div>
            {projects.map(p => {
                return <ProjectListing key={p.id} title={p.title} desc={p.description} slug={p.slug} img={p.screenshot[0].formats.medium.url} las={p.languages_stacks} />
            })}
        </div>
    </LangsLinks.Provider>)
}