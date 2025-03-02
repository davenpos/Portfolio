import Institute from '@/components/Institute'

export default function InstitutesList({institutes}: {institutes: Institute[]}) {
    return (<div>
        {institutes.map(ins => {
            return <Institute key={ins.id} name={ins.institute} start={ins.start} end={ins.end} slug={ins.slug} logo={ins.logo.formats.thumbnail.url} gpa={ins.gpa} degree={ins.degree} />
        })}
    </div>)
}