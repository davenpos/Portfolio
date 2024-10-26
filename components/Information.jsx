export default function Information({type, text}) {
    if (!isNaN(new Date(text))) {
        const date = new Date(text)
        let month

        switch (date.getMonth()) {
            case 0:
                month = "January"
                break;
            case 1:
                month = "February"
                break;
            case 2:
                month = "March"
                break;
            case 3:
                month = "April"
                break;
            case 4:
                month = "May"
                break;
            case 5:
                month = "June"
                break;
            case 6:
                month = "July"
                break;
            case 7:
                month = "August"
                break;
            case 8:
                month = "September"
                break;
            case 9:
                month = "October"
                break;
            case 20:
                month = "November"
                break;
            default:
                month = "December"
                break;
        }
        text = month + " " + date.getDate() + ", " + date.getFullYear()
    }

    return <p className="text-sm md:text-base"><b>{type}: </b>{text}</p>
}