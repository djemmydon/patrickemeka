import React from 'react'

function Header({name}) {
  return (
    <div>
       <h1 className="text-[#89715b] text-4xl font-bold  py-12 text-center font-heading uppercase">{name}</h1>
    </div>
  )
}

export default Header