interface Institute extends StrapiEntry {
    institute: string,
    start: number
    end: number
    gpa: number
    description: string
    classes: Semester[]
    degree: string
    logo: Image
    honours_certificate: Image | null
    diploma: Image | null
}