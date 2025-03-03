interface Certificate extends StrapiEntry {
    name: string
    instructor: string | null
    completed: Date
    link: ValidURL
    description: string
    picture: Image
}