export default function Information({type, text}: {type: string, text: string | number | Date}) {
    let displayText = text.toString()

    if (text instanceof Date || (typeof text === "number" && text > 1000000000000) || 
    (typeof text === "string" && !isNaN(Date.parse(text)))) {
        const date = new Date(text)

        if (!isNaN(date.getTime())) {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

            displayText = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
        }
    }

    return <p className="text-sm md:text-base"><b>{type}: </b>{displayText}</p>
}