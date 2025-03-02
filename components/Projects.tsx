"use client"
import { createContext } from "react"
import ProjectListing from '@/components/ProjectListing'
import createValidURL from '@/functions/createValidURL'

export const LangsLinks = createContext<boolean>(true)

export default function Projects({projects, langsLinks}: {projects: StrapiEntry[], langsLinks: boolean}) {
    return (<LangsLinks.Provider value={langsLinks}>
        <div>
            {projects.map(p => {
                const img = createValidURL(p.screenshot[0].formats.medium.url)

                return <ProjectListing key={p.id} title={p.title} desc={p.description} slug={p.slug} img={img} las={p.languages_stacks} />
            })}
        </div>
    </LangsLinks.Provider>)
}