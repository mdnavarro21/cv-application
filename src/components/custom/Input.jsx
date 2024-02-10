import { forwardRef } from "react"
const input = forwardRef(function Input({ label, className, ...inputProps}, ref) {
    return (
        <span>
            <label className="mb-1 font-medium text-base w-full" htmlFor={inputProps.id}>{label}</label>
            <input 
                {...inputProps} 
                className={className+' px-1.5 text-base'}
                autoFocus={ inputProps.autoFocus ? true : false}
                ref={ref}
            />
        </span>
    )
})

export default input