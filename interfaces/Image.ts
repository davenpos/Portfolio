interface Image extends StrapiEntry, Omit<ImageFormat, "path" | "sizeInBytes"> {
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