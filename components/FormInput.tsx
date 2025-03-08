import { forwardRef } from "react"

export default forwardRef<
    HTMLInputElement | HTMLTextAreaElement,
    FormInputProps
>(function FormInput({ name, label }, ref) {
    return (<>
        {name === "content" ?
            <textarea name={name} id={name} placeholder={label} rows={15} className="border border-black mb-2 col-span-2 p-1 w-full" ref={ref as React.Ref<HTMLTextAreaElement>}></textarea> :
            <div className="grid grid-cols-[25%_75%] md:grid-cols-[20%_80%] my-2">
                <label htmlFor={name}>{label}</label>
                <input type={name === "email" ? "email" : "text"} id={name} name={name} className="border border-black px-1" ref={ref as React.Ref<HTMLInputElement>} />
            </div>
        }
    </>)
})