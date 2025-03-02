interface ProjectProps extends Pick<Project,
    "title" |
    "slug"
> {
    key: StrapiEntry["id"]
    desc: Project["description"]
    img: ImageFormat["url"]
    las: Project["languages_stacks"]
}