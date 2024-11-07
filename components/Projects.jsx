import ProjectListing from '@/components/ProjectListing'

export default function Projects({projects}) {
    return (<div>
        {projects.map(p => {
            return <ProjectListing key={p.id} title={p.title} desc={p.description} slug={p.slug} img={p.screenshot[0].formats.medium.url} las={p.languages_stacks} />
        })}
    </div>)
}