export default function nextScreenshot(curr, next, numOfScreenshots) {
    const currSlide = document.getElementById(`screenshot${curr}`)
    const nextSlide = document.getElementById(`screenshot${next}`)
    const leftArr = document.getElementById("prevSS")
    const rightArr = document.getElementById("nextSS")
    currSlide.classList.toggle("hidden")
    nextSlide.classList.toggle("hidden")

    if (next > 0 && leftArr.classList.contains("hidden")) {
        leftArr.classList.remove("hidden")
    }
    if (next == 0) leftArr.classList.add("hidden")
    if (next < numOfScreenshots - 1 && rightArr.classList.contains("hidden")) {
        rightArr.classList.remove("hidden")
    }
    if (next == numOfScreenshots - 1) rightArr.classList.add("hidden")
}