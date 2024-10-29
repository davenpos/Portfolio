export default function FormInput({name, label}) {
    return (<>
        {name === "content" ?
            <textarea name={name} id={name} placeholder={label} rows="15" className="border border-black mb-2 col-span-2 p-1 w-full"></textarea> :
            <div className="grid grid-cols-[20%_80%] my-2">
                <label htmlFor={name}>{label}</label>
                <input type={name === "email" ? "email" : "text"} id={name} name={name} className="border border-black px-1" />
            </div>
        }
    </>)
}