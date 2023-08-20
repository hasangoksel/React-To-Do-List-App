import React from 'react'

const Button = (props) => {
  return (
    <button className={`bg-green-700 text-white p-2 text-center ${props.className}`} 
    type={props.type || "button"}
    onClick={props.onClick}>{props.children}</button>
  )
}

export default Button