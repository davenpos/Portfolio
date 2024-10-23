export default function Footer() {
    return (<footer className="text-center w-full max-w-[1000px] mx-auto bg-orange-800 rounded-[15px] opacity-90 my-3 text-white shadow-lg p-1">
        <p className="text-sm">&copy; {new Date().getFullYear()}</p>
        <p className="text-sm">Website powered by Render, built by Simeon Davenport</p>
    </footer>)
}