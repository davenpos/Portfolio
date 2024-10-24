export default function Circle({color}) {
    let colorClass = color === 'red' ? 'bg-red-500/80' : 'bg-blue-500/80'

    return <div id={color} className={`w-48 h-48 rounded-full absolute z-0 overflow-hidden blur-xl inset-middle ${colorClass}`}></div>
}