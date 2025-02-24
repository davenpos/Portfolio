export default function getExcerpt(desc, words) {
    const descArray = desc.split(' ')
    return descArray.length < words ? desc : descArray.slice(0, words).join(' ') + "..."
}