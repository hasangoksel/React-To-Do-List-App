import React from 'react'

const Card = (props) => {
  return (
        <div className={`flex flex-col border rounded-2xl m-20   bg-slate-50 z-50 shadow-lg shadow-indigo-500/40  ${props.className}`}>{props.children}</div>
    
  )
}

export default Card