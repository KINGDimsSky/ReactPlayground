import React from 'react'

const Label = ({children, htmlfor}) => {
  return (
    <label htmlFor={htmlfor} className="block text-slate-700 text-sm font-bold mb-2">
    {children}
  </label>
  )
}

export default Label