interface Project extends StrapiEntry {
    title: string
    description: string
    link: ValidURL
    code: ValidURL
    date: Date
    screenshot: Image[]
    languages_stacks: LanguagesAndStacks[]
}