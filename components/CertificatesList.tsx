import Certificate from '@/components/Certificate'
import createValidURL from '@/functions/createValidURL'

export default function CertificatesList({certificates}: {certificates: Certificate[]}) {
    return (<div>
        {certificates.map(cert => {
            const picFormats = cert.picture.formats
            const picture = createValidURL(picFormats.small?.url || picFormats.thumbnail.url)

            return <Certificate key={cert.id} name={cert.name} completed={cert.completed} desc={cert.description} slug={cert.slug} picture={picture} />
        })}
    </div>)
}