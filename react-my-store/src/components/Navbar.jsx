import React from 'react'

function Navbar({openCart,cartCount}) {
  return (
    <nav className='p-4 bg-red-600 text-black flex justify-between items-center  '>
        <h1 className='text-2xl font-bold'>keesho-store</h1>
        <button onClick={openCart} className='bg-green-400 text-black px-4 py-2 rounded-full'>Cart:{cartCount}</button>
    </nav>
  )
}

export default Navbar
