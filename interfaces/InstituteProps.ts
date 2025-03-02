interface InstituteProps extends Pick<Institute,
    "start" |
    "end" |
    "slug" |
    "gpa" |
    "degree"
> {
    key: Institute["id"]
    name: Institute["institute"]
    logo: ImageFormat["url"]
}