import { pageSlugs, PageSlug } from '@/types/PageSlug'

export default function createHrefPageSlug(slug: string): HrefPageSlug {
    if (!slug.startsWith("/") || !pageSlugs.includes(slug.slice(1) as PageSlug)) {
        console.log(slug)
        throw new Error("Invalid HREF page slug")
    }
    return slug as HrefPageSlug
}