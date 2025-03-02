export default function createValidURL(url: string): ValidURL {
    let validURL
    try {
        validURL = url ? new URL(url).toString() : null
    } catch {
        validURL = null
    }
    return validURL as ValidURL
}