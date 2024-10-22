import React from 'react'

const Button = ({className, children, onClick = () => {}, type = "button"}) => {
  return (
    <button onClick={onClick} className={`h-10 px-6 font-semibold rounded-md ${className}`} type={type}>
     {children}
    </button>
  )
}

export default Button