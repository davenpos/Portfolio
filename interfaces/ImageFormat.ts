interface ImageFormat {
    name: string
    hash: string
    ext: string
    mime: string
    path: string | null
    width: number
    height: number
    size: number
    sizeInBytes: number
    url: ValidURL
    provider_metadata: {
        public_id: string
        resource_type: string
    }
}