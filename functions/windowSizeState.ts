import { useState, useEffect } from "react"

export default function windowSizeState(
    small: string,
    med: string
) {
    const [value, setValue] = useState(small)

    useEffect(() => {
        function updateValue() {
            if (window.innerWidth >= 768) setValue(med)
            else setValue(small)
        }

        updateValue()

        window.addEventListener("resize", updateValue)
        return () => window.removeEventListener("resize", updateValue)
    }, [small, med])

    return value
}