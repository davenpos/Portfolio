export default function PageHeading({text, topMargin}) {
    return <h2 className={`font-bold text-center text-2xl md:text-3xl ${topMargin ? "my-2" : "mb-2"}`}>{text}</h2>
}