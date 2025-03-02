import Institute from '@/components/Institute'
import createValidURL from '@/functions/createValidURL'

export default function InstitutesList({institutes}: {institutes: Institute[]}) {
    return (<div>
        {institutes.map(ins => {
            const logoURL = createValidURL(ins.logo.formats.thumbnail.url)

            return <Institute key={ins.id} name={ins.institute} start={ins.start} end={ins.end} slug={ins.slug} logo={logoURL} gpa={ins.gpa} degree={ins.degree} />
        })}
    </div>)
}