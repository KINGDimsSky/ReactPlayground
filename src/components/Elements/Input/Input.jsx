import React from 'react'

const Input = ({type, placeholder, name}) => {
  return (
    <input type={type} className="placeholder:opacity-50  text-sm border rounded w-full py-2 px-3 text-slate-700" 
    placeholder={placeholder} name={name} id={name}/>
  )
}

export default Input