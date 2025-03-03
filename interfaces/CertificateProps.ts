interface CertificateProps extends Pick<Certificate,
    "name" |
    "completed" |
    "slug"
> {
    key: StrapiEntry["id"]
    desc: Certificate["description"]
    picture: ImageFormat["url"]
}