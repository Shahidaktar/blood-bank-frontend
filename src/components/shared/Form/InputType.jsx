import React from 'react'

const InputType = ({id,name,type,required,label,labelFor,onchange,value,autoComplete}) => {
  return (
    <>
    <div className='mt-2'>
        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor={labelFor}>
                {label}
              </label>
              <div className="mt-2">
                <input
                  id={id}
                  name={name}
                  type={type}
                  value={value}
                  required={required}
                  onChange={onchange}
                  autoComplete={autoComplete}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
    </>
  )
}

export default InputType