import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

export interface FooterLink {
    id: number
    link: URL | `${'mailto:' | 'tel:'}${string}` | HrefPageSlug
    icon: IconDefinition
}