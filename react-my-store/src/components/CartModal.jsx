import React, { useState } from 'react'

function CartModal({ closeCart,cartItems,removeCart }) {
  const [total, setTotal]=useState(0); 
  const addTotal = (add) => {
  setTotal(total+add)
  }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center h-150'>
          <div className='bg-white p-6 rounded-lg w-150  shadow-xl'>
            
            <h2 className='text-xl font-bold text-indigo-600 mb-4 text-center'> your Order List</h2>
              { cartItems.length > 0 ? (
                  <div>
                    {cartItems.map ((item)=> (
                      <div key ={item.id} className='flex justify-between items-center mb-2 gap-4'>
                      
                        <img src={item.image} alt={item.title} className='h-12 w-12'/>
                        <div className='text-blue-500 w-80'>
                            {item.title}
                        </div>
                        <div className='text-blue-700 font-bold'> 
                          {item.price} 
                          
                          
                        </div>
                        
                        <button onClick={()=> removeCart(item.id)} className='text--400 bg-yellow-300 p-2 rounded-full'>Delete</button>
                        <button onClick={()=> addTotal(item.price)} className='bg-zinc-700 p-2 rounded-xl text-white'>Add price</button>
                      </div>
                       
                    ))}
                  </div>
              ):(<p className='text-gray-60'>Items Delete From List</p>)
              

              }
              <div className='flex justify-between'>
                <h3 className='text-blue-700 font-bold text-2xl'>Total</h3>
                <button className=' font-bold text-2xl'>{total}</button>
              </div>
              
            <button onClick={closeCart} className='mt-4 bg-red-500 text-white w-full py-2 rounded-full'>Close</button>
          </div>
    </div>
  )
}

export default CartModal

