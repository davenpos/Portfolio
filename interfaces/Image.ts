interface Image extends Pick<
    StrapiEntry,
    "id" | "documentId" | "createdAt" | "updatedAt" | "publishedAt"
>, Omit<
    ImageFormat,
    "path" | "sizeInBytes"
> {
    alternativeText: string | null
    caption: string | null
    formats: {
        thumbnail: ImageFormat
        small?: ImageFormat
        medium?: ImageFormat
        large?: ImageFormat
    }
    previewUrl: ValidURL
    provider: string
}