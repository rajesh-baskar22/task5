import React, { useEffect, useState } from 'react'

function ProductList({cartItems, setCartItems}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))

 
    
  },[]); 
    const addToCart =(product) =>{
        if (cartItems.find((item)=> item.id === product.id)){
          alert('Product Already in cart');
        }
        else{
          setCartItems ([...cartItems,product])
        }
       
    }
  return (
    

    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-4'>
     
     {products.map((product)=>
     (
      <div key={product.id} className='border border-blue-300 p-4 rounded-lg shadow-lg bg-white'>
      <img src={product.image} alt={product.title} className='h-40 mx-auto mb-4'/>
      <h2 className='text-lg font-semibold text-gray-600'>{product.title}</h2>
      <p className='text-lg text-red-600 font-bold'>{product.price}</p>
      <button onClick={()=> addToCart(product)} className='bg-blue-600 text-white w-full py-2 my-2 rounded-full'>Add To Cart</button>

      </div>
     ))}
    </div>
  )
}

export default ProductList
