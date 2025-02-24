import Certificate from '@/components/Certificate'

export default function CertificatesList({certificates}) {
    return (<div>
        {certificates.map(cert => {
            return <Certificate key={cert.id} name={cert.name} completed={cert.completed} desc={cert.description} slug={cert.slug} picture={cert.picture.formats.small.url} />
        })}
    </div>)
}