import React, {useId} from 'react'

function Input({}) 

{
    const i = useId
  return (
    <div>Input</div>
  )
}

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className ="",
    ...props
},ref ){
    const id = useId()

    return

(
    <div className='w-full'>
        {label && <label
        className='inline-block mb-1 pl-1'
        htmlFor={id}>
            {label}
        </label>
        }
        <input 
        type={text}
        className={`px-3 py-2 rounded-lg
            Itext-black outline-none focus: bg-gray-50
        border-gray-200 w-full $ bg-white
            duration-200 border
{className}`}
        ref={ref}
        {...props}
        id={id}
        
        />
    </div>
    )
})

export default Input